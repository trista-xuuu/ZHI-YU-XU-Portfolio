import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./client";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const urlForImage = (source: SanityImageSource) => {
  return imageBuilder?.image(source).auto("format").fit("max");
};
