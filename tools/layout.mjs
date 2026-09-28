// Shared HTML shell for all generated pages.
// Output is plain static HTML committed to the repo — hosting stays a static file server.

export const SITE = 'https://getnexsource.com';
export const APP = 'https://app.getnexsource.com';

const T = {
  de: {
    navResearch: 'KI-Lieferantensuche',
    navFeatures: 'Funktionen',
    navSolutions: 'Lösungen',
    navGuides: 'Ratgeber',
    navPricing: 'Preise',
    signin: 'Anmelden',
    trial: 'Kostenlos testen',
    trialLong: '14 Tage kostenlos testen',
    demo: 'Demo anfragen',
    home: 'Startseite',
    tagline: 'Lieferantenmanagement & Einkaufssoftware für den Mittelstand.',
    colProduct: 'Produkt',
    colSolutions: 'Lösungen',
    colGuides: 'Ratgeber & Tools',
    colLegal: 'Rechtliches',
    colLang: 'Sprache',
    rights: 'Alle Rechte vorbehalten.',
    ctaTitle: 'Bringen Sie Ordnung in Ihren Einkauf.',
    ctaText:
      'Lieferanten finden, prüfen, verwalten und bestellen — in einer Plattform. 14 Tage kostenlos, in Minuten startklar.',
    toc: 'Inhalt',
    related: 'Passend dazu',
    faqTitle: 'Häufige Fragen',
    updated: 'Zuletzt aktualisiert',
    readingTime: 'Lesezeit',
    minutes: 'Min.',
  },
  en: {
    navResearch: 'AI sourcing',
    navFeatures: 'Features',
    navSolutions: 'Solutions',
    navGuides: 'Guides',
    navPricing: 'Pricing',
    signin: 'Sign in',
    trial: 'Start free trial',
    trialLong: 'Start 14-day free trial',
    demo: 'Book a demo',
    home: 'Home',
    tagline: 'Supplier management & procurement software for SMBs.',
    colProduct: 'Product',
    colSolutions: 'Solutions',
    colGuides: 'Guides & tools',
    colLegal: 'Legal',
    colLang: 'Language',
    rights: 'All rights reserved.',
    ctaTitle: 'Bring order to your procurement.',
    ctaText:
      'Find, vet, manage and order from suppliers — in one platform. 14 days free, live in minutes.',
    toc: 'Contents',
    related: 'Related',
    faqTitle: 'Frequently asked questions',
    updated: 'Last updated',
    readingTime: 'Reading time',
    minutes: 'min',
  },
};

// Footer link silo — this is the internal-linking backbone. Every generated page
// links to every money page, which is what makes a small site rank at all.
const FOOTER = {
  de: {
    product: [
      ['/de/#research', 'KI-Lieferantensuche'],
      ['/de/#features', 'Funktionen'],
      ['/de/#compliance', 'Compliance'],
      ['/de/#pricing', 'Preise'],
      ['/de/demo/', 'Demo anfragen'],
    ],
    solutions: [
      ['/de/lieferanten-finden/', 'Lieferanten finden'],
      ['/de/lieferantenmanagement-software/', 'Lieferantenmanagement-Software'],
      ['/de/einkaufssoftware-mittelstand/', 'Einkaufssoftware Mittelstand'],
      ['/de/lieferantenportal/', 'Lieferantenportal'],
      ['/de/lieferantenbewertung/', 'Lieferantenbewertung'],
      ['/de/sanktionslisten-pruefung/', 'Sanktionslistenprüfung'],
      ['/de/lksg-software/', 'LkSG für Zulieferer'],
    ],
    guides: [
      ['/de/ratgeber/', 'Ratgeber'],
      ['/de/ust-idnr-pruefen/', 'USt-IdNr. prüfen (kostenlos)'],
      ['/de/vergleich/excel-vs-lieferantenmanagement-software/', 'Excel vs. Software'],
      ['/de/ratgeber/lieferantenmanagement/', 'Leitfaden Lieferantenmanagement'],
      ['/de/ratgeber/lieferantenaudit-checkliste/', 'Lieferantenaudit-Checkliste'],
    ],
    legal: [
      ['/de/impressum.html', 'Impressum'],
      ['/de/datenschutz.html', 'Datenschutz'],
      ['/de/agb.html', 'AGB'],
    ],
    lang: [['/', 'English']],
  },
  en: {
    product: [
      ['/#research', 'AI sourcing'],
      ['/#features', 'Features'],
      ['/#compliance', 'Compliance'],
      ['/#pricing', 'Pricing'],
      ['/demo/', 'Book a demo'],
    ],
    solutions: [
      ['/supplier-management-software/', 'Supplier management software'],
      ['/procurement-software-small-business/', 'Procurement software for SMBs'],
      ['/supplier-portal/', 'Supplier portal'],
      ['/supplier-evaluation/', 'Supplier evaluation'],
    ],
    guides: [
      ['/guides/', 'Guides'],
      ['/vat-number-validator/', 'VAT number validator (free)'],
      ['/guides/supplier-management/', 'Supplier management guide'],
    ],
    legal: [
      ['/imprint.html', 'Imprint'],
      ['/privacy.html', 'Privacy'],
      ['/terms.html', 'Terms'],
    ],
    lang: [['/de/', 'Deutsch']],
  },
};

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const links = (arr) => arr.map(([h, t]) => `<a href="${h}">${esc(t)}</a>`).join('\n            ');

function nav(lang) {
  const t = T[lang];
  const base = lang === 'de' ? '/de/' : '/';
  const other = lang === 'de' ? '/' : '/de/';
  const otherLabel = lang === 'de' ? 'EN' : 'DE';
  const otherLang = lang === 'de' ? 'en' : 'de';
  const solutions = lang === 'de' ? '/de/lieferantenmanagement-software/' : '/supplier-management-software/';
  const guides = lang === 'de' ? '/de/ratgeber/' : '/guides/';
  return `    <header class="nav">
      <div class="container nav-inner">
        <a href="${base}" class="brand" aria-label="NexSource">
          <span class="brand-mark" aria-hidden="true"></span>
          <span class="brand-name">nexsource</span>
        </a>
        <nav class="nav-links" aria-label="${lang === 'de' ? 'Hauptnavigation' : 'Primary'}">
          <a href="${base}#research">${t.navResearch}</a>
          <a href="${solutions}">${t.navSolutions}</a>
          <a href="${guides}">${t.navGuides}</a>
          <a href="${base}#pricing">${t.navPricing}</a>
        </nav>
        <div class="nav-cta">
          <a href="${other}" class="lang-switch" hreflang="${otherLang}" aria-label="${otherLang === 'de' ? 'Deutsch' : 'English'}">${otherLabel}</a>
          <a href="${APP}" class="btn btn-ghost" data-cta="signin">${t.signin}</a>
          <a href="${APP}" class="btn btn-primary" data-cta="trial-nav">${t.trial}</a>
        </div>
        <button class="nav-toggle" aria-label="${lang === 'de' ? 'Menü öffnen' : 'Open menu'}" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>`;
}

function footer(lang) {
  const t = T[lang];
  const f = FOOTER[lang];
  const base = lang === 'de' ? '/de/' : '/';
  return `    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <a href="${base}" class="brand">
            <span class="brand-mark" aria-hidden="true"></span>
            <span class="brand-name">nexsource</span>
          </a>
          <p>${esc(t.tagline)}</p>
        </div>
        <div class="footer-cols footer-cols-wide">
          <div>
            <h4>${t.colProduct}</h4>
            ${links(f.product)}
          </div>
          <div>
            <h4>${t.colSolutions}</h4>
            ${links(f.solutions)}
          </div>
          <div>
            <h4>${t.colGuides}</h4>
            ${links(f.guides)}
          </div>
          <div>
            <h4>${t.colLegal}</h4>
            ${links(f.legal)}
          </div>
          <div>
            <h4>${t.colLang}</h4>
            ${links(f.lang)}
          </div>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© <span id="year"></span> nexsource. ${t.rights}</span>
      </div>
    </footer>`;
}

function ctaBand(lang, cta) {
  const t = T[lang];
  const title = cta?.title || t.ctaTitle;
  const text = cta?.text || t.ctaText;
  return `      <section class="cta">
        <div class="container cta-inner">
          <h2>${esc(title)}</h2>
          <p>${esc(text)}</p>
          <div class="cta-actions">
            <a href="${APP}" class="btn btn-primary btn-lg" data-cta="trial-band">${t.trialLong}</a>
            <a href="${lang === 'de' ? '/de/demo/' : '/demo/'}" class="btn btn-secondary btn-lg" data-cta="demo-band">${t.demo}</a>
          </div>
        </div>
      </section>`;
}

function breadcrumbHtml(lang, crumbs) {
  if (!crumbs?.length) return '';
  const t = T[lang];
  const all = [[lang === 'de' ? '/de/' : '/', t.home], ...crumbs];
  const items = all
    .map(([href, name], i) =>
      i === all.length - 1
        ? `<li aria-current="page">${esc(name)}</li>`
        : `<li><a href="${href}">${esc(name)}</a></li>`
    )
    .join('');
  return `      <nav class="breadcrumb" aria-label="Breadcrumb"><div class="container"><ol>${items}</ol></div></nav>`;
}

function breadcrumbSchema(lang, crumbs) {
  if (!crumbs?.length) return null;
  const t = T[lang];
  const all = [[lang === 'de' ? '/de/' : '/', t.home], ...crumbs];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: all.map(([href, name], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: SITE + href,
    })),
  };
}

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': SITE + '/#organization',
    name: 'NexSource',
    url: SITE + '/',
    logo: { '@type': 'ImageObject', url: SITE + '/favicon.svg' },
    sameAs: [],
  };
}

export function softwareSchema(lang) {
  return {
    '@type': 'SoftwareApplication',
    '@id': SITE + '/#software',
    name: 'NexSource',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory:
      lang === 'de' ? 'Lieferantenmanagement- und Einkaufssoftware' : 'Supplier management and procurement software',
    operatingSystem: 'Web',
    url: SITE + '/',
    description:
      lang === 'de'
        ? 'Lieferantenmanagement- und Einkaufssoftware für den Mittelstand: KI-Lieferantensuche mit VIES- und Sanktionslistenprüfung, Bestellungen, Verträge, Zertifikate und Lieferantenportal.'
        : 'Supplier management and procurement software for SMBs: AI supplier discovery with VIES and sanctions screening, purchase orders, contracts, certificates and a supplier portal.',
    publisher: { '@id': SITE + '/#organization' },
    offers: [
      { '@type': 'Offer', name: 'Starter', price: '29', priceCurrency: 'EUR', category: 'subscription', url: SITE + (lang === 'de' ? '/de/#pricing' : '/#pricing') },
      { '@type': 'Offer', name: 'Pro', price: '89', priceCurrency: 'EUR', category: 'subscription', url: SITE + (lang === 'de' ? '/de/#pricing' : '/#pricing') },
      { '@type': 'Offer', name: 'Scale', price: '199', priceCurrency: 'EUR', category: 'subscription', url: SITE + (lang === 'de' ? '/de/#pricing' : '/#pricing') },
    ],
  };
}

export function faqSchema(faqs) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
    })),
  };
}

export function faqHtml(lang, faqs) {
  const t = T[lang];
  return `      <section class="section section-alt">
        <div class="container faq-container">
          <div class="section-head">
            <span class="eyebrow">FAQ</span>
            <h2>${t.faqTitle}</h2>
          </div>
          <div class="faq">
${faqs.map((f) => `            <details>
              <summary>${esc(f.q)}</summary>
              <p>${f.a}</p>
            </details>`).join('\n')}
          </div>
        </div>
      </section>`;
}

export function relatedHtml(lang, items) {
  if (!items?.length) return '';
  const t = T[lang];
  return `      <section class="section">
        <div class="container">
          <div class="section-head"><h2>${t.related}</h2></div>
          <div class="feature-grid">
${items.map(([href, title, desc]) => `            <a class="feature feature-link" href="${href}">
              <h3>${esc(title)}</h3>
              <p>${esc(desc)}</p>
            </a>`).join('\n')}
          </div>
        </div>
      </section>`;
}

/**
 * page = {
 *   lang, path, title, description, keywords?, canonical?, altPath?,
 *   ogType?, crumbs?, body, cta?, schema?: [], noindex?, extraHead?, extraScript?
 * }
 */
export function render(page) {
  const { lang } = page;
  const t = T[lang];
  const url = SITE + page.path;
  const alt = page.altPath ? SITE + page.altPath : null;
  const cssPrefix = '/';

  const graph = [organizationSchema(), ...(page.schema || [])];
  const bc = breadcrumbSchema(lang, page.crumbs);
  if (bc) graph.push(bc);

  const hreflang = alt
    ? `    <link rel="alternate" hreflang="${lang}" href="${url}" />
    <link rel="alternate" hreflang="${lang === 'de' ? 'en' : 'de'}" href="${alt}" />
    <link rel="alternate" hreflang="x-default" href="${lang === 'de' ? alt : url}" />`
    : '';

  return `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(page.title)}</title>
    <meta name="description" content="${esc(page.description)}" />${page.keywords ? `\n    <meta name="keywords" content="${esc(page.keywords)}" />` : ''}${page.noindex ? '\n    <meta name="robots" content="noindex,follow" />' : ''}
    <link rel="canonical" href="${page.canonical || url}" />
${hreflang}
    <meta property="og:type" content="${page.ogType || 'website'}" />
    <meta property="og:site_name" content="NexSource" />
    <meta property="og:locale" content="${lang === 'de' ? 'de_DE' : 'en_US'}" />
    <meta property="og:title" content="${esc(page.ogTitle || page.title)}" />
    <meta property="og:description" content="${esc(page.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${SITE}/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(page.ogTitle || page.title)}" />
    <meta name="twitter:description" content="${esc(page.description)}" />
    <meta name="twitter:image" content="${SITE}/og-image.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="preload"
      as="style"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      onload="this.onload=null;this.rel='stylesheet'"
    />
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" /></noscript>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/favicon.svg" />
    <meta name="theme-color" content="#4f46e5" />
    <link rel="stylesheet" href="${cssPrefix}styles.css" />
    <link rel="stylesheet" href="${cssPrefix}content.css" />
    <script type="application/ld+json">
${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2)}
    </script>${page.extraHead || ''}
  </head>
  <body>
${nav(lang)}
${breadcrumbHtml(lang, page.crumbs)}
    <main>
${page.body}
${ctaBand(lang, page.cta)}
    </main>
${footer(lang)}
    <a href="${APP}" class="sticky-cta" data-cta="trial-sticky">${t.trialLong}</a>
    <script src="${cssPrefix}script.js"></script>
    <script src="${cssPrefix}seo.js"></script>${page.extraScript || ''}
  </body>
</html>
`;
}

export { T };
