import type { MetadataRoute } from "next";
import { projets } from "@/content/projets";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/realisations", "/a-propos", "/cv", "/temoignages", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...projets.map((p) => ({ url: `${site.url}/realisations/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
