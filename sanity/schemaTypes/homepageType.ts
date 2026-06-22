import { defineField, defineType } from "sanity";

export const homepageType = defineType({
  name: "homepage",
  title: "首頁設定 (Homepage)",
  type: "document",
  fields: [
    defineField({
      name: "aboutTitle",
      title: "About 區塊大標題",
      type: "text",
      description: "支援換行",
    }),
    defineField({
      name: "aboutDescription",
      title: "個人簡介",
      type: "text",
    }),
    defineField({
      name: "aboutImage",
      title: "個人照片",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "stats",
      title: "三大數據方塊",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "小標籤", type: "string" }),
            defineField({ name: "isNumber", title: "是否為數字動畫", type: "boolean", initialValue: true }),
            defineField({
              name: "numberValue",
              title: "數字大小",
              type: "number",
              hidden: ({ parent }) => !parent?.isNumber,
            }),
            defineField({
              name: "numberSuffix",
              title: "數字後綴 (例: +)",
              type: "string",
              hidden: ({ parent }) => !parent?.isNumber,
            }),
            defineField({
              name: "unit",
              title: "單位 (例: years)",
              type: "string",
              hidden: ({ parent }) => !parent?.isNumber,
            }),
            defineField({
              name: "textValue",
              title: "文字內容",
              type: "string",
              hidden: ({ parent }) => parent?.isNumber,
            }),
            defineField({
              name: "isSolid",
              title: "黑底反白",
              type: "boolean",
              initialValue: false,
            }),
          ],
        },
      ],
      validation: (rule) => rule.max(3),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "首頁設定",
      };
    },
  },
});
