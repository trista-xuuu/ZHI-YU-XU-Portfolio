import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "專案 (Project)",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "專案名稱",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "網址代稱 (Slug)",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "年份",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "顯示日期 (例: Jun, 2026)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sortDate",
      title: "排序用日期 (例: 2026-06)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "client",
      title: "客戶名稱",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "types",
      title: "專案類型",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "roles",
      title: "負責角色",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "tags",
      title: "標籤",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "intro",
      title: "專案簡介",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "封面圖片",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "專案連結網址",
      type: "url",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "client",
      media: "image",
    },
  },
});
