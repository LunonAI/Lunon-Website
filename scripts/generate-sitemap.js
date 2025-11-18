const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.lunon.ai';
const APP_DIR = path.join(process.cwd(), 'app');
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'sitemap.xml');

function getAllRoutes(dir, baseRoute = '') {
  const routes = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const routePath = path.join(baseRoute, entry.name);

    // Skip API routes and non-public directories
    if (entry.name === 'api' || entry.name.startsWith('_')) {
      continue;
    }

    if (entry.isDirectory()) {
      // Recursively scan subdirectories
      routes.push(...getAllRoutes(fullPath, routePath));
    } else if (entry.name === 'page.tsx' || entry.name === 'page.jsx') {
      // Found a page route
      const route = baseRoute === '' ? '/' : `/${baseRoute.replace(/\\/g, '/')}`;
      routes.push(route);
    }
  }

  return routes;
}

function generateSitemap() {
  const routes = getAllRoutes(APP_DIR);
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(route => {
    const priority = route === '/' ? '1.0' : '0.8';
    return `  <url>
    <loc>${DOMAIN}${route}</loc>
    <changefreq>daily</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>
`;

  fs.writeFileSync(OUTPUT_PATH, sitemap);
  console.log(`✓ Sitemap generated with ${routes.length} routes`);
  console.log(`  Output: ${OUTPUT_PATH}`);
}

try {
  generateSitemap();
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}

