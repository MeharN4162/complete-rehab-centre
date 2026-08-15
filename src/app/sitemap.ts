import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { detailServices } from "@/data/services";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about-us",
    "/staff",
    "/services",
    "/assessments-services",
    "/appointment",
    "/testimonials",
    "/resources",
    "/contact-us",
  ];

  const serviceRoutes = detailServices.map((s) => `/services/${s.slug}`);
  const articleRoutes = articles.map((a) => `/resources/${a.slug}`);

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...articleRoutes];

  return allRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
