import type { MetadataRoute } from "next";
import { getProjectUrl, visibleProjects } from "@/projects/registry";

export const dynamic = "force-static";

const baseUrl = "https://knutsynstad.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...visibleProjects.map((project) => ({
      url: `${baseUrl}${getProjectUrl(project.slug)}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
