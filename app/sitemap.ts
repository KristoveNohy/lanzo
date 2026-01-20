import { siteConfig, caseStudies, serviceDetails } from "@/data/site";
import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${siteConfig.domain}`;
  const routes = [
    "",
    "/services",
    "/work",
    "/process",
    "/about",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/cookie-policy"
  ];

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  const serviceRoutes = serviceDetails.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date()
  }));

  const workRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/work/${study.slug}`,
    lastModified: new Date()
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes, ...blogRoutes];
}
