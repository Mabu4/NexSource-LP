/*
 * NexSource — campaign attribution + sticky CTA.
 *
 * Deliberately minimal: no custom events, no scroll tracking, no cookies,
 * no localStorage. Visitor numbers come from Google Analytics; everything
 * here just makes sure a campaign click can still be traced to a signup.
 */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
   * Google Analytics (optional, one place for all 29 pages)
   *
   * Leave GA_ID empty if you load Analytics somewhere else (hosting-level
   * injection, Tag Manager). If Analytics is NOT already on these pages,
   * put your measurement ID here once — e.g. 'G-ABC1234567' — and every
   * page picks it up, including all the generated ones.
   * ------------------------------------------------------------------ */
  var GA_ID = '';

  if (GA_ID) {
    var g = document.createElement('script');
    g.async = true;
    g.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(g);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  /* ------------------------------------------------------------------
   * Campaign attribution
   *
   * Reads utm_* / click IDs from the current URL and carries them onto
   * internal links and links to the app, so a signup in
   * app.getnexsource.com can be traced back to the channel that produced
   * it. Nothing is stored on the device, so no consent banner is needed
   * for this (TDDDG §25).
   * ------------------------------------------------------------------ */
  var TRACKED = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'msclkid', 'fbclid', 'ref'];
  var APP_HOST = 'app.getnexsource.com';

  var current = new URLSearchParams(window.location.search);
  var carry = new URLSearchParams();

  TRACKED.forEach(function (k) {
    var v = current.get(k);
    if (v) carry.set(k, v);
  });

  if (carry.toString()) {
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || /^(mailto|tel):/i.test(href)) return;
      try {
        var u = new URL(href, window.location.href);
        if (u.protocol !== 'http:' && u.protocol !== 'https:') return;
        if (u.hostname !== window.location.hostname && u.hostname !== APP_HOST) return;
        carry.forEach(function (v, k) {
          if (!u.searchParams.has(k)) u.searchParams.set(k, v);
        });
        a.setAttribute('href', u.toString());
      } catch (e) {
        /* malformed href — leave it alone */
      }
    });
  }

  /* ------------------------------------------------------------------
   * Sticky mobile CTA — shown after the hero, hidden again once the
   * page's own CTA band is on screen.
   * ------------------------------------------------------------------ */
  var sticky = document.querySelector('.sticky-cta');
  if (sticky) {
    var hero = document.querySelector('.hero, .page-hero');
    var band = document.querySelector('.cta');
    var show = function () {
      var pastHero = !hero || hero.getBoundingClientRect().bottom < 0;
      var bandVisible = band && band.getBoundingClientRect().top < window.innerHeight;
      sticky.classList.toggle('visible', pastHero && !bandVisible);
    };
    window.addEventListener('scroll', show, { passive: true });
    window.addEventListener('resize', show, { passive: true });
    show();
  }
})();
