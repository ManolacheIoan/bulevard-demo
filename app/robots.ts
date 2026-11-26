import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/", disallow: [`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/propunere/`] }], sitemap: `${site.siteUrl}/sitemap.xml` };
}
