import { MetadataRoute } from "next";
import { GLOSSARY_TERMS } from "@/lib/glossary-terms";
import {
  PUBLIC_STATIC_PATHS,
  changeFrequencyForPath,
  priorityForPath,
} from "@/lib/sitemap-paths";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = PUBLIC_STATIC_PATHS.map((path) => {
    const url = path === "/" ? baseUrl : `${baseUrl}${path}`;
    return {
      url,
      lastModified,
      changeFrequency: changeFrequencyForPath(path),
      priority: priorityForPath(path),
    };
  });

  const glossaryTermPages: MetadataRoute.Sitemap = GLOSSARY_TERMS.map((term) => ({
    url: `${baseUrl}/glossary/${term.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: priorityForPath(`/glossary/${term.slug}`),
  }));

  return [...staticPages, ...glossaryTermPages];
}
