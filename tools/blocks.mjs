// Reusable page blocks for content pages.
import { esc, APP } from './layout.mjs';

export function hero({ lang, eyebrow, h1, lead, ctaPrimary, ctaSecondary, meta }) {
  const t = lang === 'de';
  const p = ctaPrimary || { href: APP, label: t ? '14 Tage kostenlos testen' : 'Start 14-day free trial', cta: 'trial-hero' };
  const s = ctaSecondary || { href: t ? '/de/demo/' : '/demo/', label: t ? 'Demo anfragen' : 'Book a demo', cta: 'demo-hero' };
  return `      <section class="page-hero">
        <div class="container">
          ${eyebrow ? `<span class="eyebrow">${esc(eyebrow)}</span>` : ''}
          <h1>${h1}</h1>
          <p class="lead">${lead}</p>
          <div class="hero-cta">
            <a href="${p.href}" class="btn btn-primary btn-lg" data-cta="${p.cta}">${esc(p.label)}</a>
            <a href="${s.href}" class="btn btn-secondary btn-lg" data-cta="${s.cta}">${esc(s.label)}</a>
          </div>
          ${meta ? `<ul class="hero-meta">${meta.map((m) => `<li>${esc(m)}</li>`).join('')}</ul>` : ''}
        </div>
      </section>`;
}

export function answerBox(text) {
  return `<div class="answer-box"><p>${text}</p></div>`;
}

export function toc(lang, items) {
  return `<nav class="toc" aria-label="${lang === 'de' ? 'Inhaltsverzeichnis' : 'Table of contents'}">
  <h2>${lang === 'de' ? 'Inhalt' : 'Contents'}</h2>
  <ol>${items.map(([id, label]) => `<li><a href="#${id}">${esc(label)}</a></li>`).join('')}</ol>
</nav>`;
}

export function prose(html, { wide = false, alt = false } = {}) {
  return `      <section class="section${alt ? ' section-alt' : ''}">
        <div class="container">
          <div class="prose${wide ? ' wide' : ''}">
${html}
          </div>
        </div>
      </section>`;
}

export function featureGrid(lang, { eyebrow, title, intro, items, alt = false }) {
  return `      <section class="section${alt ? ' section-alt' : ''}">
        <div class="container">
          <div class="section-head">
            ${eyebrow ? `<span class="eyebrow">${esc(eyebrow)}</span>` : ''}
            <h2>${title}</h2>
            ${intro ? `<p>${intro}</p>` : ''}
          </div>
          <div class="feature-grid">
${items.map((i) => `            <article class="feature"><h3>${esc(i[0])}</h3><p>${i[1]}</p></article>`).join('\n')}
          </div>
        </div>
      </section>`;
}

export function table(headers, rows, { caption } = {}) {
  return `<div class="table-wrap">
  <table class="data">
    ${caption ? `<caption class="sr-only">${esc(caption)}</caption>` : ''}
    <thead><tr>${headers.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
    <tbody>
${rows.map((r) => `      <tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`)).join('')}</tr>`).join('\n')}
    </tbody>
  </table>
</div>`;
}

export function callout(text, kind = '') {
  return `<div class="callout${kind ? ' ' + kind : ''}">${text}</div>`;
}

export function steps(lang, items) {
  return `      <section class="section">
        <div class="container">
          <ol class="steps">
${items.map((s, i) => `            <li><span class="step-num">${String(i + 1).padStart(2, '0')}</span><h3>${esc(s[0])}</h3><p>${s[1]}</p></li>`).join('\n')}
          </ol>
        </div>
      </section>`;
}
