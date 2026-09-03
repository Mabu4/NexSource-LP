import { faqSchema, faqHtml, relatedHtml, SITE } from '../layout.mjs';
import { hero, prose, table, callout, toc, answerBox } from '../blocks.mjs';

const PUB = '2026-09-02';

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

/* ---------------- Hub ---------------- */
const POSTS = [
  [
    '/de/ratgeber/lieferantenmanagement/',
    'Leitfaden',
    'Lieferantenmanagement: Leitfaden für den Mittelstand',
    'Von der Bedarfsanalyse bis zur Lieferantenentwicklung — der komplette Prozess in sieben Phasen, mit Verantwortlichkeiten und typischen Fehlern.',
  ],
  [
    '/de/ratgeber/lieferantenqualifizierung/',
    'Prozess',
    'Lieferantenqualifizierung in 6 Schritten',
    'Wie Sie neue Lieferanten strukturiert prüfen, bevor die erste Bestellung rausgeht — inklusive Prüfumfang je Risikoklasse.',
  ],
  [
    '/de/ratgeber/lieferantenaudit-checkliste/',
    'Checkliste',
    'Lieferantenaudit: Ablauf, Fragenkatalog und Checkliste',
    'Vorbereitung, Durchführung und Nachbereitung eines Lieferantenaudits — mit konkretem Fragenkatalog zum Mitnehmen.',
  ],
  [
    '/de/lieferantenbewertung/',
    'Tool',
    'Lieferantenbewertung: Kriterien und kostenloser Rechner',
    'Gewichtete Bewertung nach sieben Standardkriterien, direkt im Browser, mit CSV-Export für Excel.',
  ],
  [
    '/de/ust-idnr-pruefen/',
    'Tool',
    'USt-IdNr. prüfen — kostenloses Tool für alle EU-Länder',
    'Format und Prüfziffer für alle EU-Staaten prüfen, ohne Anmeldung und ohne Datenübertragung.',
  ],
  [
    '/de/vergleich/excel-vs-lieferantenmanagement-software/',
    'Vergleich',
    'Excel vs. Lieferantenmanagement-Software',
    'Wann Excel reicht, wann es teuer wird — mit Kostenrechnung und Umstiegssignalen.',
  ],
];

export const ratgeberHub = {
  lang: 'de',
  path: '/de/ratgeber/',
  altPath: '/guides/',
  title: 'Ratgeber Einkauf & Lieferantenmanagement | NexSource',
  description:
    'Praxisnahe Leitfäden, Checklisten und kostenlose Tools für Einkauf und Lieferantenmanagement im Mittelstand — ohne Beratersprache.',
  crumbs: [['/de/ratgeber/', 'Ratgeber']],
  schema: [
    {
      '@type': 'CollectionPage',
      name: 'Ratgeber Einkauf & Lieferantenmanagement',
      url: SITE + '/de/ratgeber/',
    },
  ],
  body: `
${hero({
  lang: 'de',
  eyebrow: 'Ratgeber',
  h1: 'Ratgeber: Einkauf & Lieferantenmanagement',
  lead: 'Leitfäden, Checklisten und kostenlose Tools für Einkaufsteams im Mittelstand. Geschrieben für Menschen, die den Prozess umsetzen müssen — nicht für Beratungsfolien.',
  ctaPrimary: { href: '#artikel', label: 'Zu den Beiträgen', cta: 'guides-hero' },
})}
      <section class="section" id="artikel">
        <div class="container" style="max-width:900px">
          <div class="post-list">
${POSTS.map(
  ([href, tag, title, desc]) => `            <a class="post-card" href="${href}">
              <span class="post-tag">${tag}</span>
              <h3>${title}</h3>
              <p>${desc}</p>
            </a>`
).join('\n')}
          </div>
        </div>
      </section>`,
};

/* ---------------- Pillar: Lieferantenmanagement ---------------- */
const faqL = [
  {
    q: 'Was gehört alles zum Lieferantenmanagement?',
    a: 'Lieferantenmanagement umfasst den gesamten Lebenszyklus einer Lieferantenbeziehung: Bedarfsermittlung, Lieferantensuche, Qualifizierung und Prüfung, Onboarding mit Stammdaten und Nachweisen, operative Abwicklung von Bestellungen, regelmäßige Bewertung, Lieferantenentwicklung sowie gegebenenfalls die Auslistung.',
  },
  {
    q: 'Wer ist im Mittelstand für Lieferantenmanagement zuständig?',
    a: 'Meist der Einkauf in der Federführung, mit Beteiligung von Qualitätssicherung (Zertifikate, Reklamationen), Buchhaltung (Konditionen, Zahlungsziele) und Geschäftsführung (Freigaben ab bestimmten Beträgen). In Unternehmen unter 50 Mitarbeitenden liegt das oft in einer Hand — genau deshalb ist Dokumentation dort besonders wichtig.',
  },
  {
    q: 'Was ist der Unterschied zwischen Lieferantenmanagement und Einkauf?',
    a: 'Der Einkauf beschafft — er kümmert sich um den einzelnen Vorgang: Anfrage, Angebot, Bestellung, Lieferung. Lieferantenmanagement betrachtet die Beziehung über die Zeit: Wer sind unsere Lieferanten, wie gut sind sie, wo sind wir abhängig, wen entwickeln wir weiter. Operativ überschneidet sich beides stark, strategisch nicht.',
  },
  {
    q: 'Wie viele Lieferanten sind zu viele?',
    a: 'Eine feste Zahl gibt es nicht, aber ein verlässliches Muster: Wenn 80 % Ihres Volumens auf 20 % Ihrer Lieferanten entfallen und der lange Rest jeweils nur wenige hundert Euro im Jahr ausmacht, verursacht dieser Rest überproportional Verwaltungsaufwand. Eine Konsolidierung senkt Kosten, ohne die Versorgungssicherheit zu gefährden — solange Sie bei kritischen Teilen Zweitquellen behalten.',
  },
];

export const guideLieferantenmanagement = article({
  lang: 'de',
  path: '/de/ratgeber/lieferantenmanagement/',
  altPath: '/guides/supplier-management/',
  title: 'Lieferantenmanagement: Leitfaden für den Mittelstand | NexSource',
  h1: 'Lieferantenmanagement: der komplette Leitfaden für den Mittelstand',
  description:
    'Lieferantenmanagement in sieben Phasen: Bedarf, Suche, Qualifizierung, Onboarding, Bewertung, Entwicklung — mit Kennzahlen und typischen Fehlern.',
  keywords: 'Lieferantenmanagement, Supplier Relationship Management, Lieferantenmanagement Prozess, Lieferantenstrategie Mittelstand',
  crumbs: [['/de/ratgeber/', 'Ratgeber'], ['/de/ratgeber/lieferantenmanagement/', 'Lieferantenmanagement']],
  schema: [faqSchema(faqL)],
  body: `
${hero({
  lang: 'de',
  eyebrow: 'Leitfaden · Lesezeit ca. 9 Min.',
  h1: 'Lieferantenmanagement: der komplette Leitfaden für den Mittelstand',
  lead: 'Der gesamte Lebenszyklus einer Lieferantenbeziehung in sieben Phasen — mit klaren Verantwortlichkeiten, den Kennzahlen, die wirklich etwas aussagen, und den Fehlern, die im Mittelstand am häufigsten passieren.',
})}
${prose(`
${answerBox('<strong>Kurz gesagt:</strong> Lieferantenmanagement ist die systematische Steuerung aller Lieferantenbeziehungen über ihren gesamten Lebenszyklus. Im Mittelstand geht es dabei selten um Einkaufsmacht, sondern um drei Dinge: Versorgungssicherheit, Nachweisfähigkeit gegenüber Kunden und Auditoren, und die Unabhängigkeit von Einzelpersonen im Team.')}

${toc('de', [
  ['warum', 'Warum das Thema im Mittelstand angekommen ist'],
  ['phasen', 'Die sieben Phasen'],
  ['abc', 'Lieferanten segmentieren: ABC und Risiko'],
  ['kennzahlen', 'Kennzahlen, die etwas aussagen'],
  ['rollen', 'Wer macht was'],
  ['fehler', 'Die häufigsten Fehler'],
  ['start', 'In 30 Tagen starten'],
])}

<h2 id="warum">Warum das Thema im Mittelstand angekommen ist</h2>
<p>Lieferantenmanagement galt lange als Konzernthema. Das hat sich in wenigen Jahren geändert, und zwar aus drei sehr konkreten Gründen:</p>
<ul>
  <li><strong>Lieferkettenstörungen sind Normalzustand geworden.</strong> Wer keine Zweitquelle kennt, steht bei Ausfall still — die Frage ist nicht ob, sondern wann.</li>
  <li><strong>Nachweispflichten werden weitergereicht.</strong> Große Kunden geben ihre Sorgfaltspflichten vertraglich an Zulieferer weiter. Wer nicht liefert, wird ausgelistet. Mehr dazu unter <a href="/de/lksg-software/">LkSG für Zulieferer</a>.</li>
  <li><strong>Fachkräftemangel im Einkauf.</strong> Wenn Wissen nur im Kopf einer Person existiert, ist jeder Wechsel ein Betriebsrisiko.</li>
</ul>

<h2 id="phasen">Die sieben Phasen</h2>
<h3>1. Bedarf verstehen</h3>
<p>Bevor Sie suchen, klären Sie: Was genau wird gebraucht, in welcher Menge, mit welcher Spezifikation, in welchem Rhythmus? Ein überraschend großer Teil schlechter Lieferantenentscheidungen entsteht hier — nicht bei der Auswahl, sondern bei der unklaren Anforderung.</p>
<h3>2. Lieferanten suchen</h3>
<p>Klassisch über Messen, Branchenverzeichnisse, Empfehlungen und Ausschreibungen. Der Aufwand ist der Grund, warum viele Unternehmen beim bestehenden Lieferanten bleiben, obwohl sie unzufrieden sind. Eine <a href="/de/lieferantenmanagement-software/">KI-gestützte Lieferantensuche</a> senkt diese Schwelle deutlich.</p>
<h3>3. Qualifizieren und prüfen</h3>
<p>Bevor die erste Bestellung rausgeht: Existenz und Bonität, <a href="/de/ust-idnr-pruefen/">USt-IdNr.</a>, <a href="/de/sanktionslisten-pruefung/">Sanktionslisten</a>, Zertifikate, Referenzen, bei kritischen Teilen ein Audit oder Erstmuster. Der Detailgrad richtet sich nach dem Risiko — dazu unten mehr. Ausführlich im <a href="/de/ratgeber/lieferantenqualifizierung/">Leitfaden Lieferantenqualifizierung</a>.</p>
<h3>4. Onboarding</h3>
<p>Stammdaten vollständig erfassen, Ansprechpartner benennen, Konditionen und Zahlungsziele festhalten, Rahmenvertrag und Qualitätssicherungsvereinbarung ablegen, Zertifikate mit Ablaufdatum hinterlegen. Diese Phase entscheidet über die Datenqualität der nächsten Jahre.</p>
<h3>5. Operativ abwickeln</h3>
<p>Bestellungen mit definierter Freigabe, dokumentierten Terminen und nachvollziehbarer Statushistorie. Der Nebeneffekt: Aus dieser Historie entstehen die Daten, mit denen Sie später objektiv bewerten können.</p>
<h3>6. Bewerten</h3>
<p>Regelmäßig, nach festen und gewichteten Kriterien, im Zeitverlauf. Details und ein kostenloser Rechner auf der Seite <a href="/de/lieferantenbewertung/">Lieferantenbewertung</a>.</p>
<h3>7. Entwickeln oder trennen</h3>
<p>Aus der Bewertung folgt eine Entscheidung: ausbauen, entwickeln oder ersetzen. Lieferantenentwicklung heißt konkret: gemeinsames Gespräch, zwei bis drei messbare Ziele, Frist, Wiedervorlage. Alles andere ist Wunschdenken.</p>

<h2 id="abc">Lieferanten segmentieren: ABC und Risiko</h2>
<p>Nicht jeder Lieferant verdient dieselbe Aufmerksamkeit. Zwei Dimensionen reichen:</p>
${table(
  ['', 'Geringes Versorgungsrisiko', 'Hohes Versorgungsrisiko'],
  [
    ['<strong>Hohes Volumen</strong>', 'Hebel-Lieferanten: Konditionen verhandeln, Wettbewerb nutzen', 'Strategische Lieferanten: Partnerschaft, Zweitquelle aufbauen, engmaschig bewerten'],
    ['<strong>Geringes Volumen</strong>', 'Standard-Lieferanten: Aufwand minimieren, bündeln, automatisieren', 'Engpass-Lieferanten: Alternativen suchen, Bestände erhöhen, Abhängigkeit dokumentieren'],
  ]
)}
${callout('<strong>Praxisregel</strong><p>Strategische und Engpass-Lieferanten bewerten Sie halbjährlich mit vollständigem Kriterienkatalog. Standard-Lieferanten reichen jährlich und vereinfacht. Wer alle gleich behandelt, macht bei den wichtigen zu wenig und bei den unwichtigen zu viel.</p>')}

<h2 id="kennzahlen">Kennzahlen, die etwas aussagen</h2>
${table(
  ['Kennzahl', 'Berechnung', 'Aussage'],
  [
    ['Liefertreue (OTIF)', 'termin- und mengengerechte Lieferungen ÷ alle Lieferungen', 'Der wichtigste operative Indikator überhaupt'],
    ['Reklamationsquote', 'beanstandete Lieferungen ÷ alle Lieferungen', 'Qualitätsstabilität, unabhängig vom Einzelfall'],
    ['Lieferantenkonzentration', 'Anteil der Top-5-Lieferanten am Einkaufsvolumen', 'Abhängigkeitsrisiko'],
    ['Anteil qualifizierter Lieferanten', 'geprüfte Lieferanten ÷ aktive Lieferanten', 'Auditfähigkeit auf einen Blick'],
    ['Zertifikate ohne gültige Frist', 'Anzahl', 'Direktes Audit-Risiko — sollte null sein'],
    ['Durchlaufzeit bis Freigabe', 'Ø Tage von Anlage bis Genehmigung', 'Prozessreibung intern'],
  ]
)}

<h2 id="rollen">Wer macht was</h2>
${table(
  ['Rolle', 'Verantwortung'],
  [
    ['Einkauf', 'Federführung, Auswahl, Konditionen, Bestellungen, Bewertungskoordination'],
    ['Qualitätssicherung', 'Zertifikate, Spezifikationen, Reklamationen, Audits'],
    ['Buchhaltung', 'Stammdatenprüfung, Zahlungsziele, USt-IdNr.'],
    ['Geschäftsführung', 'Freigaben ab Schwellenwert, strategische Entscheidungen, Auslistungen'],
    ['Fachabteilung', 'Bedarfsdefinition, technische Bewertung'],
  ]
)}
<p>Der praktische Knackpunkt: Diese Rollen müssen auf denselben Daten arbeiten. Genau daran scheitern nutzerbasierte Softwarepreise — man spart Lizenzen und arbeitet deshalb weiter mit Sammelpostfächern.</p>

<h2 id="fehler">Die häufigsten Fehler</h2>
<ol>
  <li><strong>Alles gleich behandeln.</strong> Ohne Segmentierung verteilen Sie Aufmerksamkeit nach Lautstärke statt nach Relevanz.</li>
  <li><strong>Bewerten ohne Konsequenz.</strong> Eine Bewertung ohne abgeleitete Maßnahme ist reine Beschäftigung.</li>
  <li><strong>Nur auf den Preis schauen.</strong> Ein 4 % günstigerer Lieferant mit 8 % Reklamationsquote ist ein Verlustgeschäft.</li>
  <li><strong>Keine Zweitquelle bei kritischen Teilen.</strong> Der Aufbau dauert Monate — man beginnt ihn nicht, wenn der Ausfall bereits da ist.</li>
  <li><strong>Wissen nicht dokumentieren.</strong> Absprachen, Zweitquellen und Erfahrungen gehören ins System, nicht in einen Kopf.</li>
  <li><strong>Stammdaten nie aktualisieren.</strong> Deshalb existiert das <a href="/de/lieferantenportal/">Lieferantenportal</a>: Der Lieferant pflegt, Sie geben frei.</li>
</ol>

<h2 id="start">In 30 Tagen starten</h2>
<ol>
  <li><strong>Woche 1:</strong> Alle aktiven Lieferanten in einer Liste erfassen, mit Jahresvolumen. Meist zeigt sich sofort, dass 20 % das Volumen tragen.</li>
  <li><strong>Woche 2:</strong> Die Top-20 segmentieren (Volumen × Risiko) und für diese Zertifikate mit Ablaufdatum vollständig hinterlegen.</li>
  <li><strong>Woche 3:</strong> Bewertungskriterien festlegen und gewichten, die Top-20 einmalig bewerten.</li>
  <li><strong>Woche 4:</strong> Zwei Gespräche führen — mit dem besten und dem schwächsten Lieferanten. Maßnahmen und Wiedervorlage festhalten.</li>
</ol>
<p>Danach haben Sie ein funktionierendes Lieferantenmanagement für den Teil Ihrer Lieferantenbasis, der zählt. Der Rest wächst nach.</p>
`)}
${faqHtml('de', faqL)}
${relatedHtml('de', [
  ['/de/ratgeber/lieferantenqualifizierung/', 'Lieferantenqualifizierung', 'Der Prüfprozess vor der ersten Bestellung, in sechs Schritten.'],
  ['/de/lieferantenbewertung/', 'Lieferantenbewertung', 'Kriterien, Gewichtung und kostenloser Rechner.'],
  ['/de/lieferantenmanagement-software/', 'Lieferantenmanagement-Software', 'Den beschriebenen Prozess in einem System abbilden.'],
])}`,
});

/* ---------------- Lieferantenqualifizierung ---------------- */
const faqQ = [
  {
    q: 'Was ist Lieferantenqualifizierung?',
    a: 'Die Lieferantenqualifizierung ist die strukturierte Prüfung eines potenziellen Lieferanten, bevor eine Geschäftsbeziehung aufgenommen wird. Geprüft werden typischerweise Existenz und Rechtsform, Bonität, steuerliche Identifikation, Sanktionslisten, Zertifizierungen, technische Leistungsfähigkeit und — bei kritischen Teilen — Erstmuster oder ein Audit.',
  },
  {
    q: 'Wie tief muss geprüft werden?',
    a: 'Risikobasiert. Ein Bürobedarfslieferant mit 800 € Jahresvolumen braucht eine Basisprüfung; ein Single-Source-Lieferant eines sicherheitsrelevanten Bauteils braucht Audit, Erstmusterprüfbericht und dokumentierte Notfallalternative. Der Fehler liegt fast immer darin, alle gleich zu behandeln.',
  },
  {
    q: 'Wie lange dauert eine Qualifizierung?',
    a: 'Die Basisprüfung dauert bei guter Datenlage unter einer Stunde. Was Zeit kostet, ist das Warten auf Unterlagen des Lieferanten — deshalb lohnt sich ein Self-Service-Portal, über das der Lieferant seine Nachweise selbst bereitstellt.',
  },
  {
    q: 'Muss die Qualifizierung wiederholt werden?',
    a: 'Ja. Zertifikate laufen ab, Eigentümerstrukturen ändern sich, Sanktionslisten werden fortlaufend aktualisiert. Üblich ist eine jährliche Requalifizierung für kritische Lieferanten und eine anlassbezogene Prüfung bei Auffälligkeiten.',
  },
];

export const guideQualifizierung = article({
  lang: 'de',
  path: '/de/ratgeber/lieferantenqualifizierung/',
  title: 'Lieferantenqualifizierung in 6 Schritten | NexSource',
  h1: 'Lieferantenqualifizierung in 6 Schritten',
  description:
    'Neue Lieferanten strukturiert prüfen, bevor die erste Bestellung rausgeht: Prüfumfang je Risikoklasse, konkrete Prüfpunkte und wiederkehrende Requalifizierung.',
  keywords: 'Lieferantenqualifizierung, Lieferantenprüfung, Lieferanten Onboarding, Lieferantenfreigabe, Erstbewertung Lieferant',
  crumbs: [['/de/ratgeber/', 'Ratgeber'], ['/de/ratgeber/lieferantenqualifizierung/', 'Lieferantenqualifizierung']],
  schema: [faqSchema(faqQ)],
  body: `
${hero({
  lang: 'de',
  eyebrow: 'Prozess · Lesezeit ca. 7 Min.',
  h1: 'Lieferantenqualifizierung in 6 Schritten',
  lead: 'Die Prüfung, die vor der ersten Bestellung passieren muss — abgestuft nach Risiko, damit Sie bei kritischen Lieferanten gründlich und bei Bürobedarf schnell sind.',
})}
${prose(`
${answerBox('<strong>Kurz gesagt:</strong> Lieferantenqualifizierung ist die dokumentierte Prüfung eines Lieferanten vor der Geschäftsaufnahme. Der Prüfumfang richtet sich nach dem Risiko, nicht nach dem Bauchgefühl. Entscheidend ist, dass jedes Ergebnis am Lieferantendatensatz dokumentiert bleibt — sonst ist die Prüfung im Audit wertlos.')}

${toc('de', [
  ['risikoklassen', 'Zuerst: Risikoklasse festlegen'],
  ['schritte', 'Die sechs Schritte'],
  ['pruefpunkte', 'Konkreter Prüfumfang je Klasse'],
  ['requalifizierung', 'Requalifizierung: was wann wiederholt wird'],
  ['praxis', 'Wie es in der Praxis schneller geht'],
])}

<h2 id="risikoklassen">Zuerst: Risikoklasse festlegen</h2>
<p>Bevor Sie prüfen, entscheiden Sie, <em>wie tief</em> Sie prüfen. Drei Klassen reichen für den Mittelstand:</p>
${table(
  ['Klasse', 'Merkmale', 'Beispiel'],
  [
    ['Kritisch', 'Single Source, sicherheits- oder qualitätsrelevantes Teil, hoher Umsatzanteil, Ausfall stoppt Produktion', 'Rohstofflieferant in der Lebensmittelproduktion'],
    ['Standard', 'Regelmäßiger Bezug, austauschbar, mittleres Volumen', 'Verpackungsmaterial mit mehreren Anbietern'],
    ['Unkritisch', 'Geringes Volumen, sofort ersetzbar, kein Qualitätseinfluss', 'Bürobedarf, Werbeartikel'],
  ]
)}

<h2 id="schritte">Die sechs Schritte</h2>
<ol>
  <li><strong>Identität und Existenz prüfen.</strong> Firmierung, Rechtsform, Registereintrag, Sitz, Vertretungsberechtigung. Bei Auslandsbezug zusätzlich die tatsächliche Eigentümerstruktur.</li>
  <li><strong>Steuerliche und rechtliche Prüfung.</strong> <a href="/de/ust-idnr-pruefen/">USt-IdNr. validieren</a> und gegen <a href="/de/sanktionslisten-pruefung/">EU-, OFAC- und UN-Sanktionslisten</a> abgleichen. Ergebnis mit Datum dokumentieren.</li>
  <li><strong>Wirtschaftliche Stabilität einschätzen.</strong> Bonitätsauskunft oder Jahresabschluss, insbesondere wenn Sie in Vorleistung gehen oder von diesem Lieferanten abhängig würden.</li>
  <li><strong>Fachliche Eignung prüfen.</strong> Zertifikate (ISO 9001, IFS, BRC, branchenspezifisch), Referenzen, Kapazität, technische Ausstattung, Reaktionsfähigkeit.</li>
  <li><strong>Bemustern oder auditieren.</strong> Bei kritischen Teilen: Erstmuster mit Prüfbericht, gegebenenfalls Vor-Ort-Audit. Siehe <a href="/de/ratgeber/lieferantenaudit-checkliste/">Lieferantenaudit-Checkliste</a>.</li>
  <li><strong>Freigeben und dokumentieren.</strong> Formale Freigabe mit Datum und verantwortlicher Person, Stammdaten und Nachweise ablegen, Requalifizierungstermin setzen.</li>
</ol>

<h2 id="pruefpunkte">Konkreter Prüfumfang je Klasse</h2>
${table(
  ['Prüfpunkt', 'Unkritisch', 'Standard', 'Kritisch'],
  [
    ['Registerauszug / Existenznachweis', '<span class="yes">ja</span>', '<span class="yes">ja</span>', '<span class="yes">ja</span>'],
    ['USt-IdNr.-Validierung', '<span class="yes">ja</span>', '<span class="yes">ja</span>', '<span class="yes">ja, qualifiziert</span>'],
    ['Sanktionslistenabgleich', '<span class="yes">ja</span>', '<span class="yes">ja</span>', '<span class="yes">ja, inkl. Eigentümer</span>'],
    ['Bonitätsauskunft', 'nein', 'empfohlen', '<span class="yes">ja</span>'],
    ['Zertifikate mit Gültigkeit', 'falls vorhanden', '<span class="yes">ja</span>', '<span class="yes">ja, überwacht</span>'],
    ['Referenzen', 'nein', 'empfohlen', '<span class="yes">ja</span>'],
    ['Erstmuster / Bemusterung', 'nein', 'fallweise', '<span class="yes">ja</span>'],
    ['Vor-Ort-Audit', 'nein', 'nein', '<span class="yes">ja</span>'],
    ['Notfallalternative dokumentiert', 'nein', 'empfohlen', '<span class="yes">verpflichtend</span>'],
  ]
)}

<h2 id="requalifizierung">Requalifizierung: was wann wiederholt wird</h2>
<p>Eine Qualifizierung ist eine Momentaufnahme. Diese Prüfungen sollten wiederkehren:</p>
<ul>
  <li><strong>Zertifikate:</strong> vor Ablauf nachfordern — automatische Erinnerung 90/60/30 Tage vor Fristende.</li>
  <li><strong>Sanktionslisten:</strong> Listen ändern sich laufend; ein wiederkehrender Abgleich ist üblich.</li>
  <li><strong>USt-IdNr.:</strong> vor größeren steuerfreien Lieferungen erneut bestätigen.</li>
  <li><strong>Bonität:</strong> jährlich bei kritischen Lieferanten, sofort bei Auffälligkeiten (Zahlungsverzug, Presseberichte, Führungswechsel).</li>
  <li><strong>Audit:</strong> je nach Branche alle ein bis drei Jahre.</li>
</ul>
${callout('<strong>Der eigentliche Engpass</strong><p>Nicht die Prüfung dauert lange, sondern das Beschaffen der Unterlagen. Wenn Ihr Lieferant seine Nachweise über ein <a href="/de/lieferantenportal/">Portal</a> selbst hochlädt und das System vor Ablauf automatisch erinnert, verschwindet der Großteil dieses Aufwands.</p>', 'ok')}

<h2 id="praxis">Wie es in der Praxis schneller geht</h2>
<p>In <a href="/de/lieferantenmanagement-software/">NexSource</a> laufen die Schritte 1 und 2 automatisch: Bei der KI-Lieferantensuche werden Unternehmensdaten recherchiert, die USt-IdNr. über VIES validiert und Sanktionslisten abgeglichen — verdichtet zu einem Trust-Score von 0–100 mit Onboarding-Empfehlung. Die Schritte 3 bis 6 bleiben Ihre Entscheidung, werden aber am Lieferanten dokumentiert, inklusive Fristen und Verantwortlichkeit.</p>
`)}
${faqHtml('de', faqQ)}
${relatedHtml('de', [
  ['/de/ratgeber/lieferantenaudit-checkliste/', 'Lieferantenaudit-Checkliste', 'Fragenkatalog und Ablauf für das Vor-Ort-Audit.'],
  ['/de/sanktionslisten-pruefung/', 'Sanktionslistenprüfung', 'EU, OFAC und UN automatisch prüfen und dokumentieren.'],
  ['/de/lieferantenbewertung/', 'Lieferantenbewertung', 'Nach der Qualifizierung: laufende Bewertung im Betrieb.'],
])}`,
});

/* ---------------- Lieferantenaudit-Checkliste ---------------- */
const faqA = [
  {
    q: 'Was ist ein Lieferantenaudit?',
    a: 'Ein Lieferantenaudit ist die systematische Überprüfung eines Lieferanten vor Ort oder remote — hinsichtlich Qualitätsmanagement, Prozessfähigkeit, Rückverfolgbarkeit, Kapazität und Compliance. Es geht über die reine Dokumentenprüfung hinaus und schaut auf die gelebte Praxis.',
  },
  {
    q: 'Wie lange dauert ein Lieferantenaudit?',
    a: 'Ein fokussiertes Audit bei einem mittelständischen Lieferanten dauert typischerweise einen halben bis einen Tag vor Ort, plus etwa einen halben Tag Vorbereitung und einen halben Tag Nachbereitung. Remote-Audits sind kürzer, ersetzen aber den Rundgang durch die Produktion nicht vollständig.',
  },
  {
    q: 'Wer führt das Audit durch?',
    a: 'Im Mittelstand meist die Qualitätssicherung gemeinsam mit dem Einkauf. Fachliche Tiefe kommt aus der QS, kaufmännischer Kontext und Beziehungspflege aus dem Einkauf. Bei technisch anspruchsvollen Teilen sollte die Fachabteilung mit.',
  },
  {
    q: 'Was passiert nach dem Audit?',
    a: 'Ein Auditbericht mit klassifizierten Feststellungen (kritisch / Hauptabweichung / Nebenabweichung / Hinweis), ein vom Lieferanten erstellter Maßnahmenplan mit Terminen und Verantwortlichen, sowie eine Nachverfolgung. Ohne Nachverfolgung ist das Audit nur eine teure Betriebsbesichtigung.',
  },
];

export const guideAudit = article({
  lang: 'de',
  path: '/de/ratgeber/lieferantenaudit-checkliste/',
  title: 'Lieferantenaudit: Ablauf, Fragenkatalog & Checkliste | NexSource',
  h1: 'Lieferantenaudit: Ablauf, Fragenkatalog und Checkliste',
  description:
    'Lieferantenaudit richtig durchführen: Vorbereitung, Ablaufplan für den Audittag, Fragenkatalog nach Themenblöcken und Maßnahmenverfolgung.',
  keywords: 'Lieferantenaudit, Lieferantenaudit Checkliste, Auditfragenkatalog Lieferant, Lieferantenaudit Ablauf, Lieferantenaudit Vorlage',
  crumbs: [['/de/ratgeber/', 'Ratgeber'], ['/de/ratgeber/lieferantenaudit-checkliste/', 'Lieferantenaudit-Checkliste']],
  schema: [faqSchema(faqA)],
  body: `
${hero({
  lang: 'de',
  eyebrow: 'Checkliste · Lesezeit ca. 8 Min.',
  h1: 'Lieferantenaudit: Ablauf, Fragenkatalog und Checkliste',
  lead: 'Von der Vorbereitung über den Audittag bis zur Maßnahmenverfolgung — inklusive eines Fragenkatalogs, den Sie direkt übernehmen können.',
})}
${prose(`
${answerBox('<strong>Kurz gesagt:</strong> Ein gutes Lieferantenaudit besteht zu einem Drittel aus Vorbereitung, zu einem Drittel aus dem Termin und zu einem Drittel aus der Nachverfolgung. Der häufigste Fehler ist, das letzte Drittel wegzulassen — dann ist das Audit dokumentierte Beschäftigung ohne Wirkung.')}

${toc('de', [
  ['wann', 'Wann ein Audit sinnvoll ist'],
  ['vorbereitung', 'Vorbereitung: zwei Wochen vorher'],
  ['ablauf', 'Ablauf des Audittags'],
  ['fragen', 'Fragenkatalog nach Themenblöcken'],
  ['bewertung', 'Feststellungen klassifizieren'],
  ['nachbereitung', 'Nachbereitung und Maßnahmenverfolgung'],
])}

<h2 id="wann">Wann ein Audit sinnvoll ist</h2>
<ul>
  <li><strong>Vor der Aufnahme</strong> eines kritischen oder Single-Source-Lieferanten.</li>
  <li><strong>Turnusmäßig</strong> bei kritischen Lieferanten, je nach Branche alle ein bis drei Jahre.</li>
  <li><strong>Anlassbezogen</strong> nach gehäuften Reklamationen, einem Qualitätsvorfall oder einem Eigentümerwechsel beim Lieferanten.</li>
  <li><strong>Auf Kundenanforderung</strong>, wenn Ihr eigener Großkunde Nachweise über die Prüfung Ihrer Vorlieferanten verlangt.</li>
</ul>
${callout('<strong>Kein Audit ohne Anlass</strong><p>Ein Audit bindet auf beiden Seiten Ressourcen. Bei unkritischen Lieferanten reicht eine Selbstauskunft plus Zertifikatsprüfung — sparen Sie die Vor-Ort-Termine für die Lieferanten auf, bei denen ein Ausfall wirklich wehtut.</p>')}

<h2 id="vorbereitung">Vorbereitung: zwei Wochen vorher</h2>
<ol>
  <li><strong>Ziel festlegen.</strong> Systemaudit (QM-System), Prozessaudit (ein konkreter Fertigungsprozess) oder Produktaudit (ein Teil)? Das entscheidet über den Fragenkatalog.</li>
  <li><strong>Unterlagen anfordern:</strong> QM-Handbuch oder Prozessbeschreibungen, aktuelle Zertifikate, Organigramm, Reklamationsstatistik der letzten 12 Monate, Prüfpläne.</li>
  <li><strong>Eigene Historie sichten:</strong> Liefertreue, Reklamationen, offene Punkte aus dem letzten Audit, aktuelle <a href="/de/lieferantenbewertung/">Bewertung</a>.</li>
  <li><strong>Agenda versenden</strong> — mit Themen, Zeitfenstern und den Personen, die Sie sprechen möchten. Ein Audit ohne vorab benannte Gesprächspartner verliert am Tag selbst Stunden.</li>
  <li><strong>Auditteam festlegen:</strong> QS führt, Einkauf begleitet, bei technischen Themen die Fachabteilung.</li>
</ol>

<h2 id="ablauf">Ablauf des Audittags</h2>
${table(
  ['Zeit', 'Inhalt'],
  [
    ['09:00', 'Eröffnungsgespräch: Ziel, Umfang, Ablauf, Vertraulichkeit'],
    ['09:30', 'Unternehmens- und Organisationsvorstellung durch den Lieferanten'],
    ['10:00', 'Dokumentenprüfung: QM-System, Zertifikate, Prüfpläne, Lenkung von Dokumenten'],
    ['11:00', 'Rundgang Produktion: Sauberkeit, Ordnung, Kennzeichnung, Rückverfolgbarkeit, Prüfmittel'],
    ['12:30', 'Pause'],
    ['13:15', 'Prozessvertiefung: ein konkretes Teil von der Bestellung bis zum Versand nachverfolgen'],
    ['14:30', 'Reklamations- und Korrekturmaßnahmenprozess an realen Fällen prüfen'],
    ['15:15', 'Interne Abstimmung im Auditteam'],
    ['15:45', 'Abschlussgespräch: Feststellungen benennen, nächste Schritte und Fristen vereinbaren'],
  ]
)}
${callout('<strong>Der wichtigste Programmpunkt</strong><p>Die Prozessvertiefung um 13:15 Uhr. Ein konkretes Teil rückwärts nachzuverfolgen — vom Versandprotokoll über die Prüfaufzeichnung und den Fertigungsauftrag bis zum Wareneingang des Rohmaterials — deckt mehr auf als jede Dokumentenprüfung. Wenn die Kette hier reißt, ist die Rückverfolgbarkeit nur auf dem Papier vorhanden.</p>', 'ok')}

<h2 id="fragen">Fragenkatalog nach Themenblöcken</h2>
<h3>Qualitätsmanagement</h3>
<ul>
  <li>Welche Zertifizierungen liegen vor, mit welcher Gültigkeit, und wann war das letzte Überwachungsaudit?</li>
  <li>Wer ist Qualitätsverantwortlicher, und an wen berichtet diese Person?</li>
  <li>Wie werden Kundenanforderungen und Spezifikationen in interne Prüfvorgaben überführt?</li>
  <li>Wie werden Dokumente und Aufzeichnungen gelenkt — wie erkennt ein Mitarbeitender die gültige Fassung?</li>
</ul>
<h3>Prozess und Fertigung</h3>
<ul>
  <li>Gibt es dokumentierte Prozessbeschreibungen, und liegen sie am Arbeitsplatz vor?</li>
  <li>Wie werden Prüfmittel überwacht und kalibriert? Bitte zeigen Sie zwei aktuelle Nachweise.</li>
  <li>Wie werden Prozessparameter überwacht, und was passiert bei Abweichung?</li>
  <li>Wie wird sichergestellt, dass fehlerhafte Ware nicht weiterverarbeitet oder versendet wird?</li>
</ul>
<h3>Rückverfolgbarkeit</h3>
<ul>
  <li>Bis auf welche Ebene ist ein Los rückverfolgbar — Charge, Schicht, Maschine?</li>
  <li>Wie lange dauert eine Rückverfolgung in der Praxis? Bitte einmal an einem realen Beispiel vorführen.</li>
  <li>Wie würde ein Rückruf ablaufen, und wann wurde er zuletzt geprobt?</li>
</ul>
<h3>Kapazität und Versorgungssicherheit</h3>
<ul>
  <li>Wie hoch ist die aktuelle Auslastung, und welche Reserve besteht für Mehrbedarf?</li>
  <li>Welche Ihrer eigenen Vorlieferanten sind Single Source?</li>
  <li>Welche Notfallpläne bestehen bei Maschinenausfall, Rohstoffengpass oder Personalausfall?</li>
  <li>Wie hoch ist der Umsatzanteil, den wir als Kunde bei Ihnen ausmachen?</li>
</ul>
<h3>Compliance und Lieferkette</h3>
<ul>
  <li>Wie qualifizieren und überwachen Sie Ihre eigenen Vorlieferanten?</li>
  <li>Führen Sie Sanktionslistenprüfungen durch, und wie werden sie dokumentiert?</li>
  <li>Existiert ein Verhaltenskodex, und wie wird er an Vorlieferanten weitergegeben?</li>
  <li>Gibt es ein Hinweisgebersystem, und wer bearbeitet eingehende Meldungen?</li>
</ul>
<h3>Reklamationen und Verbesserung</h3>
<ul>
  <li>Wie viele Reklamationen gab es in den letzten zwölf Monaten, und wie ist der Trend?</li>
  <li>Bitte zeigen Sie eine abgeschlossene Reklamation vollständig: Ursachenanalyse, Sofortmaßnahme, Abstellmaßnahme, Wirksamkeitsprüfung.</li>
  <li>Wie wird die Wirksamkeit von Korrekturmaßnahmen belegt?</li>
</ul>

<h2 id="bewertung">Feststellungen klassifizieren</h2>
${table(
  ['Klasse', 'Definition', 'Frist'],
  [
    ['Kritisch', 'Unmittelbares Risiko für Produktsicherheit, Legalität oder Versorgung', 'Sofortmaßnahme binnen 48 Stunden, Lieferstopp prüfen'],
    ['Hauptabweichung', 'Systematischer Mangel, Anforderung nicht erfüllt', 'Maßnahmenplan binnen 14 Tagen, Umsetzung 90 Tage'],
    ['Nebenabweichung', 'Einzelfall ohne Systemcharakter', 'Umsetzung bis zum nächsten Audit'],
    ['Hinweis', 'Verbesserungspotenzial ohne Anforderungsverstoß', 'freiwillig'],
  ]
)}

<h2 id="nachbereitung">Nachbereitung und Maßnahmenverfolgung</h2>
<ol>
  <li><strong>Auditbericht binnen fünf Arbeitstagen</strong> versenden — je später, desto geringer die Wirkung.</li>
  <li><strong>Maßnahmenplan vom Lieferanten einfordern</strong>, mit Verantwortlichem und Termin je Feststellung.</li>
  <li><strong>Wirksamkeit prüfen</strong>, nicht nur die Umsetzung. „Schulung durchgeführt" ist keine Wirksamkeit — sinkende Fehlerquote schon.</li>
  <li><strong>Ergebnis in die Lieferantenakte</strong> übernehmen und mit der <a href="/de/lieferantenbewertung/">Bewertung</a> verknüpfen.</li>
  <li><strong>Wiedervorlage setzen</strong> für offene Punkte und das nächste turnusmäßige Audit.</li>
</ol>
<p>Genau an Punkt 4 und 5 scheitert es in der Praxis am häufigsten: Der Bericht liegt in einem Ordner, die Wiedervorlage steht in keinem Kalender. In <a href="/de/lieferantenmanagement-software/">NexSource</a> hängen Auditunterlagen, Zertifikate mit Fristen und die Bewertung am selben Lieferantendatensatz — mit automatischer Erinnerung, bevor etwas ausläuft.</p>
`)}
${faqHtml('de', faqA)}
${relatedHtml('de', [
  ['/de/ratgeber/lieferantenqualifizierung/', 'Lieferantenqualifizierung', 'Der Prüfprozess, der vor dem Audit kommt.'],
  ['/de/lieferantenbewertung/', 'Lieferantenbewertung', 'Auditergebnisse in eine laufende Bewertung überführen.'],
  ['/de/lksg-software/', 'LkSG für Zulieferer', 'Wenn Ihr Großkunde Nachweise über Ihre Vorlieferanten verlangt.'],
])}`,
});
