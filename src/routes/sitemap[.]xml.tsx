import "@tanstack/react-start";
import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";

const ROUTES = [
  "/", "/about", "/services", "/affiliates", "/associations",
  "/faq", "/blog", "/contact", "/privacy", "/terms",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);
        const urls = ROUTES.map(
          (r) => `<url><loc>${site.url}${r === "/" ? "" : r}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq></url>`,
        ).join("");
        const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
