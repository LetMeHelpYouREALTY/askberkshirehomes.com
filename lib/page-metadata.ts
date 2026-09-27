import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

/** Self-referencing canonical + og:url for a path on askberkshirehomes.com */
export function pageMetadata({
  path,
  title,
  description,
  keywords,
}: {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
}): Metadata {
  const base = getSiteUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonical = normalizedPath === "/" ? base : `${base}${normalizedPath}`;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
    },
  };
}

export function canonicalForPath(pathname: string): string {
  const base = getSiteUrl();
  if (!pathname || pathname === "/") {
    return base;
  }
  return `${base}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}
