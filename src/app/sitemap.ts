import type { MetadataRoute } from "next";
import { promises as fs } from "fs";
import path from "path";
import { SITE_URL } from "@/lib/seo";

// Re-generate hourly so newly added blog posts/pages show up between deploys
// (still works on Vercel: build-time read keeps the function pure-static-friendly).
export const revalidate = 3600;

const APP_DIR = path.join(process.cwd(), "src", "app");
const CONTENT_BLOG_DIR = path.join(process.cwd(), "content", "blog");

// Routes excluded from the sitemap (still reachable, just not advertised).
const EXCLUDE = new Set<string>(["/career-form"]);

type Frequency = MetadataRoute.Sitemap[number]["changeFrequency"];

const PRIORITY_RULES: { test: RegExp; priority: number; changeFrequency: Frequency }[] = [
  { test: /^\/$/, priority: 1.0, changeFrequency: "weekly" },
  { test: /^\/blog(\/|$)/, priority: 0.7, changeFrequency: "weekly" },
  { test: /^\/(services|technology|teams|about-us)(\/|$)/, priority: 0.8, changeFrequency: "monthly" },
  { test: /^\/portfolio(\/|$)/, priority: 0.7, changeFrequency: "monthly" },
  { test: /^\/(privacy-policy|terms-conditions|cookie-policy)(\/|$)/, priority: 0.3, changeFrequency: "yearly" },
];

function ruleFor(routePath: string) {
  return (
    PRIORITY_RULES.find((r) => r.test.test(routePath)) ?? {
      priority: 0.6,
      changeFrequency: "monthly" as Frequency,
    }
  );
}

async function walkPages(
  dir: string,
  base = ""
): Promise<{ path: string; mtime: Date }[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const out: { path: string; mtime: Date }[] = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      // Skip dynamic, route-group, private, and api folders
      if (
        entry.name.startsWith("[") ||
        entry.name.startsWith("(") ||
        entry.name.startsWith("_") ||
        entry.name === "api"
      ) {
        continue;
      }
      out.push(...(await walkPages(path.join(dir, entry.name), `${base}/${entry.name}`)));
    } else if (entry.isFile() && entry.name === "page.tsx") {
      const stat = await fs.stat(path.join(dir, entry.name));
      out.push({ path: base || "/", mtime: stat.mtime });
    }
  }
  return out;
}

async function getPortfolioSlugs(): Promise<{ path: string; mtime: Date }[]> {
  // Hardcoded for now (matches the inline caseStudies map in portfolio/[slug]/page.tsx).
  // When this moves to MDX/CMS, replace with a real read.
  const slugs = ["sarai-2-0", "trackepay-crm-dashboard"];
  return slugs.map((slug) => ({ path: `/portfolio/${slug}`, mtime: new Date() }));
}

async function getBlogPosts(): Promise<{ path: string; mtime: Date }[]> {
  // Future-proof: when an MDX blog pipeline is added under content/blog/, posts get picked up automatically.
  try {
    const files = await fs.readdir(CONTENT_BLOG_DIR);
    const out: { path: string; mtime: Date }[] = [];
    for (const file of files) {
      if (!/\.(md|mdx)$/i.test(file)) continue;
      const slug = file.replace(/\.(md|mdx)$/i, "");
      const stat = await fs.stat(path.join(CONTENT_BLOG_DIR, file));
      out.push({ path: `/blog/${slug}`, mtime: stat.mtime });
    }
    return out;
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [staticPages, portfolio, blog] = await Promise.all([
    walkPages(APP_DIR),
    getPortfolioSlugs(),
    getBlogPosts(),
  ]);

  // Dedupe by path, prefer latest mtime
  const map = new Map<string, Date>();
  for (const p of [...staticPages, ...portfolio, ...blog]) {
    if (EXCLUDE.has(p.path)) continue;
    const existing = map.get(p.path);
    if (!existing || p.mtime > existing) map.set(p.path, p.mtime);
  }

  return [...map.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([routePath, mtime]) => {
      const rule = ruleFor(routePath);
      return {
        url: `${SITE_URL}${routePath === "/" ? "" : routePath}`,
        lastModified: mtime,
        changeFrequency: rule.changeFrequency,
        priority: rule.priority,
      };
    });
}
