import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ROUTES } from '../src/router/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const domain = 'https://amaanitvam.org';
const outputPath = path.join(__dirname, '../public/sitemap.xml');

// Ensure directories exist
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${ROUTES.filter(route => !route.authRequired && !route.isDynamic)
    .map(route => {
      const priority = route.path === '/' ? '1.0' : '0.8';
      const changefreq = 'weekly';
      return `
  <url>
    <loc>${domain}${route.path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

fs.writeFileSync(outputPath, xml.trim(), 'utf8');
console.log(`[Sitemap Generator] Successfully generated sitemap.xml at: ${outputPath}`);
