import { createClient } from "next-sanity";
import { projects } from "../data/projects";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// 載入環境變數
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

async function migrate() {
  console.log("Starting migration...");

  // 1. 轉移專案資料
  for (const project of projects) {
    console.log(`Processing project: ${project.name}`);
    
    // 上傳圖片
    const imagePath = path.join(process.cwd(), "public", project.image);
    let imageAsset;
    try {
      const imageBuffer = fs.readFileSync(imagePath);
      imageAsset = await client.assets.upload("image", imageBuffer, {
        filename: path.basename(imagePath),
      });
      console.log(`  Uploaded image: ${imageAsset._id}`);
    } catch (e) {
      console.error(`  Failed to upload image for ${project.name}`, e);
      continue;
    }

    // 建立文件
    const doc = {
      _type: "project",
      name: project.name,
      slug: { _type: "slug", current: project.slug },
      year: project.year,
      date: project.date,
      sortDate: project.sortDate,
      client: project.client,
      types: project.types,
      roles: project.roles,
      tags: project.tags,
      intro: project.intro,
      image: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: imageAsset._id,
        },
      },
      url: project.url,
    };

    try {
      await client.create(doc);
      console.log(`  Created document: ${project.name}`);
    } catch (e) {
      console.error(`  Failed to create document for ${project.name}`, e);
    }
  }

  // 2. 建立 Homepage 設定
  console.log("Creating Homepage settings...");
  
  // 上傳首頁照片
  let aboutImageAsset;
  try {
    const aboutImagePath = path.join(process.cwd(), "public", "images", "portfolio-photo-2.webp");
    if (fs.existsSync(aboutImagePath)) {
      const aboutImageBuffer = fs.readFileSync(aboutImagePath);
      aboutImageAsset = await client.assets.upload("image", aboutImageBuffer, {
        filename: "portfolio-photo-2.webp",
      });
    }
  } catch(e) {
    console.error("Failed to upload about image", e);
  }

  await client.create({
    _type: "homepage",
    aboutTitle: "Grows together,\nGoes together.",
    aboutDescription: "Hi! 我是芝瑜，過去專注於 B2B/B2C 官方網站、一頁式活動網頁及內部系統專案。擁有五年以上的網站企劃經驗，近年轉向探索 UIUX 設計領域，期待未來能持續將創新且實用的設計思維帶入更多具挑戰性的專案中。",
    aboutImage: aboutImageAsset ? {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: aboutImageAsset._id,
      },
    } : undefined,
    stats: [
      {
        _key: "stat1",
        label: "UIUX & Planner",
        isNumber: true,
        numberValue: 5,
        numberSuffix: "+",
        unit: "years",
        isSolid: false
      },
      {
        _key: "stat2",
        label: "Published",
        isNumber: true,
        numberValue: 15,
        unit: "Projects",
        isSolid: false
      },
      {
        _key: "stat3",
        label: "Awards",
        isNumber: false,
        textValue: "Red dot Best of the Best",
        isSolid: true
      }
    ]
  });
  console.log("  Homepage settings created.");

  // 3. 建立 Site Settings
  console.log("Creating Site Settings...");
  await client.create({
    _type: "siteSettings",
    email: "trista10418063@gmail.com"
  });
  console.log("  Site Settings created.");

  console.log("Migration complete!");
}

migrate().catch(console.error);
