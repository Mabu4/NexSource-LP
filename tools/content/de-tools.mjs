import { faqSchema, faqHtml, relatedHtml, softwareSchema, SITE, APP } from '../layout.mjs';
import { hero, prose, table, callout, toc, answerBox } from '../blocks.mjs';

const M = ['14 Tage kostenlos', 'Keine Kreditkarte nötig', 'Unbegrenzte Nutzer', 'EU-Hosting, DSGVO-konform'];

const CRITERIA_DE = [
  ['Liefertreue', 'Termine eingehalten, Mengen vollständig', 25],
  ['Qualität', 'Reklamationsquote, Spezifikationstreue', 25],
  ['Preis & Konditionen', 'Preisniveau, Zahlungsziel, Preisstabilität', 15],
  ['Kommunikation', 'Erreichbarkeit, Reaktionszeit, Proaktivität', 10],
  ['Flexibilität', 'Umgang mit Mengen- und Terminänderungen', 10],
  ['Problemlösung', 'Reaktion bei Reklamationen und Störungen', 10],
  ['Nachweise & Compliance', 'Zertifikate aktuell, Auskünfte vollständig', 5],
];

function scorecard(lang, criteria) {
  const de = lang === 'de';
  return `<div class="tool" id="scorecard">
  <h2>${de ? 'Lieferantenbewertung berechnen' : 'Calculate a supplier score'}</h2>
  <p class="tool-sub">${
    de
      ? 'Gewichtete Bewertung nach sieben Standardkriterien. Bewegen Sie die Regler, der Gesamtscore aktualisiert sich sofort. Export als CSV für Excel.'
      : 'Weighted evaluation across seven standard criteria. Move the sliders and the total updates instantly. Export as CSV for Excel.'
  }</p>
  <div class="field">
    <label for="score-supplier">${de ? 'Lieferant (optional)' : 'Supplier (optional)'}</label>
    <input type="text" id="score-supplier" placeholder="${de ? 'z. B. Müller GmbH' : 'e.g. Acme Ltd'}" />
  </div>
  <div class="score-grid">
${criteria
  .map(
    ([name, hint, weight]) => `    <div class="score-row" data-weight="${weight}" data-name="${name}">
      <div class="crit">${name} <small>${hint} · ${de ? 'Gewichtung' : 'Weight'} ${weight}%</small></div>
      <input type="range" min="1" max="10" value="7" aria-label="${name}" />
      <output>7</output>
    </div>`
  )
  .join('\n')}
  </div>
  <div class="score-total">
    <div>
      <div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.07em;color:var(--text-soft)">${de ? 'Gesamtscore' : 'Total score'}</div>
      <div id="score-verdict" style="font-size:.9375rem;color:var(--text-muted)"></div>
    </div>
    <div class="big"><span id="score-total">70</span><span style="font-size:1rem;color:var(--text-soft)"> / 100</span></div>
  </div>
  <div class="score-actions">
    <button type="button" class="btn btn-secondary" id="score-csv">${de ? 'Als CSV herunterladen' : 'Download as CSV'}</button>
    <a href="${APP}" class="btn btn-primary" data-cta="trial-tool">${
      de ? 'Bewertungen dauerhaft speichern' : 'Store evaluations permanently'
    }</a>
  </div>
</div>`;
}

/* ============================================================
   Lieferantenbewertung (Money-Page + kostenloser Rechner)
   ============================================================ */
const faqB = [
  {
    q: 'Welche Kriterien gehören in eine Lieferantenbewertung?',
    a: 'Bewährt hat sich eine Kombination aus harten und weichen Kriterien: Liefertreue, Qualität und Preis als Kern, ergänzt um Kommunikation, Flexibilität, Problemlösung und Nachweisführung. Wichtig ist weniger die exakte Auswahl als die Konstanz — nur wenn Sie über Jahre gleich bewerten, werden Entwicklungen sichtbar.',
  },
  {
    q: 'Wie oft sollte man Lieferanten bewerten?',
    a: 'A-Lieferanten mindestens jährlich, besser halbjährlich. B- und C-Lieferanten jährlich oder anlassbezogen nach einer Störung. Häufiger zu bewerten bringt selten neue Erkenntnisse, seltener macht die Bewertung wertlos.',
  },
  {
    q: 'Wie gewichtet man die Kriterien richtig?',
    a: 'Die Gewichtung muss zu Ihrem Geschäft passen. In der Just-in-time-Fertigung dominiert Liefertreue, im Lebensmittelbereich Qualität und Zertifizierung, im Handel oft der Preis. Als Startpunkt funktioniert 25/25/15 auf Liefertreue, Qualität und Preis, der Rest auf weiche Kriterien — genau so ist der Rechner auf dieser Seite voreingestellt.',
  },
  {
    q: 'Ist eine Lieferantenbewertung nach ISO 9001 Pflicht?',
    a: 'ISO 9001 verlangt in Abschnitt 8.4, dass Sie externe Anbieter nach festgelegten Kriterien bewerten, auswählen, überwachen und die Ergebnisse dokumentieren. Wie Sie das methodisch umsetzen, bleibt Ihnen überlassen — nachweisen müssen Sie es aber. Genau daran scheitern viele Audits.',
  },
  {
    q: 'Was macht man mit dem Ergebnis?',
    a: 'Die Bewertung ist kein Selbstzweck. Aus ihr folgen drei mögliche Konsequenzen: strategisch ausbauen, gezielt entwickeln (mit vereinbarten Maßnahmen und Wiedervorlage) oder eine Alternative aufbauen. Eine Bewertung ohne abgeleitete Maßnahme ist verschwendete Arbeit.',
  },
];

export const lieferantenbewertung = {
  lang: 'de',
  path: '/de/lieferantenbewertung/',
  altPath: '/supplier-evaluation/',
  title: 'Lieferantenbewertung: Kriterien + Rechner | NexSource',
  description:
    'Lieferanten objektiv bewerten: gewichtete Kriterien, kostenloser Rechner mit CSV-Export für Excel und was ISO 9001 8.4 wirklich verlangt.',
  keywords:
    'Lieferantenbewertung, Lieferantenbewertung Kriterien, Lieferantenbewertung Vorlage, Lieferantenbewertung Excel, Lieferantenscorecard, ISO 9001 Lieferantenbewertung',
  crumbs: [['/de/lieferantenbewertung/', 'Lieferantenbewertung']],
  schema: [
    softwareSchema('de'),
    faqSchema(faqB),
    {
      '@type': 'WebApplication',
      name: 'Lieferantenbewertungs-Rechner',
      url: SITE + '/de/lieferantenbewertung/',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
  ],
  extraScript: '\n    <script src="/tool-ui.js"></script>',
  body: `
${hero({
  lang: 'de',
  eyebrow: 'Lieferantenbewertung',
  h1: 'Lieferantenbewertung: Kriterien, Gewichtung und kostenloser Rechner',
  lead: 'Bewerten Sie Lieferanten nach nachvollziehbaren Kriterien statt nach Bauchgefühl. Nutzen Sie den Rechner unten kostenlos — inklusive CSV-Export für Excel.',
  ctaPrimary: { href: '#rechner', label: 'Zum kostenlosen Rechner', cta: 'tool-hero' },
  meta: ['Kostenlos, ohne Anmeldung', 'Läuft im Browser', 'CSV-Export für Excel'],
})}
      <section class="section" id="rechner">
        <div class="container">
${scorecard('de', CRITERIA_DE)}
        </div>
      </section>
${prose(`
${answerBox('<strong>Kurz gesagt:</strong> Eine Lieferantenbewertung ist die regelmäßige, kriterienbasierte Beurteilung Ihrer Lieferanten. ISO 9001 verlangt sie in Abschnitt 8.4. Praktisch nützlich wird sie erst, wenn die Kriterien gewichtet, über Jahre konstant und mit konkreten Maßnahmen verknüpft sind.')}

${toc('de', [
  ['warum', 'Warum bewerten — über die Norm hinaus'],
  ['kriterien', 'Die sieben Standardkriterien'],
  ['gewichtung', 'Gewichtung nach Branche'],
  ['skala', 'Bewertungsskala und Datenquellen'],
  ['abc', 'Von der Note zur Entscheidung'],
  ['fehler', 'Fünf häufige Fehler'],
  ['iso', 'Was ISO 9001 tatsächlich verlangt'],
])}

<h2 id="warum">Warum bewerten — über die Norm hinaus</h2>
<p>Viele Unternehmen bewerten Lieferanten, weil ein Auditor es verlangt. Das führt zu Bewertungen, die einmal im Jahr in einer Excel-Datei entstehen und danach niemanden interessieren. Der eigentliche Nutzen liegt woanders:</p>
<ul>
  <li><strong>Frühwarnsystem.</strong> Ein Lieferant, dessen Liefertreue über drei Quartale von 9 auf 6 fällt, hat ein Problem — Sie sehen es, bevor die Produktion steht.</li>
  <li><strong>Verhandlungsgrundlage.</strong> „Ihre Reklamationsquote liegt bei 4,2 %, Ihr Wettbewerber bei 1,1 %" ist ein anderes Gespräch als „wir sind unzufrieden".</li>
  <li><strong>Objektivierung.</strong> Bewertung verhindert, dass ein einzelner Vorfall die Beziehung zu einem sonst starken Lieferanten überschattet — oder umgekehrt.</li>
  <li><strong>Nachfolge.</strong> Wenn Wissen über Lieferanten dokumentiert ist, ist ein Personalwechsel im Einkauf kein Risiko mehr.</li>
</ul>

<h2 id="kriterien">Die sieben Standardkriterien</h2>
${table(
  ['Kriterium', 'Was gemessen wird', 'Datenquelle'],
  [
    ['Liefertreue', 'Termintreue und Mengentreue je Bestellung', 'Bestellhistorie: Soll- vs. Ist-Liefertermin'],
    ['Qualität', 'Reklamationsquote, Spezifikationsabweichungen', 'QS-Meldungen, Wareneingangsprüfung'],
    ['Preis & Konditionen', 'Preisniveau im Wettbewerbsvergleich, Zahlungsziel, Preisstabilität', 'Angebotsvergleich, Preishistorie'],
    ['Kommunikation', 'Erreichbarkeit, Reaktionszeit, proaktive Information bei Verzug', 'Erfahrungswert Einkauf'],
    ['Flexibilität', 'Umgang mit kurzfristigen Mengen- und Terminänderungen', 'Erfahrungswert Disposition'],
    ['Problemlösung', 'Verhalten bei Reklamationen: Ursachenanalyse, Abstellmaßnahmen', 'Reklamationsvorgänge'],
    ['Nachweise & Compliance', 'Zertifikate aktuell, Selbstauskünfte vollständig und pünktlich', 'Lieferantenakte'],
  ]
)}

<h2 id="gewichtung">Gewichtung nach Branche</h2>
<p>Die Gewichtung entscheidet über die Aussagekraft. Vier bewährte Profile:</p>
${table(
  ['Branche', 'Schwerpunkt', 'Typische Gewichtung'],
  [
    ['Serienfertigung / JIT', 'Liefertreue dominiert — ein Stillstand kostet mehr als jeder Preisvorteil', 'Liefertreue 35 %, Qualität 30 %, Preis 10 %'],
    ['Lebensmittel', 'Qualität und Nachweise sind existenziell', 'Qualität 35 %, Nachweise 20 %, Liefertreue 20 %'],
    ['Handel / Import', 'Preis und Verfügbarkeit', 'Preis 30 %, Liefertreue 25 %, Qualität 20 %'],
    ['Projektgeschäft / Bau', 'Flexibilität und Problemlösung', 'Flexibilität 25 %, Problemlösung 20 %, Termintreue 25 %'],
  ]
)}
${callout('<strong>Wichtig</strong><p>Ändern Sie die Gewichtung nicht jährlich. Sonst vergleichen Sie Äpfel mit Birnen und der wertvollste Teil der Bewertung — der Zeitverlauf — geht verloren.</p>')}

<h2 id="skala">Bewertungsskala und Datenquellen</h2>
<p>Eine Skala von 1–10 hat sich durchgesetzt, weil sie fein genug für Veränderungen und grob genug für schnelle Einschätzungen ist. Entscheidend ist, dass die Skala <strong>definiert</strong> ist. Ohne Definition bewertet jede Person anders:</p>
${table(
  ['Wert', 'Bedeutung', 'Beispiel Liefertreue'],
  [
    ['9–10', 'Übertrifft Erwartungen', '≥ 98 % termingerecht'],
    ['7–8', 'Erfüllt Erwartungen', '92–97 % termingerecht'],
    ['5–6', 'Teilweise mangelhaft, Maßnahmen nötig', '85–91 % termingerecht'],
    ['3–4', 'Deutlich mangelhaft', '70–84 % termingerecht'],
    ['1–2', 'Nicht akzeptabel', '< 70 % termingerecht'],
  ]
)}
<p>Harte Kriterien sollten aus Daten kommen, nicht aus Erinnerung. Wenn Ihre Bestellungen in einem System mit Statushistorie laufen, lässt sich Liefertreue direkt ableiten — das ist einer der Gründe, warum sich <a href="/de/einkaufssoftware-mittelstand/">strukturierte Bestellprozesse</a> und belastbare Bewertung gegenseitig bedingen.</p>

<h2 id="abc">Von der Note zur Entscheidung</h2>
<p>Der Score allein ändert nichts. Legen Sie vorab fest, was aus welchem Ergebnis folgt:</p>
${table(
  ['Score', 'Einstufung', 'Konsequenz'],
  [
    ['85–100', 'A-Lieferant', 'Strategisch ausbauen, Volumen bündeln, Rahmenvertrag prüfen'],
    ['70–84', 'B-Lieferant', 'Solide. Ein bis zwei konkrete Entwicklungsziele vereinbaren'],
    ['50–69', 'C-Lieferant', 'Maßnahmenplan mit Frist, Wiedervorlage nach sechs Monaten'],
    ['unter 50', 'Risiko', 'Zweitquelle aufbauen, Abhängigkeit aktiv reduzieren'],
  ]
)}

<h2 id="fehler">Fünf häufige Fehler</h2>
<ol>
  <li><strong>Nur einmal jährlich, nur für das Audit.</strong> Die Bewertung entsteht im Dezember aus dem Gedächtnis und ist wertlos.</li>
  <li><strong>Alle Kriterien gleich gewichtet.</strong> Dann kompensiert ein guter Preis eine miserable Liefertreue — betriebswirtschaftlich meist falsch.</li>
  <li><strong>Nur eine Person bewertet.</strong> Qualität gehört zur QS, Liefertreue zur Disposition, Konditionen zum Einkauf. Bewertung ist Teamarbeit.</li>
  <li><strong>Keine Rückmeldung an den Lieferanten.</strong> Ein Lieferant, der seine Bewertung nie sieht, kann sich nicht verbessern. Das Feedbackgespräch ist der eigentliche Hebel.</li>
  <li><strong>Keine Historie.</strong> Ohne Vorjahresvergleich sehen Sie Niveau, aber keine Entwicklung — und Entwicklung ist die interessantere Information.</li>
</ol>

<h2 id="iso">Was ISO 9001 tatsächlich verlangt</h2>
<p>ISO 9001:2015 Abschnitt 8.4.1 verlangt, dass Sie Kriterien für Bewertung, Auswahl, Überwachung der Leistung und Neubewertung externer Anbieter festlegen und anwenden — und dass Sie die Ergebnisse sowie daraus entstehende notwendige Maßnahmen dokumentiert aufbewahren.</p>
<p>Drei Dinge müssen also nachweisbar sein: <strong>festgelegte Kriterien</strong>, <strong>angewandte Bewertung</strong> und <strong>abgeleitete Maßnahmen</strong>. Der Rechner auf dieser Seite deckt den zweiten Punkt ab. Für die dauerhafte Dokumentation mit Historie, Verantwortlichkeiten und Wiedervorlage brauchen Sie ein System — genau dafür gibt es die Lieferantenbewertung in <a href="/de/lieferantenmanagement-software/">NexSource</a>.</p>
`)}
${faqHtml('de', faqB)}
${relatedHtml('de', [
  ['/de/lieferantenmanagement-software/', 'Lieferantenmanagement-Software', 'Bewertungen dauerhaft speichern, mit Historie und Verantwortlichkeit.'],
  ['/de/ratgeber/lieferantenaudit-checkliste/', 'Lieferantenaudit-Checkliste', 'Der nächste Schritt nach der Bewertung: das strukturierte Audit.'],
  ['/de/lieferantenportal/', 'Lieferantenportal', 'Nachweise und Stammdaten kommen direkt vom Lieferanten.'],
])}`,
};

/* ============================================================
   USt-IdNr. prüfen (kostenloses Tool)
   ============================================================ */
const faqV = [
  {
    q: 'Was ist eine Umsatzsteuer-Identifikationsnummer?',
    a: 'Die USt-IdNr. ist eine EU-weit eindeutige Kennung für Unternehmen, die am innergemeinschaftlichen Waren- und Dienstleistungsverkehr teilnehmen. Sie unterscheidet sich von der Steuernummer des Finanzamts. In Deutschland beginnt sie mit „DE" und hat neun Ziffern.',
  },
  {
    q: 'Warum muss ich die USt-IdNr. meines Geschäftspartners prüfen?',
    a: 'Für eine steuerfreie innergemeinschaftliche Lieferung ist die gültige USt-IdNr. des Abnehmers eine materielle Voraussetzung. Ist sie zum Lieferzeitpunkt ungültig, kann das Finanzamt die Steuerfreiheit versagen — die Umsatzsteuer bleibt dann an Ihnen hängen. Deshalb gehört die Prüfung ins Onboarding und sollte bei laufenden Geschäftsbeziehungen wiederholt werden.',
  },
  {
    q: 'Was prüft dieses Tool — und was nicht?',
    a: 'Dieses Tool prüft offline im Browser den länderspezifischen Aufbau und, wo ein veröffentlichtes Verfahren existiert, die Prüfziffer. Es erkennt damit Tippfehler und erfundene Nummern zuverlässig. Es kann jedoch nicht feststellen, ob die Nummer tatsächlich vergeben und aktuell gültig ist — dafür ist die Abfrage im EU-VIES-System bzw. beim Bundeszentralamt für Steuern erforderlich.',
  },
  {
    q: 'Was ist eine qualifizierte Bestätigungsabfrage?',
    a: 'Bei der einfachen Abfrage erfahren Sie nur, ob die Nummer gültig ist. Bei der qualifizierten Abfrage (in Deutschland über das Bundeszentralamt für Steuern) wird zusätzlich abgeglichen, ob Name, Ort, Postleitzahl und Straße zur Nummer passen. Für die Nachweisführung gegenüber dem Finanzamt ist die qualifizierte Abfrage mit dokumentiertem Ergebnis der sichere Weg.',
  },
  {
    q: 'Wie oft sollte man prüfen?',
    a: 'Vor der ersten steuerfreien Lieferung in jedem Fall, danach in regelmäßigen Abständen — bei laufenden Geschäftsbeziehungen ist eine wiederkehrende Prüfung üblich. Entscheidend ist, dass Sie das Ergebnis mit Datum dokumentieren.',
  },
  {
    q: 'Werden meine Eingaben gespeichert?',
    a: 'Nein. Die Prüfung läuft vollständig in Ihrem Browser. Es wird keine Anfrage an einen Server gesendet, es werden keine Daten gespeichert und es werden keine Cookies gesetzt.',
  },
];

export const ustIdPruefen = {
  lang: 'de',
  path: '/de/ust-idnr-pruefen/',
  altPath: '/vat-number-validator/',
  title: 'USt-IdNr. prüfen — kostenloses Tool für alle EU-Länder | NexSource',
  description:
    'Umsatzsteuer-Identifikationsnummer kostenlos prüfen: Format und Prüfziffer für alle EU-Staaten, direkt im Browser, ohne Anmeldung und ohne Datenübertragung.',
  keywords:
    'USt-IdNr prüfen, Umsatzsteuer-Identifikationsnummer prüfen, USt-ID Prüfung, VIES Abfrage, Umsatzsteuer ID validieren, qualifizierte Bestätigungsabfrage',
  crumbs: [['/de/ust-idnr-pruefen/', 'USt-IdNr. prüfen']],
  schema: [
    faqSchema(faqV),
    {
      '@type': 'WebApplication',
      name: 'USt-IdNr.-Prüfer',
      url: SITE + '/de/ust-idnr-pruefen/',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      description: 'Kostenlose Format- und Prüfziffernprüfung für Umsatzsteuer-Identifikationsnummern aller EU-Mitgliedstaaten.',
    },
  ],
  extraScript: '\n    <script src="/vat.js"></script>\n    <script src="/tool-ui.js"></script>',
  body: `
${hero({
  lang: 'de',
  eyebrow: 'Kostenloses Tool',
  h1: 'USt-IdNr. prüfen',
  lead: 'Prüfen Sie Umsatzsteuer-Identifikationsnummern aller EU-Mitgliedstaaten auf korrekten Aufbau und Prüfziffer — sofort, kostenlos und ohne Anmeldung. Die Prüfung läuft vollständig in Ihrem Browser.',
  ctaPrimary: { href: '#pruefen', label: 'Jetzt prüfen', cta: 'tool-hero' },
  meta: ['Alle 27 EU-Staaten + Nordirland', 'Keine Datenübertragung', 'Keine Cookies'],
})}
      <section class="section" id="pruefen">
        <div class="container">
          <form class="tool" id="vat-form">
            <h2>Umsatzsteuer-Identifikationsnummer prüfen</h2>
            <p class="tool-sub">Mit Länderkürzel eingeben, z. B. <code>DE136695976</code> oder <code>ATU13585627</code>. Leerzeichen und Punkte werden ignoriert.</p>
            <div class="field">
              <label for="vat-input">USt-IdNr.</label>
              <input type="text" id="vat-input" name="vat" autocomplete="off" spellcheck="false" placeholder="DE123456789" />
              <span class="hint">Die Prüfung erfolgt lokal im Browser. Es werden keine Daten übertragen.</span>
            </div>
            <button type="submit" class="btn btn-primary">Prüfen</button>
            <div class="tool-result" id="vat-result" hidden></div>
          </form>
        </div>
      </section>
${prose(`
${answerBox('<strong>Wichtig zu wissen:</strong> Eine Format- und Prüfziffernprüfung erkennt Tippfehler und erfundene Nummern. Ob eine Nummer tatsächlich vergeben und <em>aktuell gültig</em> ist, kann nur die offizielle Abfrage im EU-VIES-System oder beim Bundeszentralamt für Steuern beantworten. Für die Nachweisführung gegenüber dem Finanzamt brauchen Sie diese offizielle Abfrage — dokumentiert mit Datum.')}

${toc('de', [
  ['warum', 'Warum die Prüfung steuerlich relevant ist'],
  ['aufbau', 'Aufbau der USt-IdNr. je EU-Land'],
  ['vies', 'Einfache und qualifizierte Bestätigungsabfrage'],
  ['prozess', 'Prüfung im Lieferanten-Onboarding verankern'],
  ['fehler', 'Typische Fehlerquellen'],
])}

<h2 id="warum">Warum die Prüfung steuerlich relevant ist</h2>
<p>Bei einer innergemeinschaftlichen Lieferung von Deutschland in einen anderen EU-Mitgliedstaat kann die Lieferung umsatzsteuerfrei sein. Voraussetzung ist unter anderem, dass der Abnehmer eine gültige, von einem anderen Mitgliedstaat erteilte USt-IdNr. verwendet und dass Sie diese korrekt in der Zusammenfassenden Meldung erfassen.</p>
<p>Stellt sich später heraus, dass die Nummer zum Zeitpunkt der Lieferung ungültig war, kann die Steuerfreiheit versagt werden. Die Umsatzsteuer schulden dann Sie — nachträglich beim Kunden einzufordern gelingt selten. Deshalb ist die Prüfung kein bürokratischer Selbstzweck, sondern eine unmittelbar finanziell wirksame Kontrolle.</p>
${callout('<strong>Hinweis</strong><p>Diese Seite erklärt die Praxis allgemein verständlich und ersetzt keine steuerliche Beratung. Für die Beurteilung konkreter Sachverhalte wenden Sie sich bitte an Ihre Steuerberatung.</p>', 'warn')}

<h2 id="aufbau">Aufbau der USt-IdNr. je EU-Land</h2>
<p>Jeder Mitgliedstaat hat ein eigenes Format. Das Länderkürzel steht immer vorn:</p>
${table(
  ['Land', 'Kürzel', 'Aufbau', 'Beispiel'],
  [
    ['Deutschland', 'DE', '9 Ziffern', 'DE136695976'],
    ['Österreich', 'AT', 'U + 8 Zeichen', 'ATU13585627'],
    ['Niederlande', 'NL', '9 Ziffern + B + 2 Ziffern', 'NL123456782B12'],
    ['Belgien', 'BE', '10 Ziffern (beginnend mit 0 oder 1)', 'BE0776091951'],
    ['Frankreich', 'FR', '2 Zeichen + 9 Ziffern (SIREN)', 'FR40303265045'],
    ['Italien', 'IT', '11 Ziffern', 'IT00743110157'],
    ['Spanien', 'ES', '9 Zeichen mit Buchstaben', 'ESA12345674'],
    ['Polen', 'PL', '10 Ziffern', 'PL5260001246'],
    ['Schweden', 'SE', '12 Ziffern, endet auf 01', 'SE123456789701'],
    ['Dänemark', 'DK', '8 Ziffern', 'DK13585628'],
    ['Nordirland', 'XI', '9 oder 12 Ziffern', 'XI123456789'],
  ]
)}
<p>Das Tool oben kennt die Formate aller EU-Mitgliedstaaten sowie das Sonderkürzel XI für Nordirland und prüft zusätzlich die Prüfziffer, wo ein veröffentlichtes Verfahren existiert.</p>

<h2 id="vies">Einfache und qualifizierte Bestätigungsabfrage</h2>
${table(
  ['', 'Einfache Abfrage', 'Qualifizierte Abfrage'],
  [
    ['Antwort', 'Nummer gültig / ungültig', 'zusätzlich Abgleich von Name, Ort, PLZ, Straße'],
    ['Zuständig', 'EU-VIES-Portal', 'in Deutschland: Bundeszentralamt für Steuern'],
    ['Nachweiswert', 'begrenzt', 'für die Nachweisführung geeignet'],
    ['Empfehlung', 'für schnelle Zwischenprüfung', 'vor der ersten steuerfreien Lieferung und wiederkehrend'],
  ]
)}
<p>Wichtig ist in beiden Fällen die <strong>Dokumentation</strong>: Speichern Sie das Abfrageergebnis mit Datum. Eine Prüfung, die Sie nicht belegen können, hilft in der Betriebsprüfung nicht.</p>

<h2 id="prozess">Prüfung im Lieferanten-Onboarding verankern</h2>
<p>In der Praxis scheitert es selten am Wissen und fast immer am Prozess: Die Prüfung passiert einmal beim Anlegen, danach nie wieder, und dokumentiert wird sie gar nicht. Zwei Regeln helfen:</p>
<ol>
  <li><strong>Prüfen, bevor die erste Bestellung rausgeht</strong> — nicht, wenn die erste Rechnung kommt.</li>
  <li><strong>Ergebnis am Datensatz speichern</strong>, nicht im Postfach der Person, die geprüft hat.</li>
</ol>
<p>In <a href="/de/lieferantenmanagement-software/">NexSource</a> ist die VIES-Validierung Bestandteil der Lieferantensuche und des Onboardings: Jede gefundene oder angelegte Firma wird gegen VIES geprüft und zusätzlich gegen <a href="/de/sanktionslisten-pruefung/">EU-, OFAC- und UN-Sanktionslisten</a> abgeglichen. Das Ergebnis bleibt am Lieferanten dokumentiert.</p>

<h2 id="fehler">Typische Fehlerquellen</h2>
<ul>
  <li><strong>Steuernummer statt USt-IdNr.</strong> Die deutsche Steuernummer (z. B. 12/345/67890) ist etwas anderes und im EU-Handel nicht verwendbar.</li>
  <li><strong>Griechenland.</strong> Das Kürzel im Umsatzsteuerkontext ist <code>EL</code>, nicht <code>GR</code>. Das Tool oben akzeptiert beides.</li>
  <li><strong>Vereinigtes Königreich.</strong> Seit dem Brexit sind britische Nummern nicht mehr im VIES-System — Ausnahme ist Nordirland mit dem Präfix <code>XI</code>.</li>
  <li><strong>Zahlendreher.</strong> Genau dafür existieren Prüfziffern — das Tool oben erkennt solche Fehler sofort.</li>
  <li><strong>Veraltete Prüfung.</strong> Nummern können entzogen werden. Eine Prüfung von vor drei Jahren sagt über heute wenig aus.</li>
</ul>
`)}
${faqHtml('de', faqV)}
${relatedHtml('de', [
  ['/de/sanktionslisten-pruefung/', 'Sanktionslistenprüfung', 'Der zweite Pflichtcheck im Onboarding: EU-, OFAC- und UN-Listen.'],
  ['/de/lieferantenmanagement-software/', 'Lieferantenmanagement-Software', 'Prüfergebnisse dauerhaft am Lieferanten dokumentieren.'],
  ['/de/lieferantenbewertung/', 'Lieferantenbewertung', 'Kostenloser Rechner mit gewichteten Kriterien und CSV-Export.'],
])}`,
};
