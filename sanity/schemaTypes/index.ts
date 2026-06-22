import { type SchemaTypeDefinition } from "sanity";
import { projectType } from "./projectType";
import { homepageType } from "./homepageType";
import { siteSettingsType } from "./siteSettingsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, homepageType, siteSettingsType],
};
