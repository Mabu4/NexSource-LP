#!/usr/bin/env node
/**
 * Static page generator.
 *
 *   node tools/build.mjs
 *
 * Renders every page defined under tools/content/ into plain HTML at the repo
 * root and regenerates sitemap.xml. The output is committed, so deployment
 * stays "serve static files" — no build step on the host.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { render, SITE } from './layout.mjs';

import * as deSolutions from './content/de-solutions.mjs';
import * as deSolutions2 from './content/de-solutions2.mjs';
import * as deTools from './content/de-tools.mjs';
import * as deGuides from './content/de-guides.mjs';
import * as deMisc from './content/de-misc.mjs';
import * as deFinden from './content/de-finden.mjs';
import * as deGrowth from './content/de-growth.mjs';
import * as en from './content/en.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const PAGES = [
  ...Object.values(deSolutions),
  ...Object.values(deSolutions2),
  ...Object.values(deTools),
  ...Object.values(deGuides),
  ...Object.values(deMisc),
  ...Object.values(deFinden),
  ...Object.values(deGrowth),
  ...Object.values(en),
].filter((p) => p && p.path);

// Hand-written pages that are not generated but belong in the sitemap.
const STATIC_PAGES = [
  { path: '/', priority: '1.0', changefreq: 'weekly', alt: '/de/' },
  { path: '/de/', priority: '1.0', changefreq: 'weekly', alt: '/' },
  { path: '/imprint.html', priority: '0.2', changefreq: 'yearly', alt: '/de/impressum.html' },
  { path: '/de/impressum.html', priority: '0.2', changefreq: 'yearly', alt: '/imprint.html' },
  { path: '/privacy.html', priority: '0.2', changefreq: 'yearly', alt: '/de/datenschutz.html' },
  { path: '/de/datenschutz.html', priority: '0.2', changefreq: 'yearly', alt: '/privacy.html' },
  { path: '/terms.html', priority: '0.2', changefreq: 'yearly', alt: '/de/agb.html' },
  { path: '/de/agb.html', priority: '0.2', changefreq: 'yearly', alt: '/terms.html' },
];

const today = new Date().toISOString().slice(0, 10);

function outFile(path) {
  // '/de/ratgeber/' -> 'de/ratgeber/index.html'
  return join(ROOT, path.replace(/^\//, ''), 'index.html');
}

function priorityFor(p) {
  if (p.path.includes('/ratgeber/') || p.path.includes('/guides/')) return '0.6';
  if (p.path.includes('/demo/')) return '0.7';
  return '0.9';
}

function sitemapEntry({ loc, alt, priority, changefreq, lastmod }) {
  const pair = alt
    ? (() => {
        const de = loc.includes('/de/') ? loc : alt;
        const enUrl = loc.includes('/de/') ? alt : loc;
        return `    <xhtml:link rel="alternate" hreflang="de" href="${de}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />\n`;
      })()
    : '';
  return `  <url>
    <loc>${loc}</loc>
${pair}    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function main() {
  const seen = new Set();
  for (const page of PAGES) {
    if (seen.has(page.path)) throw new Error(`Duplicate path: ${page.path}`);
    seen.add(page.path);
    const file = outFile(page.path);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, render(page), 'utf8');
    console.log('  ✓', page.path);
  }

  const entries = [
    ...STATIC_PAGES.map((p) =>
      sitemapEntry({
        loc: SITE + p.path,
        alt: p.alt ? SITE + p.alt : null,
        priority: p.priority,
        changefreq: p.changefreq,
        lastmod: today,
      })
    ),
    ...PAGES.map((p) =>
      sitemapEntry({
        loc: SITE + p.path,
        alt: p.altPath ? SITE + p.altPath : null,
        priority: priorityFor(p),
        changefreq: 'monthly',
        lastmod: today,
      })
    ),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">

${entries.join('\n\n')}

</urlset>
`;
  await writeFile(join(ROOT, 'sitemap.xml'), sitemap, 'utf8');
  console.log(`\n${PAGES.length} pages generated, sitemap.xml updated (${STATIC_PAGES.length + PAGES.length} URLs).`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
