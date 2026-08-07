import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-07T00:00:00.000Z");

  return [
    {
      url: "https://memberlegacy.com",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://memberlegacy.com/team",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://memberlegacy.com/case-study",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://memberlegacy.com/privacy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://memberlegacy.com/terms",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
