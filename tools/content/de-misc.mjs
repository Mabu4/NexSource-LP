import { faqSchema, faqHtml, relatedHtml, softwareSchema, APP } from '../layout.mjs';
import { hero, prose, table, callout, toc, answerBox } from '../blocks.mjs';

const MAIL = 'info@getnexsource.com';
const MAIL_SUBJECT_DE = encodeURIComponent('Demo-Anfrage NexSource');
const MAIL_BODY_DE = encodeURIComponent(
  'Hallo,\n\nwir würden uns NexSource gerne einmal ansehen.\n\n' +
    'Unternehmen: \nBranche: \nAnzahl Lieferanten: \n' +
    'Worum es geht: \n\nViele Grüße\n'
);

/* ============================================================
   Vergleich: Excel vs. Lieferantenmanagement-Software
   ============================================================ */
const faqE = [
  {
    q: 'Ab wann reicht Excel für das Lieferantenmanagement nicht mehr?',
    a: 'Drei Schwellen sind typisch: mehr als eine Person pflegt die Daten, mehr als etwa 25 aktive Lieferanten, oder es existieren Nachweispflichten gegenüber Kunden und Auditoren. Sobald eine davon erfüllt ist, kostet Excel mehr Zeit, als es spart.',
  },
  {
    q: 'Können wir unsere Excel-Daten übernehmen?',
    a: 'Ja. Lieferanten lassen sich in NexSource anlegen und die vorhandenen Angaben übertragen. In der Praxis ist der pragmatischste Weg, mit den 20 wichtigsten Lieferanten zu starten und den Rest nach und nach zu ergänzen — nicht mit einer Migration aller Altdaten zu beginnen.',
  },
  {
    q: 'Ist Excel nicht billiger?',
    a: 'Nur in der Lizenzrechnung. Rechnen Sie den Zeitaufwand: Sechs Stunden im Monat für das Suchen und Abgleichen von Lieferantenunterlagen entsprechen bei 45 € Vollkosten rund 3.240 € im Jahr. Ein einziges übersehenes Zertifikat im Kundenaudit kann teurer sein als mehrere Jahre Softwarekosten.',
  },
  {
    q: 'Was, wenn wir schon ein ERP haben?',
    a: 'Die meisten ERP-Systeme führen Lieferantenstammdaten für die Buchhaltung, aber keine Zertifikatsfristen, keine Lieferantenbewertung und kein Lieferantenportal. NexSource ergänzt das ERP an dieser Stelle, statt es zu ersetzen.',
  },
];

export const vergleichExcel = {
  lang: 'de',
  path: '/de/vergleich/excel-vs-lieferantenmanagement-software/',
  title: 'Excel vs. Lieferantenmanagement-Software | NexSource',
  description:
    'Wann reicht Excel für das Lieferantenmanagement und wann wird es teuer? Direkter Vergleich mit Kostenrechnung, typischen Fehlerbildern und klaren Umstiegskriterien.',
  keywords:
    'Lieferantenmanagement Excel, Excel Alternative Lieferanten, Lieferantenliste Excel Vorlage, Lieferantenmanagement Software Vergleich',
  crumbs: [
    ['/de/vergleich/excel-vs-lieferantenmanagement-software/', 'Excel vs. Software'],
  ],
  schema: [softwareSchema('de'), faqSchema(faqE)],
  body: `
${hero({
  lang: 'de',
  eyebrow: 'Vergleich',
  h1: 'Excel oder Lieferantenmanagement-Software?',
  lead: 'Ein ehrlicher Vergleich — inklusive der Fälle, in denen Excel völlig ausreicht. Mit Kostenrechnung, typischen Fehlerbildern und drei klaren Umstiegssignalen.',
})}
${prose(`
${answerBox('<strong>Kurz gesagt:</strong> Excel ist völlig ausreichend, solange eine Person weniger als etwa 25 Lieferanten betreut und niemand Nachweise verlangt. Sobald ein zweiter Mensch mitpflegt, Zertifikatsfristen relevant werden oder Kunden Nachweise fordern, ist Excel der teurere Weg — nicht wegen der Lizenz, sondern wegen der Arbeitszeit und der Fehlerkosten.')}

${toc('de', [
  ['wann-excel', 'Wann Excel wirklich reicht'],
  ['tabelle', 'Der direkte Vergleich'],
  ['fehlerbilder', 'Fünf reale Fehlerbilder'],
  ['kosten', 'Was Excel tatsächlich kostet'],
  ['signale', 'Drei Signale für den Umstieg'],
  ['umstieg', 'Umstieg ohne Großprojekt'],
])}

<h2 id="wann-excel">Wann Excel wirklich reicht</h2>
<p>Fangen wir mit der unbequemen Seite an: Wenn Sie fünfzehn Lieferanten haben, allein einkaufen und niemand von Ihnen Nachweise verlangt, brauchen Sie keine Software. Eine gepflegte Tabelle ist dann schneller, flexibler und kostenlos. Wer Ihnen etwas anderes erzählt, verkauft.</p>
<p>Der Punkt ist nur: Dieser Zustand endet, und zwar meist ohne Ankündigung. Er endet, wenn eine zweite Person mitarbeitet, wenn der erste Großkunde eine Lieferantenselbstauskunft schickt, oder wenn im Audit die Frage kommt, wie Sie Ihre Lieferanten bewerten.</p>

<h2 id="tabelle">Der direkte Vergleich</h2>
${table(
  ['', 'Excel', 'NexSource'],
  [
    ['Anschaffung', '<span class="yes">bereits vorhanden</span>', 'ab 29 €/Monat'],
    ['Mehrere Bearbeiter gleichzeitig', '<span class="no">Versionskonflikte, „final_v3"</span>', '<span class="yes">ein Datenstand für alle</span>'],
    ['Zertifikatsfristen', '<span class="no">manuelle Wiedervorlage</span>', '<span class="yes">automatische Warnung 90/60/30 Tage</span>'],
    ['Änderungshistorie', '<span class="no">nicht vorhanden</span>', '<span class="yes">wer, wann, was</span>'],
    ['Rechte und Rollen', '<span class="no">alles oder nichts</span>', '<span class="yes">Owner / Manager / Member</span>'],
    ['Lieferant pflegt selbst', '<span class="no">nicht möglich</span>', '<span class="yes">Portal ohne Account</span>'],
    ['USt-IdNr.- & Sanktionsprüfung', '<span class="no">manuell, undokumentiert</span>', '<span class="yes">automatisch, dokumentiert</span>'],
    ['Bestellungen mit Freigabe', '<span class="no">per E-Mail</span>', '<span class="yes">Workflow mit Statushistorie</span>'],
    ['Auditfähigkeit', '<span class="no">Nachweise müssen gesucht werden</span>', '<span class="yes">Lieferantenakte auf Knopfdruck</span>'],
    ['Datensicherheit', 'lokale Datei, Backup ungewiss', '<span class="yes">EU-Hosting, verschlüsselt</span>'],
    ['Ausfall bei Personalwechsel', '<span class="no">Wissen geht mit</span>', '<span class="yes">Wissen bleibt im System</span>'],
  ]
)}

<h2 id="fehlerbilder">Fünf reale Fehlerbilder</h2>
<ol>
  <li><strong>Das abgelaufene Zertifikat.</strong> Ein IFS-Zertifikat war bis März gültig. Im Juni-Audit fällt es auf. Der Auditor notiert eine Abweichung, der Lieferant braucht drei Wochen für die Neuausstellung.</li>
  <li><strong>Die zwei Wahrheiten.</strong> Der Einkauf pflegt Liste A, die QS Liste B. Beim Zusammenführen stellt sich heraus, dass 30 % der Ansprechpartner in mindestens einer Liste veraltet sind.</li>
  <li><strong>Die Bestellung ohne Freigabe.</strong> 14.000 € Auftragswert. Zwei Monate später fragt die Geschäftsführung nach der Genehmigung. Der E-Mail-Thread ist im Archiv der ausgeschiedenen Kollegin.</li>
  <li><strong>Die geänderte Bankverbindung.</strong> Eine E-Mail meldet neue Kontodaten. Weil niemand prüft, geht die Zahlung an einen Betrüger. Dieser Schadensfall trifft den Mittelstand regelmäßig.</li>
  <li><strong>Der Personalwechsel.</strong> Die Einkäuferin geht. Ihr Wissen über Zweitquellen, Konditionen und Absprachen war nie dokumentiert. Die Einarbeitung dauert Monate.</li>
</ol>

<h2 id="kosten">Was Excel tatsächlich kostet</h2>
${table(
  ['Position', 'Annahme', 'Kosten pro Jahr'],
  [
    ['Suchen und Abgleichen von Unterlagen', '6 h/Monat × 45 €', '3.240 €'],
    ['Nachfordern abgelaufener Nachweise', '2 h/Monat × 45 €', '1.080 €'],
    ['Beantwortung einer Kundenselbstauskunft', '8 h je Anfrage, 3 Anfragen', '1.080 €'],
    ['<strong>Summe (ohne Schadensfälle)</strong>', '', '<strong>5.400 €</strong>'],
    ['NexSource Pro zum Vergleich', '89 €/Monat', '1.068 €'],
  ]
)}
${callout('<strong>Nicht eingerechnet</strong><p>Ein einziges Audit-Finding, eine Fehlbestellung oder eine Zahlung an eine gefälschte Bankverbindung übersteigt die jährlichen Softwarekosten in der Regel um ein Vielfaches. Diese Kosten treten selten auf — aber wenn, dann deutlich.</p>', 'warn')}

<h2 id="signale">Drei Signale für den Umstieg</h2>
<ol>
  <li><strong>Zwei Menschen pflegen dieselben Daten.</strong> Ab hier ist Versionschaos keine Frage des Ob, sondern des Wann.</li>
  <li><strong>Ein Kunde verlangt Nachweise.</strong> Die erste Lieferantenselbstauskunft eines Großkunden ist der klassische Auslöser — sie kommt mit einer Frist.</li>
  <li><strong>Etwas ist bereits schiefgegangen.</strong> Ein abgelaufenes Zertifikat, eine Bestellung ohne Freigabe, eine Reklamation ohne Historie. Das war kein Einzelfall, sondern ein Systemproblem.</li>
</ol>

<h2 id="umstieg">Umstieg ohne Großprojekt</h2>
<p>Der häufigste Grund, warum Unternehmen bei Excel bleiben, ist die Angst vor dem Migrationsprojekt. Diese Angst ist bei Konzernsoftware berechtigt und bei NexSource unbegründet:</p>
<ol>
  <li><strong>Tag 1:</strong> Workspace anlegen, Team einladen — Nutzer sind unbegrenzt.</li>
  <li><strong>Tag 1–2:</strong> Die 20 Lieferanten mit dem größten Volumen erfassen, Zertifikate mit Ablaufdatum hinterlegen. Damit ist das größte Risiko abgedeckt.</li>
  <li><strong>Woche 2:</strong> Portal-Links an diese Lieferanten senden — ab jetzt pflegen sie ihre Daten selbst.</li>
  <li><strong>Laufend:</strong> Jeder neue Lieferant entsteht direkt im System. Die Excel-Datei läuft aus, statt migriert zu werden.</li>
</ol>
<p>Genau dafür gibt es die 14 Tage kostenlos: Sie können den Schritt bis „Woche 2" vollständig testen, bevor Sie irgendetwas zahlen.</p>
`)}
${faqHtml('de', faqE)}
${relatedHtml('de', [
  ['/de/lieferantenmanagement-software/', 'Lieferantenmanagement-Software', 'Was das System im Detail abdeckt — und was es kostet.'],
  ['/de/lieferantenbewertung/', 'Lieferantenbewertung', 'Kostenloser Rechner mit CSV-Export — funktioniert auch mit Excel.'],
  ['/de/demo/', 'Demo anfragen', '20 Minuten, ohne Verkaufsdruck, an Ihrem Anwendungsfall entlang.'],
])}`,
};

/* ============================================================
   Demo-/Kontaktseite
   ============================================================ */
export const demoDe = {
  lang: 'de',
  path: '/de/demo/',
  altPath: '/demo/',
  title: 'Demo anfragen — 20 Minuten, ohne Pitch | NexSource',
  description:
    'Persönliche Demo von NexSource: 20 Minuten, kein Verkaufsdruck, konkret an Ihrem Lieferantenprozess entlang. Oder direkt 14 Tage kostenlos selbst testen.',
  crumbs: [['/de/demo/', 'Demo anfragen']],
  schema: [
    {
      '@type': 'ContactPage',
      name: 'Demo anfragen',
      url: 'https://getnexsource.com/de/demo/',
      mainEntity: {
        '@id': 'https://getnexsource.com/#organization',
        email: MAIL,
      },
    },
  ],
  cta: {
    title: 'Lieber gleich selbst ausprobieren?',
    text: 'Der Testzugang ist sofort verfügbar — ohne Gespräch, ohne Kreditkarte.',
  },
  body: `
      <section class="section section-narrow">
        <div class="container">
          <div class="contact-grid">
            <div>
              <span class="eyebrow">Demo</span>
              <h1 style="margin:.6rem 0 1rem;font-size:clamp(1.9rem,3vw,2.6rem)">Ihr Lieferantenprozess — in 20 Minuten in NexSource gezeigt.</h1>
              <p class="lead" style="margin-bottom:1.5rem">
                20 Minuten, per Videocall, ohne Folienschlacht. Wir gehen an einem Ihrer realen
                Lieferanten entlang: Stammdaten, Zertifikate, Bewertung, Bestellung. Wenn NexSource
                nicht passt, sagen wir Ihnen das.
              </p>
              <ul class="checks">
                <li>Kein Verkaufsdruck, keine Vertragsgespräche im ersten Termin</li>
                <li>Antwort innerhalb eines Werktags</li>
                <li>Direkt mit dem Gründer, nicht mit einem Callcenter</li>
                <li>Auf Wunsch mit Ihren eigenen Beispieldaten</li>
              </ul>
              <div class="callout" style="margin-top:2rem">
                <strong>Sie wollen gar keine Demo?</strong>
                <p>Völlig in Ordnung. <a href="${APP}" data-cta="trial-demo-page">Starten Sie direkt den 14-tägigen Test</a> — ohne Kreditkarte, in Minuten startklar.</p>
              </div>
            </div>

            <div class="tool contact-card">
              <h2>Schreiben Sie uns</h2>
              <p class="tool-sub">Eine E-Mail genügt — kein Formular, kein Newsletter.</p>

              <a class="mail-link" href="mailto:${MAIL}?subject=${MAIL_SUBJECT_DE}&amp;body=${MAIL_BODY_DE}" data-cta="demo-mail">
                <span class="mail-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>
                </span>
                <span>
                  <strong>${MAIL}</strong>
                  <small>Öffnet Ihr E-Mail-Programm mit vorbereitetem Text</small>
                </span>
              </a>

              <p class="mail-hint">Damit die erste Antwort schon weiterhilft, nennen Sie am besten kurz:</p>
              <ul class="checks mail-checks">
                <li>Unternehmen und Branche</li>
                <li>Ungefähre Anzahl Lieferanten</li>
                <li>Was Sie heute nervt (Excel, Zertifikatsfristen, Kundenaudit …)</li>
              </ul>

              <a href="${APP}" class="btn btn-primary btn-block" style="margin-top:1.35rem" data-cta="trial-demo-card">14 Tage kostenlos testen</a>
            </div>
          </div>
        </div>
      </section>`,
};
