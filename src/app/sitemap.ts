import { MetadataRoute } from "next";

export const meta = { domain: "https://nanobot.gg", themeColor: "#90c6ff" };

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: meta.domain,
      lastModified: new Date(),
    },
    {
      url: `${meta.domain}/features`,
      lastModified: new Date(),
    },
    {
      url: `${meta.domain}/about`,
      lastModified: new Date(),
    },
  ];
}
