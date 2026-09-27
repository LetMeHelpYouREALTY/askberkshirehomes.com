import { MetadataRoute } from "next";
import { GLOSSARY_TERMS } from "@/lib/glossary-terms";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  const glossaryPages = GLOSSARY_TERMS.map((term) => ({
    url: `${baseUrl}/glossary/${term.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...glossaryPages,
  ];
}
