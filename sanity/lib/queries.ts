import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == "project"] | order(sortDate desc) {
  _id,
  "slug": slug.current,
  name,
  year,
  date,
  sortDate,
  client,
  types,
  roles,
  tags,
  intro,
  "image": image.asset->url,
  url
}`;

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  _id,
  "slug": slug.current,
  name,
  year,
  date,
  sortDate,
  client,
  types,
  roles,
  tags,
  intro,
  "image": image.asset->url,
  url
}`;

export const homepageQuery = groq`*[_type == "homepage"][0] {
  aboutTitle,
  aboutDescription,
  "aboutImage": aboutImage.asset->url,
  stats
}`;

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  email
}`;
