# Marketing- & SEO-Setup

Kurzanleitung für alles, was auf dieser Website marketingseitig eingebaut ist.
Der Gesamtplan steht in [GROWTH-PLAN.md](GROWTH-PLAN.md).

---

## 1. Seiten bauen

Die Startseiten (`index.html`, `de/index.html`) und die Rechtstexte sind
handgeschrieben. Alle Lösungs-, Ratgeber- und Tool-Seiten werden generiert:

```bash
node tools/build.mjs
```

Das schreibt die HTML-Dateien direkt ins Repo-Root und aktualisiert `sitemap.xml`.
Das Ergebnis wird committet — das Hosting bleibt „statische Dateien ausliefern",
es gibt keinen Build-Schritt auf dem Server.

**Neue Seite anlegen:** eine Datei unter `tools/content/` erweitern (Struktur von
den bestehenden abschauen), dann `node tools/build.mjs`. Header, Footer, Breadcrumbs,
hreflang, Structured Data und Sitemap-Eintrag entstehen automatisch.

| Datei | Inhalt |
| --- | --- |
| `tools/layout.mjs` | HTML-Hülle, Navigation, Footer-Silo, Schema-Helfer |
| `tools/blocks.mjs` | Wiederverwendbare Bausteine (Hero, Tabelle, Callout, TOC) |
| `tools/content/de-*.mjs` | Deutsche Seiten |
| `tools/content/en.mjs` | Englische Seiten |

---

## 2. Analytics

Google Analytics ist aktiv. Bewusst wird **nichts darüber hinaus** getrackt: keine
Custom Events, keine Scrolltiefe, keine Klick-Events. Besucherzahlen und ein grober
Überblick reichen — mehr Daten helfen erst, wenn überhaupt Traffic da ist.

**Ein offener Punkt:** In diesem Repository steht kein Analytics-Snippet. Falls du
GA über das Hosting oder einen Tag Manager einbindest, sind die 21 neuen Seiten
automatisch mit abgedeckt — dann ist nichts zu tun. Falls nicht, siehst du für die
neuen Seiten keine Zahlen. Dann trägst du die Mess-ID **einmal** oben in `seo.js` ein:

```js
var GA_ID = 'G-XXXXXXXXXX';
```

`seo.js` wird von allen 29 Seiten geladen, damit ist GA überall aktiv — ohne dass du
29 Dateien anfassen musst.

**Rechtlicher Hinweis:** GA4 setzt Cookies (`_ga`). Die sind in der EU
einwilligungspflichtig (TDDDG §25) und brauchen ein Consent-Banner. Außerdem steht
in `privacy.html` und `de/datenschutz.html` aktuell der Satz, dass auf der
Marketing-Website *keine* Analyse-Cookies von Drittanbietern eingesetzt werden.
Wenn GA auf getnexsource.com läuft, stimmt dieser Satz nicht mehr und muss angepasst
werden. Wenn GA nur auf app.getnexsource.com läuft, ist er korrekt.

## 3. Attribution (bereits aktiv, kein Setup nötig)

`seo.js` liest `utm_*`, `gclid`, `msclkid`, `fbclid` und `ref` aus der URL und
hängt sie an **alle** internen Links sowie an alle Links auf
`app.getnexsource.com`.

**Konsequenz für die App:** Wenn die Registrierung in `apps/web` diese Query-Parameter
beim Signup mitspeichert, siehst du für jeden zahlenden Kunden, woher er kam.
Das ist der wichtigste Schritt auf App-Seite — ohne ihn endet die Spur an der
Domaingrenze. Bis dahin kostet die Weitergabe nichts und schadet nicht.

Bewusst wird **nichts** in Cookies, localStorage oder sessionStorage geschrieben.
Deshalb ist kein Consent-Banner erforderlich (TDDDG §25 / DSGVO).

**Link-Vorlagen für Kampagnen:**

```text
https://getnexsource.com/de/?utm_source=linkedin&utm_medium=social&utm_campaign=launch
https://getnexsource.com/de/lieferantenmanagement-software/?utm_source=google&utm_medium=cpc&utm_campaign=lm-software
https://getnexsource.com/de/ust-idnr-pruefen/?utm_source=omr&utm_medium=referral
```

---

## 4. Kontaktweg

Bewusst kein Formular: Auf `/de/demo/` und `/demo/` steht eine anklickbare
E-Mail-Adresse. Der Klick öffnet das E-Mail-Programm des Besuchers mit
vorbereitetem Betreff und Textgerüst (Unternehmen, Branche, Anzahl Lieferanten,
Anliegen) — damit die erste Antwort schon weiterhelfen kann.

Vorteil: nichts einzurichten, kein Formular-Backend, keine DSGVO-Fragen zur
Datenverarbeitung im Formular. Nachteil: Ein Teil der Besucher hat kein
E-Mail-Programm eingerichtet und klickt nicht. Falls du später doch messbare
Leads willst, ist ein Formular-Backend (Formspree, Web3Forms oder eine Route in
deiner Worker-API mit SES) der nächste Schritt.

Adresse ist überall `info@getnexsource.com` — auch in Impressum, Datenschutz
und AGB. **Stelle sicher, dass dieses Postfach tatsächlich Mails empfängt**;
im Impressum ist eine funktionierende Adresse rechtlich vorgeschrieben.

## 5. Was du in Google/Bing einrichten musst

1. [Google Search Console](https://search.google.com/search-console) → Property
   `getnexsource.com` (Domain-Property per DNS-TXT), dann `sitemap.xml` einreichen.
2. [Bing Webmaster Tools](https://www.bing.com/webmasters) → GSC importieren (2 Klicks).
   Bing speist auch ChatGPT-Suchergebnisse.
3. Google Business Profile anlegen — stärkt die Marken-SERP.
4. Nach dem Deploy prüfen:
   - Rich Results Test: <https://search.google.com/test/rich-results>
   - OG-Vorschau: <https://www.opengraph.xyz/>

---

## 6. Eingebautes technisches SEO

- **Structured Data** auf jeder Seite: `Organization`, `WebSite`,
  `SoftwareApplication` mit den drei Preis-`Offer`s, `FAQPage`, `BreadcrumbList`,
  `Article` (Ratgeber), `WebApplication` (kostenlose Tools).
  Die FAQ-Schemata der Startseiten werden beim Build aus dem sichtbaren HTML
  gezogen — sichtbarer Text und Markup können nicht auseinanderlaufen.
- **hreflang** paarweise DE/EN inklusive `x-default`, auch in der Sitemap.
- **Interne Verlinkung**: Footer-Silo auf allen Seiten + „Passend dazu"-Blöcke +
  Lösungs-Grid auf beiden Startseiten.
- **Open Graph / Twitter Cards** inkl. `og-image.png` (1200×630).
  Neu rendern: siehe `tools/` bzw. die HTML-Vorlage im Scratchpad-Workflow.
- **Fonts** werden nicht mehr render-blockierend geladen (preload + `display=swap`).
- **Sticky Mobile-CTA**, der sich ausblendet, sobald der CTA-Block sichtbar ist.

---

## 7. Trial-Links und www-Weiterleitung

- **Alle „Kostenlos testen"-Buttons zeigen auf `app.getnexsource.com/register`**, alle
  „Anmelden"-Links auf `/login`. Die App-Startseite leitet anonyme Besucher auf den
  Login („Willkommen zurück") — der falsche erste Bildschirm für jemanden, der testen
  will. Im Generator steuert das die Konstante `APP` in `tools/layout.mjs`.
- **Keine Weiterleitung per Script.** Eine clientseitige www-Weiterleitung hat zusammen mit
  der serverseitigen Weiterleitung (ohne www → www) eine Endlosschleife erzeugt und wurde
  entfernt. Die Weiterleitung zwischen www und ohne www gehört ausschließlich in Amplify —
  und muss zu den Canonical-URLs passen.

## 8. Kostenlose Tools (Link-Magnete)

| Seite | Was sie tut |
| --- | --- |
| `/de/ust-idnr-pruefen/`, `/vat-number-validator/` | Format- und Prüfziffernprüfung für alle EU-Staaten, vollständig offline im Browser (`vat.js`) |
| `/de/lieferantenbewertung/`, `/supplier-evaluation/` | Gewichteter Bewertungsrechner mit CSV-Export (`tool-ui.js`) |
| `/de/lieferantenauswahl/` | Nutzwertanalyse: bis zu 3 Anbieter vergleichen, CSV-Export (`tool-ui.js`) |
| `/de/lieferantendatenbank/` | Excel-/CSV-Vorlage mit 32 Spalten (`downloads/lieferantendatenbank-vorlage.csv`) |
| `/de/ratgeber/lieferantenaudit-checkliste/` | Druckbare Checkliste (Druck-Button + Print-Stylesheet in `content.css`) |

Beide bewusst ohne Anmeldung — sie sind der Grund, warum jemand die Seite
verlinkt. Aktiv anbieten: in Einkaufs-/QM-Foren, LinkedIn-Gruppen, bei
Tool-Verzeichnissen und in Gastbeiträgen.
