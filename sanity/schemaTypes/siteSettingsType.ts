import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "全站設定 (Site Settings)",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "聯絡信箱 (Contact Email)",
      type: "string",
      validation: (rule) => rule.email().required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "全站設定",
      };
    },
  },
});
