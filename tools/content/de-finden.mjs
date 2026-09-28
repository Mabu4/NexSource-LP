import { faqSchema, faqHtml, relatedHtml, softwareSchema, APP } from '../layout.mjs';
import { hero, prose, table, callout, toc, answerBox } from '../blocks.mjs';

/* ============================================================
   Lieferanten finden
   Search Console (Sep 2026): the "Lieferanten finden / Lieferantensuche"
   cluster is the best-ranking non-brand topic (positions 17–25) although no
   page targeted it — the home page H1 carried it. It is also the product's
   differentiator (AI supplier discovery), so this page doubles as the entry
   point to the feature.
   ============================================================ */
const faq = [
  {
    q: 'Wie finde ich neue, geprüfte Lieferanten außerhalb meines bestehenden Netzwerks?',
    a: 'Kombinieren Sie eine breite Suche mit einer strukturierten Vorprüfung. Für die Suche eignen sich B2B-Verzeichnisse, Messekataloge, Branchenverbände und eine KI-gestützte Websuche. Bevor Sie Kontakt aufnehmen, prüfen Sie jeden Kandidaten auf Existenz, gültige USt-IdNr. und Sanktionslisten — sonst investieren Sie Zeit in Anbieter, die Sie ohnehin nicht freigeben dürfen. NexSource verbindet beides: Sie beschreiben den Bedarf in einem Satz, die Software sucht passende Lieferanten und prüft sie automatisch.',
  },
  {
    q: 'Welche Plattformen gibt es, um Lieferanten zu finden?',
    a: 'Im deutschsprachigen Raum sind B2B-Verzeichnisse wie „Wer liefert was", Europages und Kompass verbreitet. Dazu kommen Messe-Ausstellerverzeichnisse, die Datenbanken von Branchenverbänden und Industrie- und Handelskammern sowie für Asien Marktplätze wie Alibaba. Verzeichnisse zeigen allerdings nur, wer sich eingetragen hat — und prüfen die Anbieter in der Regel nicht für Sie.',
  },
  {
    q: 'Wie prüfe ich einen neuen Lieferanten, bevor ich bestelle?',
    a: 'Mindestens: Registereintrag bzw. Existenz, USt-IdNr. über VIES, Abgleich mit EU-, UN- und OFAC-Sanktionslisten und — je nach Risiko — Zertifikate, Bonität und Referenzen. Den vollständigen Ablauf beschreibt unser Leitfaden zur Lieferantenqualifizierung.',
  },
  {
    q: 'Wie funktioniert die KI-Lieferantensuche von NexSource?',
    a: 'Sie beschreiben in normaler Sprache, was Sie suchen — etwa Material, Region, Zertifizierung und Menge. NexSource durchsucht das Web, schlägt passende Unternehmen vor und prüft jedes automatisch: USt-IdNr. über VIES, Sanktionslisten (EU, OFAC, UN) und weitere Vertrauenssignale, zusammengefasst in einem Trust-Score von 0–100. Passende Treffer übernehmen Sie mit einem Klick als Lieferanten.',
  },
  {
    q: 'Wie viele Lieferanten sollte ich pro Bedarf anfragen?',
    a: 'Als Faustregel drei bis fünf qualifizierte Anbieter pro Bedarf. Weniger schwächt Ihre Verhandlungsposition und lässt keine Zweitquelle übrig; deutlich mehr kostet mehr Zeit in der Angebotsauswertung, als es an Preisvorteil bringt.',
  },
];

export const lieferantenFinden = {
  lang: 'de',
  path: '/de/lieferanten-finden/',
  title: 'Lieferanten finden: 7 Wege + KI-Lieferantensuche | NexSource',
  description:
    'Neue Lieferanten finden und vorab prüfen: Verzeichnisse, Messen, Verbände, Websuche und KI-Lieferantensuche mit automatischer VIES- und Sanktionsprüfung.',
  keywords:
    'Lieferanten finden, Lieferantensuche, Lieferanten suchen, Zulieferer finden, neue Lieferanten finden, Lieferantensuche Europa, Lieferantendatenbank',
  crumbs: [['/de/lieferanten-finden/', 'Lieferanten finden']],
  schema: [softwareSchema('de'), faqSchema(faq)],
  body: `
${hero({
  lang: 'de',
  eyebrow: 'Lieferantensuche',
  h1: 'Lieferanten finden — und vor der ersten Anfrage prüfen',
  lead: 'Sieben Wege zu neuen Lieferanten, ehrlich verglichen. Und wie Sie mit der KI-Lieferantensuche von NexSource passende Anbieter in Minuten finden, die bereits auf USt-IdNr. und Sanktionslisten geprüft sind.',
  ctaPrimary: { href: APP, label: 'KI-Lieferantensuche testen', cta: 'trial-hero-finden' },
  meta: ['14 Tage kostenlos', 'Keine Kreditkarte nötig', 'Automatisch vorgeprüft'],
})}
${prose(`
${answerBox('<strong>Kurz gesagt:</strong> Neue Lieferanten finden Sie über B2B-Verzeichnisse, Messen, Branchenverbände, gezielte Websuche, Empfehlungen, Marktplätze oder eine KI-gestützte Lieferantensuche. Entscheidend ist nicht nur die Suche, sondern die <strong>Vorprüfung</strong>: Existenz, USt-IdNr. und Sanktionslisten sollten geklärt sein, bevor Sie Zeit in Angebote investieren.')}

${toc('de', [
  ['vorbereitung', 'Vor der Suche: den Bedarf schärfen'],
  ['wege', 'Die 7 Wege, Lieferanten zu finden'],
  ['vergleich', 'Die Wege im Vergleich'],
  ['ki', 'KI-Lieferantensuche: Suchen und Prüfen in einem Schritt'],
  ['pruefen', 'Gefundene Lieferanten vorprüfen'],
  ['anfrage', 'Von der Liste zur Anfrage'],
])}

<h2 id="vorbereitung">Vor der Suche: den Bedarf schärfen</h2>
<p>Die meisten Lieferantensuchen scheitern nicht an fehlenden Kandidaten, sondern an einer unscharfen Anfrage. Wer „Verpackungslieferant" sucht, bekommt Tausende Treffer. Wer „Faltschachteln aus Recyclingkarton, lebensmittelecht, 50.000 Stück pro Quartal, Lieferung aus DACH" sucht, bekommt eine Handvoll relevanter. Klären Sie vorab:</p>
<ul>
  <li><strong>Was genau</strong> — Material, Spezifikation, Toleranzen, Varianten</li>
  <li><strong>Wie viel</strong> — Jahresmenge, Losgröße, Abrufrhythmus</li>
  <li><strong>Woher</strong> — Region, maximale Lieferzeit, Incoterms</li>
  <li><strong>Welche Nachweise</strong> — ISO 9001, IFS, BRC, Bio, branchenspezifische Zertifikate</li>
  <li><strong>Warum wechseln</strong> — Preis, Qualität, Liefertreue, Zweitquelle? Das bestimmt, worauf Sie bewerten.</li>
</ul>

<h2 id="wege">Die 7 Wege, Lieferanten zu finden</h2>

<h3>1. B2B-Verzeichnisse</h3>
<p>Plattformen wie „Wer liefert was", Europages oder Kompass listen Anbieter nach Produktgruppen und Regionen. Stärke: große Breite, schneller Überblick. Schwäche: Sie sehen nur, wer sich eingetragen hat, Profile sind teils veraltet, und eine Prüfung der Anbieter findet in der Regel nicht statt.</p>

<h3>2. Messen und Ausstellerverzeichnisse</h3>
<p>Fachmessen bündeln Anbieter einer Branche an einem Ort — und die Ausstellerverzeichnisse sind auch ohne Messebesuch online durchsuchbar. Stärke: persönlicher Eindruck, Muster vor Ort. Schwäche: an Termine gebunden, zeit- und reiseintensiv.</p>

<h3>3. Branchenverbände, IHK und Außenhandelskammern</h3>
<p>Verbände führen Mitgliederverzeichnisse, IHKs und Außenhandelskammern (AHK) vermitteln Kontakte — gerade für die Lieferantensuche im Ausland ein unterschätzter Weg. Stärke: vertrauenswürdige Vorauswahl. Schwäche: begrenzte Breite, oft langsamer.</p>

<h3>4. Gezielte Websuche</h3>
<p>Mit präzisen Suchbegriffen und Operatoren (etwa <code>"lohnfertigung" "iso 9001" site:.de</code>) finden Sie auch Anbieter, die in keinem Verzeichnis stehen. Stärke: kostenlos, große Reichweite. Schwäche: sehr zeitaufwendig, jede Website muss einzeln bewertet werden.</p>

<h3>5. Empfehlungen und Netzwerk</h3>
<p>Bestehende Lieferanten, Kunden und Kollegen aus anderen Unternehmen kennen oft genau den Anbieter, den Sie suchen. Stärke: hohe Trefferqualität. Schwäche: Sie bleiben in Ihrer eigenen Blase — genau das Problem, wenn Sie eine echte Alternative brauchen.</p>

<h3>6. Internationale Marktplätze</h3>
<p>Für Beschaffung in Asien sind Marktplätze wie Alibaba verbreitet. Stärke: riesige Auswahl, oft günstige Preise. Schwäche: große Qualitätsunterschiede, Handelsvermittler statt Hersteller, und die Prüfung liegt vollständig bei Ihnen.</p>

<h3>7. KI-Lieferantensuche</h3>
<p>KI-gestützte Werkzeuge durchsuchen das Web auf Basis einer Beschreibung in normaler Sprache und liefern eine vorsortierte Liste. Der Unterschied zur Websuche: Sie beschreiben den Bedarf statt Suchbegriffe zu raten, und gute Werkzeuge prüfen die Treffer gleich mit. Wie das in NexSource funktioniert, steht <a href="#ki">weiter unten</a>.</p>

<h2 id="vergleich">Die Wege im Vergleich</h2>
${table(
  ['Weg', 'Aufwand', 'Reichweite', 'Vorprüfung inklusive'],
  [
    ['B2B-Verzeichnisse', 'mittel', 'hoch (nur Eingetragene)', '<span class="no">nein</span>'],
    ['Messen', 'hoch', 'mittel', '<span class="no">nein</span>'],
    ['Verbände, IHK, AHK', 'mittel', 'niedrig–mittel', 'teilweise'],
    ['Websuche', 'hoch', 'sehr hoch', '<span class="no">nein</span>'],
    ['Empfehlungen', 'niedrig', 'niedrig', 'teilweise (Erfahrung)'],
    ['Marktplätze', 'mittel', 'sehr hoch', '<span class="no">nein</span>'],
    ['KI-Lieferantensuche (NexSource)', 'niedrig', 'hoch (gesamtes Web)', '<span class="yes">VIES, Sanktionslisten, Trust-Score</span>'],
  ]
)}
${callout('<strong>Die eigentliche Zeitfalle</strong><p>Nicht das Finden kostet die meiste Zeit, sondern das Aussortieren: Anbieter, die nicht mehr existieren, keine gültige USt-IdNr. haben oder die Sie aus Compliance-Gründen gar nicht beauftragen dürfen. Je früher diese Prüfung passiert, desto weniger Angebote werten Sie umsonst aus.</p>')}

<h2 id="ki">KI-Lieferantensuche: Suchen und Prüfen in einem Schritt</h2>
<p>In NexSource beschreiben Sie Ihren Bedarf in einem Satz, zum Beispiel:</p>
<blockquote><p>„Bio-Apfelerzeuger in Sachsen-Anhalt, IFS-zertifiziert, mindestens 500 t pro Jahr"</p></blockquote>
<p>Die Software sucht passende Unternehmen im Web und prüft jeden Treffer automatisch:</p>
<ul>
  <li><strong>Umsatzsteuer-ID</strong> über das offizielle EU-VIES-System</li>
  <li><strong>Sanktionslisten</strong> der EU, der UN und des US-OFAC</li>
  <li><strong>Unternehmensauftritt und weitere Vertrauenssignale</strong></li>
  <li><strong>Trust-Score von 0–100</strong> mit Risikoeinstufung und Empfehlung, ob Sie das Onboarding starten sollten</li>
</ul>
<p>Passende Treffer übernehmen Sie mit einem Klick als Lieferanten — inklusive dokumentierter Prüfung. Von dort geht es direkt weiter mit <a href="/de/lieferantenbewertung/">Bewertung</a>, Zertifikaten und <a href="/de/einkaufssoftware-mittelstand/">Bestellungen</a>.</p>
<p><a href="${APP}" class="btn btn-primary" data-cta="trial-inline-finden">KI-Suche kostenlos testen</a></p>

<h2 id="pruefen">Gefundene Lieferanten vorprüfen</h2>
<p>Unabhängig davon, wie Sie einen Kandidaten gefunden haben — diese Prüfungen gehören vor die erste Anfrage:</p>
<ol>
  <li><strong>Existenz und Registereintrag</strong> — gibt es das Unternehmen unter dieser Firmierung?</li>
  <li><strong>USt-IdNr.</strong> — kostenlos vorprüfen mit unserem <a href="/de/ust-idnr-pruefen/">USt-IdNr.-Prüfer</a>, verbindlich über VIES</li>
  <li><strong>Sanktionslisten</strong> — Pflicht für jedes Unternehmen in der EU, siehe <a href="/de/sanktionslisten-pruefung/">Sanktionslistenprüfung</a></li>
  <li><strong>Zertifikate</strong> — gültig, und für den richtigen Standort ausgestellt?</li>
  <li><strong>Bonität und Referenzen</strong> — je nach Risiko und Abhängigkeit</li>
</ol>
<p>Den vollständigen, risikobasierten Ablauf beschreibt der <a href="/de/ratgeber/lieferantenqualifizierung/">Leitfaden Lieferantenqualifizierung</a>.</p>

<h2 id="anfrage">Von der Liste zur Anfrage</h2>
<ul>
  <li><strong>Drei bis fünf Kandidaten</strong> pro Bedarf anfragen — genug für Wettbewerb und eine Zweitquelle.</li>
  <li><strong>Eine einheitliche Anfrage</strong> an alle senden, damit die Angebote vergleichbar sind.</li>
  <li><strong>Bewertungskriterien vorher festlegen</strong> — Preis, Liefertreue, Qualität, Flexibilität. Unser kostenloser <a href="/de/lieferantenbewertung/">Bewertungsrechner</a> hilft dabei.</li>
  <li><strong>Absagen dokumentieren</strong> — wer heute nicht passt, ist vielleicht die Zweitquelle von morgen.</li>
</ul>
`)}
${faqHtml('de', faq)}
${relatedHtml('de', [
  ['/de/ratgeber/lieferantenqualifizierung/', 'Lieferantenqualifizierung', 'Der Prüfprozess vor der ersten Bestellung, in sechs Schritten.'],
  ['/de/sanktionslisten-pruefung/', 'Sanktionslistenprüfung', 'EU, OFAC und UN automatisch abgleichen und dokumentieren.'],
  ['/de/lieferantenmanagement-software/', 'Lieferantenmanagement-Software', 'Gefundene Lieferanten verwalten, bewerten und beauftragen.'],
])}`,
};
