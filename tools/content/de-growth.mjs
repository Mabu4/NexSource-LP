import { faqSchema, faqHtml, relatedHtml, softwareSchema, SITE, APP } from '../layout.mjs';
import { hero, prose, table, callout, toc, answerBox } from '../blocks.mjs';

const PUB = '2026-09-28';

function article(page) {
  return {
    ...page,
    ogType: 'article',
    schema: [
      ...(page.schema || []),
      {
        '@type': 'Article',
        headline: page.h1 || page.title,
        description: page.description,
        datePublished: PUB,
        dateModified: PUB,
        inLanguage: 'de-DE',
        mainEntityOfPage: { '@type': 'WebPage', '@id': SITE + page.path },
        author: { '@id': SITE + '/#organization' },
        publisher: { '@id': SITE + '/#organization' },
      },
    ],
  };
}

/* ============================================================
   Lieferantenauswahl + Nutzwertanalyse
   Search Console: lieferantenauswahl checkliste (pos. 34), lieferantenauswahl
   tool (30), lieferantenauswahl kriterien excel (20), …schritte, …prozess.
   ============================================================ */
const NWA_CRITERIA = [
  ['Preis & Konditionen', 25, [7, 9, 6]],
  ['Qualität', 25, [8, 6, 8]],
  ['Liefertreue', 20, [8, 7, 9]],
  ['Service & Kommunikation', 10, [7, 6, 9]],
  ['Flexibilität', 10, [6, 8, 7]],
  ['Nachweise & Zertifikate', 10, [9, 5, 8]],
];

function nwaTool() {
  const rows = NWA_CRITERIA.map(
    ([name, w, scores], r) => `        <tr>
          <td><input class="nwa-crit" data-row="${r}" value="${name}" aria-label="Kriterium ${r + 1}" /></td>
          <td><input class="nwa-weight" type="number" min="0" max="100" value="${w}" aria-label="Gewichtung ${name}" /></td>
${scores.map((v, c) => `          <td><input class="nwa-score" type="number" min="0" max="10" step="1" data-row="${r}" data-col="${c}" value="${v}" aria-label="${name}, Lieferant ${String.fromCharCode(65 + c)}" /></td>`).join('\n')}
        </tr>`
  ).join('\n');
  return `<div class="tool" id="nwa" style="max-width:860px">
  <h2>Lieferanten vergleichen: Nutzwertanalyse</h2>
  <p class="tool-sub">Bis zu drei Anbieter, gewichtete Kriterien, Bewertung von 0–10. Kriterien, Gewichte und Namen sind frei änderbar. Ergebnis sofort, Export als CSV für Excel.</p>
  <div class="nwa-wrap">
    <table class="nwa">
      <thead>
        <tr>
          <th scope="col">Kriterium</th>
          <th scope="col">Gewicht %</th>
          <th scope="col"><input class="nwa-name" placeholder="Lieferant A" aria-label="Name Lieferant A" /></th>
          <th scope="col"><input class="nwa-name" placeholder="Lieferant B" aria-label="Name Lieferant B" /></th>
          <th scope="col"><input class="nwa-name" placeholder="Lieferant C" aria-label="Name Lieferant C" /></th>
        </tr>
      </thead>
      <tbody>
${rows}
      </tbody>
      <tfoot>
        <tr>
          <td>Nutzwert (0–100)</td>
          <td class="nwa-weightsum" data-ok="true">Σ <span id="nwa-weight-sum">100</span></td>
          <td><span class="nwa-total">0</span></td>
          <td><span class="nwa-total">0</span></td>
          <td><span class="nwa-total">0</span></td>
        </tr>
      </tfoot>
    </table>
  </div>
  <p class="nwa-verdict" id="nwa-verdict" aria-live="polite"></p>
  <div class="score-actions">
    <button type="button" class="btn btn-secondary" id="nwa-csv">Als CSV herunterladen</button>
    <a href="${APP}" class="btn btn-primary" data-cta="trial-nwa">Lieferanten in NexSource verwalten</a>
  </div>
</div>`;
}

const faqAuswahl = [
  {
    q: 'Welche Kriterien sind bei der Lieferantenauswahl am wichtigsten?',
    a: 'Fast immer Preis und Konditionen, Qualität und Liefertreue — zusammen typischerweise 60–75 % der Gewichtung. Dazu kommen Service und Kommunikation, Flexibilität sowie Nachweise und Zertifikate. Vorgeschaltet sind K.-o.-Kriterien, die ein Anbieter erfüllen muss, bevor er überhaupt bewertet wird: etwa ein gültiges Pflichtzertifikat oder eine Mindestkapazität.',
  },
  {
    q: 'Was ist eine Nutzwertanalyse bei der Lieferantenauswahl?',
    a: 'Eine Nutzwertanalyse macht Angebote vergleichbar, die sich nicht nur im Preis unterscheiden. Jedes Kriterium bekommt eine Gewichtung, jeder Anbieter pro Kriterium eine Punktzahl. Das gewichtete Mittel ergibt den Nutzwert. Der Rechner auf dieser Seite macht genau das für bis zu drei Anbieter.',
  },
  {
    q: 'Wie viele Lieferanten sollte man in die engere Auswahl nehmen?',
    a: 'Drei bis fünf qualifizierte Anbieter pro Bedarf. Weniger schwächt die Verhandlungsposition, mehr kostet in der Angebotsauswertung mehr Zeit, als es an Vorteil bringt.',
  },
  {
    q: 'Wie dokumentiere ich die Lieferantenauswahl für ISO 9001?',
    a: 'ISO 9001 Abschnitt 8.4 verlangt festgelegte Kriterien für Auswahl und Bewertung externer Anbieter und dokumentierte Ergebnisse. In der Praxis heißt das: Kriterienkatalog mit Gewichtung, ausgefüllter Vergleich je Auswahlentscheidung, Begründung der Entscheidung und Datum. Der CSV-Export des Rechners eignet sich als Nachweis für den Einzelfall.',
  },
];

export const lieferantenauswahl = {
  lang: 'de',
  path: '/de/lieferantenauswahl/',
  title: 'Lieferantenauswahl: Prozess, Kriterien & Rechner | NexSource',
  description:
    'Lieferantenauswahl in 7 Schritten: K.-o.-Kriterien, gewichtete Bewertung, Checkliste und kostenlose Nutzwertanalyse für bis zu drei Anbieter mit CSV-Export.',
  keywords:
    'Lieferantenauswahl, Lieferantenauswahl Kriterien, Lieferantenauswahl Checkliste, Lieferantenauswahlprozess, Nutzwertanalyse Lieferanten, Angebotsvergleich Lieferanten',
  crumbs: [['/de/lieferantenauswahl/', 'Lieferantenauswahl']],
  schema: [
    softwareSchema('de'),
    faqSchema(faqAuswahl),
    {
      '@type': 'WebApplication',
      name: 'Nutzwertanalyse für die Lieferantenauswahl',
      url: SITE + '/de/lieferantenauswahl/',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
  ],
  extraScript: '\n    <script src="/tool-ui.js"></script>',
  body: `
${hero({
  lang: 'de',
  eyebrow: 'Lieferantenauswahl',
  h1: 'Lieferantenauswahl: Prozess, Kriterien und Nutzwertanalyse',
  lead: 'Wie Sie aus einer Liste von Anbietern nachvollziehbar den richtigen auswählen — in sieben Schritten, mit Checkliste und einem kostenlosen Rechner, der bis zu drei Angebote direkt vergleicht.',
  ctaPrimary: { href: '#rechner', label: 'Zum kostenlosen Vergleichsrechner', cta: 'tool-hero' },
  meta: ['Kostenlos, ohne Anmeldung', 'Bis zu 3 Anbieter', 'CSV-Export für Excel'],
})}
      <section class="section" id="rechner">
        <div class="container">
${nwaTool()}
        </div>
      </section>
${prose(`
${answerBox('<strong>Kurz gesagt:</strong> Gute Lieferantenauswahl trennt zwei Dinge: <strong>K.-o.-Kriterien</strong>, die ein Anbieter erfüllen muss, und <strong>gewichtete Kriterien</strong>, nach denen die verbleibenden Anbieter verglichen werden. Das Ergebnis ist eine begründete, dokumentierte Entscheidung statt eines Bauchgefühls.')}

${toc('de', [
  ['schritte', 'Der Auswahlprozess in 7 Schritten'],
  ['kriterien', 'K.-o.-Kriterien und gewichtete Kriterien'],
  ['gewichtung', 'Gewichtung: so setzen Sie sie fest'],
  ['checkliste', 'Checkliste Lieferantenauswahl'],
  ['fehler', 'Typische Fehler'],
])}

<h2 id="schritte">Der Auswahlprozess in 7 Schritten</h2>
<ol>
  <li><strong>Bedarf definieren</strong> — Spezifikation, Menge, Termin, Qualitätsanforderungen, Nachweise.</li>
  <li><strong>Markt sondieren</strong> — eine Longlist aus Verzeichnissen, Messen, Netzwerk oder KI-Suche. Wie das geht, beschreibt <a href="/de/lieferanten-finden/">Lieferanten finden</a>.</li>
  <li><strong>Vorqualifizieren</strong> — K.-o.-Kriterien prüfen: Existenz, USt-IdNr., Sanktionslisten, Pflichtzertifikate, Mindestkapazität. Übrig bleibt die Shortlist.</li>
  <li><strong>Anfragen</strong> — eine einheitliche Anfrage an drei bis fünf Anbieter, damit Angebote vergleichbar sind.</li>
  <li><strong>Vergleichen</strong> — Angebote nach gewichteten Kriterien bewerten. Der Rechner oben macht das mit einer Nutzwertanalyse.</li>
  <li><strong>Verhandeln</strong> — mit den besten zwei, nicht nur mit dem ersten. Die Zweitplatzierten sind Ihre Verhandlungsposition.</li>
  <li><strong>Entscheiden und dokumentieren</strong> — Entscheidung mit Begründung und Datum festhalten, den Lieferanten anlegen und die <a href="/de/ratgeber/lieferantenqualifizierung/">Qualifizierung</a> abschließen.</li>
</ol>

<h2 id="kriterien">K.-o.-Kriterien und gewichtete Kriterien</h2>
<p>Der häufigste methodische Fehler ist, alles in eine Punkteskala zu packen. Dann gleicht ein sehr gutes Preisangebot ein fehlendes Pflichtzertifikat rechnerisch aus — und genau das darf nicht passieren.</p>
${table(
  ['Art', 'Funktion', 'Beispiele'],
  [
    ['K.-o.-Kriterien', 'Ja/Nein. Wer eines nicht erfüllt, scheidet aus — egal wie gut der Rest ist.', 'Pflichtzertifikat (z. B. IFS, ISO 13485), gültige USt-IdNr., kein Sanktionslistentreffer, Mindestkapazität, Lieferregion'],
    ['Gewichtete Kriterien', 'Punkte 0–10 mit Gewichtung. Hier wird verglichen.', 'Preis & Konditionen, Qualität, Liefertreue, Service, Flexibilität, Nachweise'],
    ['Informative Kriterien', 'Fließen nicht in den Score ein, werden aber festgehalten.', 'Nachhaltigkeitsbericht, Referenzkunden, Unternehmensgröße'],
  ]
)}

<h2 id="gewichtung">Gewichtung: so setzen Sie sie fest</h2>
<p>Die Gewichtung spiegelt, was ein Ausfall in diesem Kriterium kosten würde. Drei Faustregeln:</p>
<ul>
  <li><strong>Preis selten über 30 %.</strong> Darüber gewinnt fast immer der Billigste, und die Analyse wird zur Formalie.</li>
  <li><strong>Liefertreue hoch, wenn Stillstand droht.</strong> In der Serienfertigung eher 30 % als 15 %.</li>
  <li><strong>Gewichtung vor den Angeboten festlegen.</strong> Wer erst die Angebote sieht und dann gewichtet, rechnet sich den Favoriten schön.</li>
</ul>
${callout('<strong>Nachweis für ISO 9001</strong><p>Kriterienkatalog, ausgefüllter Vergleich, Begründung und Datum — damit ist die Auswahlentscheidung im Audit belegt. Der CSV-Export des Rechners ist dafür ein brauchbarer Einzelnachweis.</p>')}

<h2 id="checkliste">Checkliste Lieferantenauswahl</h2>
<ul>
  <li>Bedarf mit Spezifikation, Menge und Termin schriftlich festgelegt</li>
  <li>K.-o.-Kriterien definiert, bevor Anbieter gesucht werden</li>
  <li>Gewichtung festgelegt, bevor Angebote eingehen</li>
  <li>Mindestens drei qualifizierte Anbieter angefragt</li>
  <li>Einheitliche Anfrage mit identischen Mengen und Konditionen</li>
  <li>USt-IdNr. und Sanktionslisten für jeden Kandidaten geprüft (<a href="/de/ust-idnr-pruefen/">USt-IdNr.-Prüfer</a>)</li>
  <li>Zertifikate auf Gültigkeit und Standort geprüft</li>
  <li>Bewertung von mindestens zwei Personen (z. B. Einkauf und Qualitätssicherung)</li>
  <li>Entscheidung mit Begründung und Datum dokumentiert</li>
  <li>Absagen dokumentiert — potenzielle Zweitquelle</li>
</ul>

<h2 id="fehler">Typische Fehler</h2>
<ol>
  <li><strong>Nur der Preis zählt.</strong> Der günstigste Anbieter mit hoher Reklamationsquote wird am Ende der teuerste.</li>
  <li><strong>K.-o.-Kriterien in der Punkteskala.</strong> Ein fehlendes Pflichtzertifikat lässt sich nicht mit Punkten ausgleichen.</li>
  <li><strong>Nur ein Angebot.</strong> Ohne Vergleich gibt es keine Verhandlungsposition und keine Zweitquelle.</li>
  <li><strong>Keine Dokumentation.</strong> Im Audit zählt nicht, dass Sie verglichen haben, sondern dass Sie es belegen können.</li>
</ol>
`)}
${faqHtml('de', faqAuswahl)}
${relatedHtml('de', [
  ['/de/lieferanten-finden/', 'Lieferanten finden', 'Wie Sie die Longlist aufbauen — sieben Wege im Vergleich.'],
  ['/de/lieferantenbewertung/', 'Lieferantenbewertung', 'Nach der Auswahl: laufende Bewertung mit kostenlosem Rechner.'],
  ['/de/ratgeber/lieferantenqualifizierung/', 'Lieferantenqualifizierung', 'Die Prüfung vor der ersten Bestellung, in sechs Schritten.'],
])}`,
};

/* ============================================================
   Lieferantendatenbank + Vorlage
   Search Console: lieferantendatenbank (30 Impressionen, pos. 38),
   lieferantenakte (35), "digitale lieferantenakte" (Frage, pos. 3).
   ============================================================ */
const faqDb = [
  {
    q: 'Welche Felder gehören in eine Lieferantendatenbank?',
    a: 'Mindestens: Stammdaten (Firma, Adresse, USt-IdNr., Ansprechpartner), Einkaufsdaten (Warengruppe, Zahlungsziel, Incoterms), Status und Klassifizierung (aktiv/gesperrt, ABC, Risikoklasse), Nachweise mit Gültigkeit (Zertifikate, Rahmenvertrag) sowie Prüf- und Bewertungsergebnisse mit Datum. Die kostenlose Vorlage auf dieser Seite enthält 32 bewährte Spalten.',
  },
  {
    q: 'Was ist eine digitale Lieferantenakte?',
    a: 'Die digitale Lieferantenakte bündelt alles zu einem Lieferanten an einem Ort: Stammdaten, Ansprechpartner, Verträge, Zertifikate mit Ablaufdatum, Prüfergebnisse (USt-IdNr., Sanktionslisten), Bewertungen, Auditberichte und die Bestellhistorie — mit einer Änderungshistorie, wer wann was geändert hat. Sie ersetzt die Kombination aus Excel-Liste, Netzlaufwerk und E-Mail-Postfach.',
  },
  {
    q: 'Reicht Excel als Lieferantendatenbank?',
    a: 'Für eine Person und bis etwa 25 Lieferanten ja — die Vorlage auf dieser Seite ist dafür gemacht. Sobald mehrere Personen pflegen, Zertifikatsfristen überwacht werden müssen oder Kunden Nachweise verlangen, fehlen Excel Änderungshistorie, Fristenwarnungen und Rechteverwaltung. Details im Vergleich Excel vs. Software.',
  },
  {
    q: 'Wie halte ich Lieferantendaten aktuell?',
    a: 'Indem die Pflege dorthin verlagert wird, wo die Information entsteht: zum Lieferanten. Ein Lieferantenportal, in dem Lieferanten ihre Daten selbst aktualisieren und Sie Änderungen freigeben, ist dauerhaft der einzige Weg, der ohne jährliche Abfrage-Aktion auskommt.',
  },
];

export const lieferantendatenbank = {
  lang: 'de',
  path: '/de/lieferantendatenbank/',
  title: 'Lieferantendatenbank aufbauen: Felder & Excel-Vorlage | NexSource',
  description:
    'Lieferantendatenbank aufbauen: welche 32 Felder hineingehören, kostenlose Excel-/CSV-Vorlage zum Download und wann sich eine digitale Lieferantenakte lohnt.',
  keywords:
    'Lieferantendatenbank, Lieferantendatenbank Vorlage, Lieferantendatenbank Excel, digitale Lieferantenakte, Lieferantenakte, Lieferantenstammdaten, Lieferantenliste Vorlage',
  crumbs: [['/de/lieferantendatenbank/', 'Lieferantendatenbank']],
  schema: [softwareSchema('de'), faqSchema(faqDb)],
  body: `
${hero({
  lang: 'de',
  eyebrow: 'Lieferantendatenbank',
  h1: 'Lieferantendatenbank aufbauen: Felder, Vorlage und digitale Lieferantenakte',
  lead: 'Welche Informationen in eine Lieferantendatenbank gehören, eine kostenlose Vorlage mit 32 Spalten zum Download — und ab wann aus der Liste eine digitale Lieferantenakte werden sollte.',
  ctaPrimary: { href: '/downloads/lieferantendatenbank-vorlage.csv', label: 'Vorlage kostenlos herunterladen', cta: 'download-db-template' },
  meta: ['32 Spalten', 'Öffnet in Excel, Numbers, Google Sheets', 'Ohne Anmeldung'],
})}
${prose(`
${answerBox('<strong>Kurz gesagt:</strong> Eine brauchbare Lieferantendatenbank hat fünf Bereiche: Stammdaten, Einkaufsdaten, Klassifizierung, Nachweise mit Ablaufdatum und Prüf-/Bewertungsergebnisse mit Datum. Die <a href="/downloads/lieferantendatenbank-vorlage.csv">kostenlose Vorlage</a> enthält alle fünf. Wenn mehrere Personen pflegen oder Fristen überwacht werden müssen, wird aus der Liste eine digitale Lieferantenakte.')}

${toc('de', [
  ['felder', 'Die 32 Felder im Überblick'],
  ['vorlage', 'Die Vorlage richtig nutzen'],
  ['akte', 'Von der Liste zur digitalen Lieferantenakte'],
  ['pflege', 'Daten dauerhaft aktuell halten'],
])}

<h2 id="felder">Die 32 Felder im Überblick</h2>
${table(
  ['Bereich', 'Felder', 'Warum'],
  [
    ['Stammdaten', 'Lieferanten-Nr., Firmenname, Rechtsform, Adresse, Land, USt-IdNr., Handelsregister-Nr., Website', 'Eindeutige Identifikation und steuerliche Korrektheit'],
    ['Kontakt', 'Ansprechpartner, Funktion, E-Mail, Telefon', 'Wer ist bei Rückfragen, Reklamationen und Nachforderungen zuständig'],
    ['Einkauf', 'Warengruppe, Zahlungsziel, Incoterms, Rahmenvertrag gültig bis', 'Konditionen an einem Ort statt im Vertrag versteckt'],
    ['Klassifizierung', 'Status, ABC-Klasse, Risikoklasse', 'Bestimmt, wie viel Aufmerksamkeit ein Lieferant bekommt'],
    ['Nachweise', 'Zertifikat 1 und 2 mit Gültigkeit', 'Abgelaufene Zertifikate sind das häufigste Audit-Finding'],
    ['Prüfungen', 'USt-IdNr. geprüft am, Sanktionslistenprüfung am, Ergebnis', 'Eine Prüfung ohne Datum ist im Zweifel keine Prüfung'],
    ['Bewertung', 'Letzte Bewertung (0–100), Bewertet am, Nächste Requalifizierung', 'Entwicklung sichtbar machen, Wiedervorlage steuern'],
    ['Sonstiges', 'Bemerkungen', 'Zweitquellen, Besonderheiten, Absprachen'],
  ]
)}

<h2 id="vorlage">Die Vorlage richtig nutzen</h2>
<p>Die Datei ist eine CSV mit Semikolon als Trennzeichen und UTF-8-Kodierung — sie öffnet sich per Doppelklick in Excel mit korrekten Umlauten. Die erste Datenzeile ist ein ausgefülltes Beispiel; löschen Sie sie nach dem Lesen.</p>
<ul>
  <li><strong>Datumsfelder im Format JJJJ-MM-TT</strong> — dann lassen sie sich sortieren und filtern, etwa nach „Zertifikat läuft in den nächsten 90 Tagen ab".</li>
  <li><strong>Status konsequent pflegen</strong> — ein gesperrter Lieferant, der noch als „aktiv" in der Liste steht, bekommt irgendwann wieder eine Bestellung.</li>
  <li><strong>Mit den wichtigsten 20 anfangen</strong> — die Lieferanten, die 80 % des Volumens ausmachen, vollständig erfassen, der Rest folgt.</li>
  <li><strong>USt-IdNr. direkt prüfen</strong> — mit unserem kostenlosen <a href="/de/ust-idnr-pruefen/">USt-IdNr.-Prüfer</a>, Datum in die Spalte „geprüft am".</li>
</ul>
<p><a href="/downloads/lieferantendatenbank-vorlage.csv" class="btn btn-primary" data-cta="download-db-template-inline">Vorlage herunterladen (CSV, 32 Spalten)</a></p>

<h2 id="akte">Von der Liste zur digitalen Lieferantenakte</h2>
<p>Eine Tabelle speichert den <em>aktuellen</em> Stand. Eine digitale Lieferantenakte speichert zusätzlich, <em>wie</em> es dazu kam — und genau das fragt ein Auditor oder ein Großkunde ab.</p>
${table(
  ['', 'Tabelle / Vorlage', 'Digitale Lieferantenakte'],
  [
    ['Stammdaten', '<span class="yes">ja</span>', '<span class="yes">ja</span>'],
    ['Dokumente (Verträge, Zertifikate) am Datensatz', '<span class="no">nur als Verweis</span>', '<span class="yes">direkt angehängt</span>'],
    ['Warnung vor Ablauf von Zertifikaten', '<span class="no">manuell filtern</span>', '<span class="yes">automatisch 90/60/30 Tage</span>'],
    ['Änderungshistorie', '<span class="no">nein</span>', '<span class="yes">wer, wann, was</span>'],
    ['Mehrere Bearbeiter mit Rechten', '<span class="no">Versionskonflikte</span>', '<span class="yes">Rollen</span>'],
    ['Lieferant pflegt selbst', '<span class="no">nein</span>', '<span class="yes">über Lieferantenportal</span>'],
    ['Bestellungen am Lieferanten', '<span class="no">separate Liste</span>', '<span class="yes">integriert</span>'],
  ]
)}
<p>In <a href="/de/lieferantenmanagement-software/">NexSource</a> ist jeder Lieferant eine solche Akte — inklusive USt-IdNr.-Prüfung über VIES, Zertifikaten mit Fristenwarnung, Bewertung und Bestellhistorie. Die Vorlage lässt sich direkt importieren: Datei hochladen, NexSource erkennt die Spalten und prüft jeden Lieferanten beim Import gegen die Sanktionslisten.</p>

<h2 id="pflege">Daten dauerhaft aktuell halten</h2>
<p>Jede Lieferantendatenbank veraltet — Ansprechpartner wechseln, Firmierungen ändern sich, Zertifikate laufen aus. Drei Maßnahmen halten den Verfall auf:</p>
<ol>
  <li><strong>Pflege an den Lieferanten geben.</strong> Über ein <a href="/de/lieferantenportal/">Lieferantenportal</a> aktualisieren Lieferanten ihre Daten selbst; Sie geben frei.</li>
  <li><strong>Fristen automatisch überwachen</strong> statt jährlich die ganze Liste durchzusehen.</li>
  <li><strong>Einen Verantwortlichen benennen</strong> — Daten, die allen gehören, pflegt niemand.</li>
</ol>
`)}
${faqHtml('de', faqDb)}
${relatedHtml('de', [
  ['/de/vergleich/excel-vs-lieferantenmanagement-software/', 'Excel vs. Software', 'Ab wann die Vorlage nicht mehr reicht — mit Kostenrechnung.'],
  ['/de/lieferantenportal/', 'Lieferantenportal', 'Lieferanten pflegen ihre Daten selbst, Sie geben frei.'],
  ['/de/lieferantenmanagement-software/', 'Lieferantenmanagement-Software', 'Die digitale Lieferantenakte für den Mittelstand.'],
])}`,
};

/* ============================================================
   Ratgeber: Lieferantenentwicklung
   Search Console: lieferantenentwicklung (11, pos. 65), methoden der
   lieferantenentwicklung, lieferantenbefähigung, lieferantensteuerung.
   ============================================================ */
const faqEntw = [
  {
    q: 'Was ist Lieferantenentwicklung?',
    a: 'Lieferantenentwicklung umfasst alle Maßnahmen, mit denen ein Abnehmer die Leistung eines bestehenden Lieferanten gezielt verbessert — statt ihn auszutauschen. Typische Ziele sind höhere Liefertreue, weniger Reklamationen, bessere Nachweisführung oder mehr Kapazität.',
  },
  {
    q: 'Welche Methoden der Lieferantenentwicklung gibt es?',
    a: 'Von leicht nach aufwendig: strukturiertes Feedback auf Basis der Bewertung, Zielvereinbarungen mit Frist, gemeinsame Problemlösung bei Reklamationen, Audits mit Maßnahmenplan, Schulung und Wissenstransfer, gemeinsame Prozessverbesserung vor Ort sowie Anreize wie Volumenzusagen. Welche Methode passt, hängt von der Bedeutung des Lieferanten und der Ursache des Problems ab.',
  },
  {
    q: 'Wann lohnt sich Lieferantenentwicklung nicht?',
    a: 'Wenn der Lieferant leicht zu ersetzen ist, das Einkaufsvolumen gering ist oder der Lieferant selbst kein Interesse an Verbesserung zeigt. Dann ist der Aufbau einer Alternative meist günstiger als ein Entwicklungsprogramm.',
  },
];

export const guideLieferantenentwicklung = article({
  lang: 'de',
  path: '/de/ratgeber/lieferantenentwicklung/',
  title: 'Lieferantenentwicklung: Methoden, Ablauf & Kennzahlen | NexSource',
  h1: 'Lieferantenentwicklung: Methoden, Ablauf und Kennzahlen',
  description:
    'Lieferantenentwicklung praxisnah: welche Methoden es gibt, wann sie sich lohnt, ein Ablauf in fünf Schritten und die Kennzahlen, an denen Sie den Erfolg messen.',
  keywords: 'Lieferantenentwicklung, Methoden der Lieferantenentwicklung, Lieferantenförderung, Lieferantenbefähigung, Lieferantensteuerung',
  crumbs: [['/de/ratgeber/', 'Ratgeber'], ['/de/ratgeber/lieferantenentwicklung/', 'Lieferantenentwicklung']],
  schema: [faqSchema(faqEntw)],
  body: `
${hero({
  lang: 'de',
  eyebrow: 'Leitfaden · 6 Min. Lesezeit · Stand: September 2026',
  h1: 'Lieferantenentwicklung: Methoden, Ablauf und Kennzahlen',
  lead: 'Einen bestehenden Lieferanten besser machen ist oft günstiger, als einen neuen zu finden. Welche Methoden es gibt, wann sich der Aufwand lohnt und wie Sie den Erfolg messen.',
})}
${prose(`
${answerBox('<strong>Kurz gesagt:</strong> Lieferantenentwicklung lohnt sich bei wichtigen, schwer ersetzbaren Lieferanten mit einem lösbaren Problem. Sie beginnt mit einer objektiven Bewertung, führt über konkrete Ziele mit Frist und endet mit einer Entscheidung: Ziel erreicht, nachschärfen — oder Alternative aufbauen.')}

${toc('de', [
  ['wann', 'Wann Lieferantenentwicklung sinnvoll ist'],
  ['methoden', 'Die Methoden im Überblick'],
  ['ablauf', 'Ablauf in fünf Schritten'],
  ['kennzahlen', 'Kennzahlen für den Erfolg'],
])}

<h2 id="wann">Wann Lieferantenentwicklung sinnvoll ist</h2>
${table(
  ['Situation', 'Empfehlung'],
  [
    ['Strategischer oder Engpass-Lieferant mit Leistungsproblem', '<span class="yes">entwickeln</span> — ein Wechsel wäre teuer und riskant'],
    ['Guter Lieferant, neue Anforderungen (z. B. Zertifikat, Nachweise für Kunden)', '<span class="yes">entwickeln</span> — gemeinsam vorbereiten'],
    ['Standard-Lieferant, leicht ersetzbar, wiederholte Probleme', '<span class="no">wechseln</span> — Entwicklung lohnt den Aufwand nicht'],
    ['Lieferant zeigt kein Interesse an Verbesserung', '<span class="no">Alternative aufbauen</span>'],
  ]
)}

<h2 id="methoden">Die Methoden im Überblick</h2>
<h3>Strukturiertes Feedback</h3>
<p>Der einfachste und meist unterschätzte Hebel: Der Lieferant bekommt seine <a href="/de/lieferantenbewertung/">Bewertung</a> zu sehen, mit Zahlen. „Ihre Liefertreue lag bei 86 %, Ziel sind 95 %" verändert mehr als jede allgemeine Beschwerde.</p>
<h3>Zielvereinbarung mit Frist</h3>
<p>Zwei bis drei messbare Ziele, ein Termin, eine Wiedervorlage. Mehr Ziele verwässern den Fokus.</p>
<h3>Gemeinsame Problemlösung</h3>
<p>Bei Reklamationen nicht nur Ersatz fordern, sondern Ursachenanalyse und Abstellmaßnahme — und deren Wirksamkeit prüfen.</p>
<h3>Audit mit Maßnahmenplan</h3>
<p>Wenn die Ursache im Prozess des Lieferanten liegt, deckt ein <a href="/de/ratgeber/lieferantenaudit-checkliste/">Lieferantenaudit</a> sie auf. Wichtig ist der Maßnahmenplan danach, nicht der Bericht.</p>
<h3>Wissenstransfer und Schulung</h3>
<p>Etwa bei neuen Qualitätsanforderungen oder Nachweispflichten, die Sie von Ihren Kunden weitergeben müssen.</p>
<h3>Anreize</h3>
<p>Volumenzusagen, längere Vertragslaufzeiten oder bevorzugte Berücksichtigung bei neuen Projekten — für Lieferanten, die Ziele erreichen.</p>

<h2 id="ablauf">Ablauf in fünf Schritten</h2>
<ol>
  <li><strong>Objektive Ausgangslage</strong> — Bewertung mit Kennzahlen, nicht mit Eindrücken.</li>
  <li><strong>Gespräch</strong> — Ausgangslage teilen, Ursachen gemeinsam verstehen.</li>
  <li><strong>Ziele und Maßnahmen</strong> — zwei bis drei messbare Ziele, Verantwortliche, Termin.</li>
  <li><strong>Begleiten</strong> — Zwischenstand nach der Hälfte der Zeit, nicht erst am Ende.</li>
  <li><strong>Entscheiden</strong> — Ziel erreicht: Anreiz geben. Teilweise: nachschärfen. Nicht erreicht: Alternative aufbauen.</li>
</ol>
${callout('<strong>Dokumentation</strong><p>Ziele, Maßnahmen und Ergebnisse gehören an den Lieferantendatensatz — neben Bewertung und Auditberichten. Sonst beginnt jede Runde wieder bei null, spätestens beim nächsten Personalwechsel.</p>')}

<h2 id="kennzahlen">Kennzahlen für den Erfolg</h2>
${table(
  ['Kennzahl', 'Misst'],
  [
    ['Liefertreue (OTIF)', 'Termin- und mengengerechte Lieferungen'],
    ['Reklamationsquote', 'Beanstandete Lieferungen im Verhältnis zu allen'],
    ['Durchlaufzeit Reklamation', 'Tage von Meldung bis wirksamer Abstellmaßnahme'],
    ['Bewertungsscore im Zeitverlauf', 'Gesamtentwicklung über mehrere Bewertungsrunden'],
    ['Zielerreichungsquote', 'Anteil erreichter Entwicklungsziele'],
  ]
)}
`)}
${faqHtml('de', faqEntw)}
${relatedHtml('de', [
  ['/de/lieferantenbewertung/', 'Lieferantenbewertung', 'Die objektive Ausgangslage — mit kostenlosem Rechner.'],
  ['/de/ratgeber/lieferantenaudit-checkliste/', 'Lieferantenaudit-Checkliste', 'Wenn die Ursache im Prozess des Lieferanten liegt.'],
  ['/de/ratgeber/lieferantenmanagement/', 'Leitfaden Lieferantenmanagement', 'Der gesamte Lebenszyklus in sieben Phasen.'],
])}`,
});

/* ============================================================
   Über uns — trust and authorship. Facts only: who builds it, where,
   how to reach them. Personal story and photo to be added by the founder.
   ============================================================ */
const aboutBody = (lang) => {
  const de = lang === 'de';
  return `
      <section class="page-hero">
        <div class="container">
          <span class="eyebrow">${de ? 'Über uns' : 'About'}</span>
          <h1>${de ? 'Lieferantenmanagement aus Holzminden — für den Mittelstand gebaut' : 'Supplier management built in Germany for mid-sized companies'}</h1>
          <p class="lead">${
            de
              ? 'NexSource wird von Maximilian Budziat in Holzminden entwickelt. Das Ziel: Einkaufsteams im Mittelstand eine Lieferantenverwaltung zu geben, die ohne IT-Projekt funktioniert und zu einem Preis, der sich auch für 20 Lieferanten rechnet.'
              : 'NexSource is built by Maximilian Budziat in Holzminden, Germany. The goal: give procurement teams at mid-sized companies supplier management that works without an IT project, at a price that makes sense even for 20 suppliers.'
          }</p>
        </div>
      </section>
${prose(
  de
    ? `
<h2>Warum NexSource</h2>
<p>Die meisten mittelständischen Unternehmen verwalten ihre Lieferanten in Tabellen, Ordnern und E-Mail-Postfächern. Konzernsoftware ist für sie zu teuer und zu aufwendig in der Einführung, und Tabellen stoßen an Grenzen, sobald mehrere Personen mitarbeiten oder Kunden und Auditoren Nachweise verlangen.</p>
<p>NexSource setzt genau dazwischen an: Stammdaten, Zertifikate mit Fristenwarnung, Verträge, Bewertung, Bestellungen mit Freigabe und ein Lieferantenportal — in Minuten eingerichtet.</p>

<h2>Wofür wir stehen</h2>
<ul>
  <li><strong>Transparente Preise.</strong> Drei Tarife, öffentlich auf der Website, monatlich kündbar.</li>
  <li><strong>Unbegrenzte Nutzer.</strong> Einkauf, Qualitätssicherung, Buchhaltung und Geschäftsführung arbeiten auf denselben Daten, ohne dass jede Person extra kostet.</li>
  <li><strong>Datenhaltung in der EU,</strong> soweit technisch verfügbar, und DSGVO-konforme Verarbeitung. Details in der <a href="/de/datenschutz.html">Datenschutzerklärung</a>.</li>
  <li><strong>Testen ohne Hürde.</strong> 14 Tage kostenlos, keine Kreditkarte nötig.</li>
</ul>

<h2>Kontakt</h2>
<p>Fragen, Feedback oder eine Demo: schreiben Sie direkt an <a href="mailto:info@getnexsource.com">info@getnexsource.com</a> — die Nachricht landet beim Gründer, nicht in einem Ticketsystem.</p>
<p>NexSource · Maximilian Budziat · Grüner Brink 14 · 37603 Holzminden · <a href="/de/impressum.html">Impressum</a></p>
`
    : `
<h2>Why NexSource</h2>
<p>Most mid-sized companies manage suppliers in spreadsheets, folders and inboxes. Enterprise software is too expensive and too heavy to roll out, and spreadsheets break down as soon as several people work on them or customers and auditors ask for evidence.</p>
<p>NexSource sits right in between: master data, certificates with expiry alerts, contracts, evaluation, purchase orders with approval and a supplier portal — set up in minutes.</p>

<h2>What we stand for</h2>
<ul>
  <li><strong>Transparent pricing.</strong> Three plans, published on the website, cancel monthly.</li>
  <li><strong>Unlimited users.</strong> Procurement, quality, finance and management work from the same data without paying per seat.</li>
  <li><strong>EU data hosting</strong> where technically available, and GDPR-compliant processing. Details in the <a href="/privacy.html">privacy policy</a>.</li>
  <li><strong>No-friction trial.</strong> 14 days free, no credit card required.</li>
</ul>

<h2>Contact</h2>
<p>Questions, feedback or a demo: email <a href="mailto:info@getnexsource.com">info@getnexsource.com</a> — it goes straight to the founder, not into a ticket queue.</p>
<p>NexSource · Maximilian Budziat · Grüner Brink 14 · 37603 Holzminden, Germany · <a href="/imprint.html">Imprint</a></p>
`
)}`;
};

const aboutSchema = (lang) => ({
  '@type': 'AboutPage',
  name: lang === 'de' ? 'Über NexSource' : 'About NexSource',
  url: SITE + (lang === 'de' ? '/de/ueber-uns/' : '/about/'),
  mainEntity: {
    '@id': SITE + '/#organization',
    founder: { '@type': 'Person', name: 'Maximilian Budziat' },
    email: 'info@getnexsource.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Grüner Brink 14',
      postalCode: '37603',
      addressLocality: 'Holzminden',
      addressCountry: 'DE',
    },
  },
});

export const ueberUns = {
  lang: 'de',
  path: '/de/ueber-uns/',
  altPath: '/about/',
  title: 'Über NexSource — Lieferantenmanagement aus Holzminden',
  description:
    'Wer hinter NexSource steht: entwickelt von Maximilian Budziat in Holzminden, für Einkaufsteams im Mittelstand. Transparente Preise, unbegrenzte Nutzer.',
  crumbs: [['/de/ueber-uns/', 'Über uns']],
  schema: [aboutSchema('de')],
  body: aboutBody('de'),
};

export const about = {
  lang: 'en',
  path: '/about/',
  altPath: '/de/ueber-uns/',
  title: 'About NexSource — Supplier Management Built in Germany',
  description:
    'Who is behind NexSource: built by Maximilian Budziat in Holzminden, Germany, for procurement teams at mid-sized companies. Transparent pricing, unlimited users.',
  crumbs: [['/about/', 'About']],
  schema: [aboutSchema('en')],
  body: aboutBody('en'),
};
