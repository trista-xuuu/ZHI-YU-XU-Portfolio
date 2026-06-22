export type ProjectType = "官方網站" | "旅遊網站" | "企業網站" | "系統開發" | "ESG 網站";

export type Project = {
  slug: string;
  name: string;
  year: number;
  date: string;
  sortDate: string;
  client: string;
  types: ProjectType[];
  roles: string[];
  tags: string[];
  intro: string;
  image: string;
  url: string;
};

export const projects: Project[] = [
  {
    slug: "kisura",
    name: "KISURA EYEWEAR",
    year: 2026,
    date: "Jun, 2026",
    sortDate: "2026-06",
    client: "佑帷有限公司",
    types: ["官方網站"],
    roles: ["企劃", "UIUX 設計", "前端開發", "零售業"],
    tags: ["AI Project", "RWD 網站"],
    intro:
      "KISURA 成立於 1996 年，是佑帷有限公司旗下的純鈦眼鏡品牌。以 AI 工具為核心，協助品牌從策略到執行，進行全面數位轉型規劃。",
    image: "/images/projects/kisura.webp",
    url: "https://kisura.vercel.app/",
  },
  {
    slug: "sp-collection",
    name: "雄獅璽品旅遊",
    year: 2025,
    date: "Nov, 2025",
    sortDate: "2025-11",
    client: "雄獅",
    types: ["旅遊網站"],
    roles: ["企劃", "UIUX 設計"],
    tags: ["RWD 網站", "旅遊業"],
    intro:
      "承襲雄獅集團四十多年深耕旅遊根基，璽品發現現代旅人追求的不再只是抵達目的地，而是過程中的「質地」。於是，「璽品 SP Collection」集結了一群對生活有極致追求的旅遊職人，將行程拆解、打磨，再重新組裝，為每一位懂得生活的你，織就一段屬於靈魂與世界對話的故事。",
    image: "/images/projects/sp-collection.webp",
    url: "https://sipincollection.com/",
  },
  {
    slug: "raydium",
    name: "瑞鼎科技",
    year: 2025,
    date: "Sep, 2025",
    sortDate: "2025-09",
    client: "瑞鼎科技",
    types: ["企業網站"],
    roles: ["企劃", "UIUX 設計"],
    tags: ["RWD 網站", "科技業"],
    intro:
      "瑞鼎科技為台灣領先之積體電路設計公司，執兩岸 AMOLED 顯示驅動 IC 之牛耳，為全台前 10 大 IC 設計公司。公司成立於 2003 年，專注於提供多樣化及全系列顯示器驅動 IC、觸控 IC、電源管理及時序控制 IC 之完整解決方案。產品應用於 AIoT、智慧電視、專業電競、電腦資訊、行動及穿戴裝置、車載和工控等領域。",
    image: "/images/projects/raydium.webp",
    url: "https://www.rad-ic.com/zh-TW",
  },
  {
    slug: "yolk-design",
    name: "Yolk design",
    year: 2025,
    date: "Jan, 2025",
    sortDate: "2025-01",
    client: "蛋黃設計",
    types: ["官方網站", "系統開發"],
    roles: ["企劃", "UIUX 設計"],
    tags: ["RWD 網站", "系統開發"],
    intro:
      "蛋黃設計是一個深耕 ESG 領域近十年的專業團隊。因深知中小企業在永續發展的起步階段，往往面臨資源有限、專業知識不足等挑戰，故推出數位永續平台。不僅具備強大的功能與專業支持，同時得益於創新的 no-code 系統，使得系統簡單易用，幫助企業輕鬆完成永續網站的搭建與報告生成。",
    image: "/images/projects/yolk-design.webp",
    url: "https://www.yolkdesign.com.tw/",
  },
  {
    slug: "sakura-kitchen",
    name: "櫻花整體廚房",
    year: 2024,
    date: "Dec, 2024",
    sortDate: "2024-12",
    client: "台灣櫻花",
    types: ["官方網站"],
    roles: ["企劃", "UIUX 設計"],
    tags: ["RWD 網站", "品牌網站", "零售業"],
    intro:
      "櫻花整體廚房是台灣櫻花股份有限公司旗下的品牌。在品牌定位上以「廚房是家的新核心」為理念，主張一站滿足所有的廚房需求，透過專業美學提供客製化、精緻奢華品味、數位體驗等全方位的廚房解決方案。並深入探究不同的消費族群，以推出一系列的風格產品，滿足不同品味或家庭型態的需求，為消費者打造夢想中的理想廚房。",
    image: "/images/projects/sakura-kitchen.webp",
    url: "https://www.sakura-kitchenlife.com.tw/",
  },
  {
    slug: "otobrite",
    name: "歐特明",
    year: 2024,
    date: "Jun, 2024",
    sortDate: "2024-06",
    client: "歐特明",
    types: ["企業網站"],
    roles: ["企劃", "UIUX 設計"],
    tags: ["RWD 網站", "科技業"],
    intro:
      "歐特明於 2013 年成立，產品主要為先進駕駛輔助系統（ADAS）、視覺 AI 感知模型、高階自動駕駛相機模組等產品。企業願景為實現更簡單、安全的智慧生活與自動駕駛技術。這次的改版合作，除了形塑更有未來感的頂尖科技形象，也重新整合產品資訊及投資人專區的內容，讓網站以更清晰、易用、專業的一面提升投資者與合作夥伴的期待與信心。",
    image: "/images/projects/otobrite.webp",
    url: "https://www.otobrite.com/",
  },
  {
    slug: "shiangye",
    name: "祥業工業",
    year: 2023,
    date: "Oct, 2023",
    sortDate: "2023-10",
    client: "祥業工業",
    types: ["企業網站"],
    roles: ["企劃", "UIUX 設計"],
    tags: ["RWD 網站", "會員系統", "製造業"],
    intro:
      "祥業工業於 1978 年成立，以加工製造各種折合椅起家，無論在哪個公共場合都很容易發現他們的身影。擁有超過 45 年 B2B 國內外銷售經驗的祥業工業，在二代接手後則專注於將美學設計帶入各式椅品，並以此獲得多項國際大獎。這次的改版合作，期望透過翻轉網站形象，讓設計美學的企業精神從產品到網站能更加完整的被體現出來。",
    image: "/images/projects/shiangye.webp",
    url: "https://www.shiangye.com/",
  },
  {
    slug: "winbond-esg",
    name: "華邦 ESG",
    year: 2023,
    date: "Jul, 2023",
    sortDate: "2023-07",
    client: "華邦電子",
    types: ["ESG 網站"],
    roles: ["企劃", "UIUX 設計"],
    tags: ["RWD 網站", "ESG", "科技業"],
    intro:
      "「永續」對華邦來說，是一個多元的概念。社會永續，企業才能永續；員工永續，企業精神才能永續。所以華邦致力於營造熱情學習的幸福職場環境，積極地投入綠色產品與技術的發展。藉由資料處理，通訊、交通、智慧生活等應用場景，實踐安全與低碳的技術的核心競爭力，一點一滴的回應當代社會對環境永續的高度需求。",
    image: "/images/projects/winbond-esg.webp",
    url: "https://esg.winbond.com/",
  },
  {
    slug: "asus-esg",
    name: "華碩 ESG",
    year: 2023,
    date: "May, 2023",
    sortDate: "2023-05",
    client: "華碩",
    types: ["ESG 網站"],
    roles: ["企劃", "UIUX 設計"],
    tags: ["RWD 網站", "ESG", "科技業", "WCAG 無障礙"],
    intro:
      "在「One ASUS」的精神引領之下，華碩將 ESG 納入品牌及行銷的重要環節。除了訂定永續品牌溝通語言—“Sustaining an incredible future”，並在「循環經濟」、「責任製造」、「氣候行動」、「價值創造」四大面向，打造一致性的永續溝通語言。透過 ESG 網站及永續報告書，持續性地傳遞華碩永續影響力，及對環境與社會的重要承諾。",
    image: "/images/projects/asus-esg.webp",
    url: "https://esg.asus.com/",
  },
  {
    slug: "ufispace",
    name: "優達科技",
    year: 2023,
    date: "Mar, 2023",
    sortDate: "2023-03",
    client: "優達科技",
    types: ["企業網站"],
    roles: ["企劃", "UIUX 設計"],
    tags: ["RWD 網站", "科技業"],
    intro:
      "UfiSpace 為 5G 開放網路架構的創新領導品牌，並陸續推出業界第一的蜂巢基地台回傳路由器 (CSGR) 和世界第一的分散式解構機箱路由系統 (DDC)。其致力於建立合作夥伴生態圈驅動創新，實現網路建置開放性的真正價值：高度彈性、開放性及相容性。",
    image: "/images/projects/ufispace_2.webp",
    url: "https://www.ufispace.com/tw",
  },
  {
    slug: "qingsong",
    name: "青松健康",
    year: 2022,
    date: "Nov, 2022",
    sortDate: "2022-11",
    client: "青松健康",
    types: ["企業網站"],
    roles: ["企劃"],
    tags: ["RWD 網站", "長照業"],
    intro:
      "青松健康於 1996 年成立，主要經營社區式及住宿式等長照服務，提供居家、社區到住宿等多元照顧，服務據點遍布全台各地。為實現在地老化的理想，以傳統的機構營運為出發點，企業化、產業化為方向，持續關注亞健康、健康等各銀髮相關議題，針對相關行業做垂直及水平整合，期望做為長照業典範，促進整體長照相關服務的發展及品質。",
    image: "/images/projects/qingsong.webp",
    url: "https://www.qingsong.com.tw/",
  },
  {
    slug: "skm-esg",
    name: "新光三越 ESG",
    year: 2022,
    date: "Jun, 2022",
    sortDate: "2022-06",
    client: "新光三越",
    types: ["ESG 網站"],
    roles: ["企劃", "UIUX 設計"],
    tags: ["RWD 網站", "ESG", "百貨業"],
    intro:
      "新光三越一直努力匯集生活美好元素，定位「體驗美好生活的平台」，以信賴安全、幸福共好、綠色環境、文化藝術為實踐方向，致力永續發展。秉持著「顧客至上、真心誠意」的經營理念，以「放眼世界、心懷當地」為願景，將世界的美好帶給人們，並連結在地，期許所到之處能帶給人們更多的美好體驗。",
    image: "/images/projects/skm-esg.webp",
    url: "https://esg.skm.com.tw/",
  },
  {
    slug: "goodday-tour",
    name: "晴日旅遊",
    year: 2021,
    date: "Nov, 2021",
    sortDate: "2021-11",
    client: "晴日旅遊",
    types: ["旅遊網站"],
    roles: ["企劃", "UIUX 設計"],
    tags: ["RWD 網站", "旅遊業"],
    intro:
      "晴日旅遊為高端「日本旅遊」與「亞洲旅遊」而生的旅行社。與「晴天旅遊集團」共同創業、互助共享。「晴日團隊」操作日本頂級團體經驗超過 20 年以上，為「中高階豪華團」到「高階頂級奢華團」，不走競價路線，以創意、質感、美學為概念出發。",
    image: "/images/projects/goodday-tour.webp",
    url: "https://www.gdtours.com.tw/",
  },
  {
    slug: "taipower-esg",
    name: "台電 ESG",
    year: 2021,
    date: "Sep, 2021",
    sortDate: "2021-09",
    client: "台灣電力公司",
    types: ["ESG 網站"],
    roles: ["企劃", "UIUX 設計"],
    tags: ["RWD 網站", "ESG", "公家單位"],
    intro:
      "在推動電力建設、環境保護與社會共融的進程中，台電相信每一步行動，不只是回應氣候與能源的挑戰，更是與臺灣社會攜手邁向未來的承諾。面對全球永續發展的浪潮，將在穩定供電與邁向淨零的雙重使命之間找到平衡，引領臺灣邁向低碳、包容、永續能源的社會。",
    image: "/images/projects/taipower-esg.webp",
    url: "https://service.taipower.com.tw/csr/",
  },
  {
    slug: "chimei-museum",
    name: "奇美博物館",
    year: 2020,
    date: "Aug, 2020",
    sortDate: "2020-08",
    client: "奇美博物館",
    types: ["官方網站"],
    roles: ["UIUX 設計"],
    tags: ["RWD 網站"],
    intro:
      "奇美博物館成立的初衷，來自一份「分享」的心意，而分享的目的，則是希望「為大眾帶來幸福與溫暖」。從藝文平權、展覽活動、典藏維護、人才培育等面向衍生出不同的理念與實踐行動。除了時時刻刻保持與大眾緊密的連結，與時俱進持續創新，也期盼在用心耕耘之下，成為一個提升文化美學素養、療癒大眾心靈的幸福博物館。",
    image: "/images/projects/chimei-museum.webp",
    url: "https://www.chimeimuseum.org/",
  },
];
