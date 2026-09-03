import { faqSchema, faqHtml, relatedHtml, softwareSchema, APP } from '../layout.mjs';
import { hero, prose, featureGrid, table, callout, toc, answerBox } from '../blocks.mjs';

const M = [
  '14 Tage kostenlos',
  'Keine Kreditkarte nötig',
  'Unbegrenzte Nutzer',
  'EU-Hosting, DSGVO-konform',
];

/* ============================================================
   1) Lieferantenmanagement-Software  (Haupt-Money-Keyword)
   ============================================================ */
const faq1 = [
  {
    q: 'Was ist eine Lieferantenmanagement-Software?',
    a: 'Eine Lieferantenmanagement-Software (auch SRM-Software, Supplier Relationship Management) bündelt alle Informationen und Prozesse rund um Ihre Lieferanten an einem Ort: Stammdaten, Ansprechpartner, Verträge, Zertifikate, Bewertungen, Dokumente und Bestellungen. Statt Excel-Listen, E-Mail-Postfächern und Ordnerstrukturen arbeiten Einkauf, Qualitätssicherung und Geschäftsführung auf demselben, aktuellen Datenstand.',
  },
  {
    q: 'Für welche Unternehmensgröße lohnt sich das?',
    a: 'Ab etwa 20 aktiven Lieferanten oder ab dem Moment, in dem mehr als eine Person Lieferantendaten pflegt. Genau dann entstehen die typischen Kosten von Excel: doppelte Datensätze, abgelaufene Zertifikate, Bestellungen ohne Freigabe und Wissen, das an einzelne Personen gebunden ist. NexSource ist ab 29 € im Monat für unbegrenzt viele Nutzer ausgelegt — also bewusst auch für kleine Einkaufsteams.',
  },
  {
    q: 'Wie lange dauert die Einführung?',
    a: 'Minuten statt Monate. Sie registrieren sich, legen Ihre Organisation an, laden Ihr Team ein und erfassen Lieferanten manuell oder über die KI-Lieferantensuche. Es gibt kein Implementierungsprojekt, keine Beraterstunden und keine Serverinstallation.',
  },
  {
    q: 'Was unterscheidet NexSource von großen SRM-Suiten?',
    a: 'Große Suiten sind für Konzern-Einkaufsabteilungen gebaut: fünfstellige Jahreslizenzen, Einführungsprojekte über Monate, Preise pro Nutzer. NexSource deckt die Prozesse ab, die der Mittelstand tatsächlich täglich braucht — Stammdaten, Zertifikate, Verträge, Bewertung, Bestellungen mit Freigabe, Lieferantenportal — zu einem planbaren Monatspreis mit unbegrenzten Nutzern.',
  },
  {
    q: 'Können unsere Lieferanten ihre Daten selbst pflegen?',
    a: 'Ja. Über das Lieferantenportal erhält jeder Lieferant einen sicheren Self-Service-Link, ohne eigenen Account. Änderungen an Stammdaten kommen als Freigabeanfrage bei Ihnen an — nichts wird ohne Ihre Prüfung übernommen.',
  },
  {
    q: 'Werden unsere Daten in der EU gespeichert?',
    a: 'Ja. NexSource läuft inklusive Dateispeicher auf EU-Infrastruktur und ist DSGVO-konform. Alle Verbindungen sind verschlüsselt.',
  },
];

const p1Body = `
${hero({
  lang: 'de',
  eyebrow: 'Lieferantenmanagement-Software',
  h1: 'Lieferantenmanagement-Software für den Mittelstand',
  lead: 'Alle Lieferanten, Verträge, Zertifikate, Bewertungen und Bestellungen an einem Ort — statt in fünf Excel-Dateien und drei Postfächern. In Minuten startklar, ab 29 € im Monat, unbegrenzte Nutzer.',
  meta: M,
})}
${prose(`
${answerBox('<strong>Kurz gesagt:</strong> NexSource ist eine Lieferantenmanagement-Software für Unternehmen mit 20–250 Mitarbeitenden. Sie führt Lieferantenstammdaten, Zertifikate mit Fristenüberwachung, Verträge, Dokumente, Lieferantenbewertung, Bestellungen mit Freigabeworkflow und ein Lieferantenportal in einem System zusammen — ohne Einführungsprojekt.')}

${toc('de', [
  ['problem', 'Woran Lieferantenmanagement in Excel scheitert'],
  ['funktionen', 'Was eine Lieferantenmanagement-Software leisten muss'],
  ['module', 'Die Module von NexSource'],
  ['auswahl', 'Auswahlkriterien: worauf Sie achten sollten'],
  ['einfuehrung', 'Einführung in 3 Schritten'],
  ['preise', 'Was kostet Lieferantenmanagement-Software?'],
])}

<h2 id="problem">Woran Lieferantenmanagement in Excel scheitert</h2>
<p>Fast jedes mittelständische Unternehmen startet mit einer Excel-Liste. Das funktioniert — bis zu dem Punkt, an dem mehr als eine Person damit arbeitet. Danach entstehen sehr vorhersehbare Probleme:</p>
<ul>
  <li><strong>Niemand kennt den aktuellen Stand.</strong> Es existieren „Lieferanten_final_v3_QS.xlsx" und drei Varianten davon in unterschiedlichen Postfächern.</li>
  <li><strong>Zertifikate laufen unbemerkt ab.</strong> Ein IFS- oder ISO-Zertifikat mit Gültigkeit bis März fällt erst im Audit auf — dann ist es zu spät für eine Nachforderung.</li>
  <li><strong>Bestellungen laufen ohne dokumentierte Freigabe.</strong> Wer hat den Auftrag über 14.000 € genehmigt? Die Antwort steckt in einem E-Mail-Thread, den niemand mehr findet.</li>
  <li><strong>Wissen ist personengebunden.</strong> Wenn die Einkäuferin das Unternehmen verlässt, geht ein Teil der Lieferantenbeziehung mit.</li>
  <li><strong>Nachweise fehlen im Audit.</strong> Bei Kundenaudits und Zertifizierungen müssen Sie Lieferantenprüfungen belegen können — Excel liefert keine Historie, wer wann was geprüft hat.</li>
</ul>
${callout('<strong>Rechenbeispiel</strong><p>Ein Einkaufsteam, das 6 Stunden im Monat mit dem Suchen, Abgleichen und Nachfordern von Lieferantenunterlagen verbringt, verbrennt bei 45 € Vollkosten pro Stunde rund <strong>3.240 € pro Jahr</strong> — bevor ein einziges abgelaufenes Zertifikat oder eine Fehlbestellung eingerechnet ist.</p>')}

<h2 id="funktionen">Was eine Lieferantenmanagement-Software leisten muss</h2>
<p>Nicht jede Software, die sich „SRM" nennt, deckt den Alltag im Mittelstand ab. Diese sechs Funktionsbereiche sind der praktische Mindestumfang:</p>
${table(
  ['Funktionsbereich', 'Warum er zählt'],
  [
    ['Zentrale Lieferantenakte', 'Ein Datensatz pro Lieferant: Adressen, Ansprechpartner, USt-IdNr., Zahlungsziel, Status. Suchbar statt verstreut.'],
    ['Zertifikats- & Fristenmanagement', 'Automatische Erinnerungen vor Ablauf (90/60/30 Tage) sind der häufigste Einzelnutzen — sie verhindern Audit-Findings.'],
    ['Vertrags- & Dokumentenablage', 'Rahmenverträge, Qualitätssicherungsvereinbarungen, Preislisten je Lieferant statt im Netzlaufwerk.'],
    ['Lieferantenbewertung', 'Objektive, wiederholbare Kriterien statt Bauchgefühl — Grundlage für Lieferantenentwicklung und Auslistung.'],
    ['Bestellungen mit Freigabe', 'Interne Genehmigung vor dem Versand plus lückenlose Statushistorie bis zur Zahlung.'],
    ['Lieferantenportal', 'Der Lieferant pflegt seine Daten selbst. Das ist der einzige Weg, Stammdaten dauerhaft aktuell zu halten.'],
  ]
)}

<h2 id="module">Die Module von NexSource</h2>
<h3>Lieferantenstammdaten</h3>
<p>Eine zentrale Datenbank für Kontakte, Adressen, Umsatzsteuer-IDs, Zahlungsziele und Status — in Sekunden durchsuchbar und filterbar. Jeder im Team sieht denselben Stand, mit Rollen (Owner, Manager, Member) für die Rechtevergabe.</p>
<h3>Zertifikate und Verträge mit Fristenüberwachung</h3>
<p>Hinterlegen Sie ISO 9001, IFS Food, BRC, Bio-Zertifikate oder Qualitätssicherungsvereinbarungen mit Gültigkeitszeitraum. NexSource warnt automatisch 90, 60 und 30 Tage vor Ablauf — rechtzeitig genug, um beim Lieferanten nachzufordern.</p>
<h3>KI-Lieferantensuche mit Prüfung</h3>
<p>Beschreiben Sie in einem Satz, was Sie suchen. NexSource durchsucht das Web, schlägt passende Lieferanten vor und prüft jeden automatisch: Umsatzsteuer-Identifikationsnummer über das <a href="/de/ust-idnr-pruefen/">EU-VIES-System</a>, Abgleich mit <a href="/de/sanktionslisten-pruefung/">EU-, OFAC- und UN-Sanktionslisten</a> sowie weitere Vertrauenssignale — zusammengefasst in einem Trust-Score von 0–100.</p>
<h3>Lieferantenbewertung</h3>
<p>Bewerten Sie Kommunikation, Zuverlässigkeit, Flexibilität, Zusammenarbeit und Problemlösung auf einer Skala von 1–10, mit Gesamtscore je Lieferant. Mehr dazu auf der Seite <a href="/de/lieferantenbewertung/">Lieferantenbewertung</a>.</p>
<h3>Bestellungen und Freigaben</h3>
<p>Bestellungen erhalten automatisch fortlaufende Nummern je Organisation (z. B. ORD-2026-0042), durchlaufen die interne Freigabe und werden bis zur Zahlung nachverfolgt — mit vollständiger Statushistorie. Details unter <a href="/de/einkaufssoftware-mittelstand/">Einkaufssoftware für den Mittelstand</a>.</p>
<h3>Lieferantenportal</h3>
<p>Ihre Lieferanten aktualisieren Stammdaten und bestätigen Bestellungen über einen sicheren Link — ohne eigenen Account. Jede Änderung kommt als Freigabeanfrage zu Ihnen. Siehe <a href="/de/lieferantenportal/">Lieferantenportal</a>.</p>

<h2 id="auswahl">Auswahlkriterien: worauf Sie achten sollten</h2>
<ol>
  <li><strong>Preismodell:</strong> Wird pro Nutzer abgerechnet? Dann skaliert der Preis gegen Sie, sobald QS, Buchhaltung und Geschäftsführung mitarbeiten sollen. Nutzerunabhängige Modelle sind im Mittelstand fast immer günstiger.</li>
  <li><strong>Time-to-Value:</strong> Können Sie ohne Beratungsprojekt selbst starten? Wenn die Antwort „Kickoff-Workshop" lautet, rechnen Sie mit Monaten.</li>
  <li><strong>Datenhaltung:</strong> EU-Hosting und ein Auftragsverarbeitungsvertrag sind für DSGVO-Konformität nicht verhandelbar.</li>
  <li><strong>Lieferantenseite:</strong> Kann der Lieferant selbst mitarbeiten, oder tippen Sie alles ab? Ohne Portal veralten Stammdaten binnen eines Jahres.</li>
  <li><strong>Nachweisfähigkeit:</strong> Gibt es eine unveränderliche Historie, wer wann welche Prüfung oder Freigabe vorgenommen hat? Das brauchen Sie im Audit.</li>
  <li><strong>Ausstieg:</strong> Können Sie Ihre Daten exportieren und monatlich kündigen? Jahresverträge mit automatischer Verlängerung sind im Zweifel teuer.</li>
</ol>

<h2 id="einfuehrung">Einführung in 3 Schritten</h2>
<ol>
  <li><strong>Workspace anlegen</strong> — Registrierung mit E-Mail, Team einladen. Nutzer sind in jedem Tarif unbegrenzt.</li>
  <li><strong>Lieferanten erfassen</strong> — bestehende Lieferanten anlegen oder per KI-Suche finden lassen. Danach Zertifikate und Verträge mit Fristen hinterlegen.</li>
  <li><strong>Prozess umstellen</strong> — Bestellungen über die Freigabe laufen lassen und den Portal-Link an die wichtigsten Lieferanten senden.</li>
</ol>
${callout('<strong>Praxistipp für den Start</strong><p>Fangen Sie nicht mit allen Lieferanten an. Nehmen Sie die 20 Lieferanten, die 80 % Ihres Einkaufsvolumens ausmachen, und pflegen Sie deren Zertifikate vollständig ein. Damit ist der größte Audit-Risikoblock innerhalb eines Nachmittags erledigt.</p>', 'ok')}

<h2 id="preise">Was kostet Lieferantenmanagement-Software?</h2>
<p>Klassische SRM-Suiten für Konzerne bewegen sich im vier- bis fünfstelligen Bereich pro Jahr, oft zuzüglich Einführungskosten und Preis pro Nutzer. NexSource ist bewusst anders kalkuliert — nach Lieferantenanzahl, nicht nach Köpfen:</p>
${table(
  ['Tarif', 'Preis', 'Lieferanten', 'Nutzer'],
  [
    ['Starter', '29 €/Monat', 'bis 25', 'unbegrenzt'],
    ['Pro', '89 €/Monat', 'bis 150', 'unbegrenzt'],
    ['Scale', '199 €/Monat', 'unbegrenzt', 'unbegrenzt'],
  ]
)}
<p>Alle Preise zzgl. USt. 14 Tage kostenlos testen, keine Kreditkarte erforderlich, monatlich kündbar. <a href="/de/#pricing">Zur vollständigen Preisübersicht</a>.</p>
`)}
${featureGrid('de', {
  eyebrow: 'Für wen',
  title: 'Gebaut für Teams mit Nachweispflicht',
  intro: 'Besonders dort, wo Kunden, Zertifizierer oder Behörden Lieferantennachweise sehen wollen.',
  alt: true,
  items: [
    ['Lebensmittel & Getränke', 'IFS Food, BRC, Bio-Zertifikate und Spezifikationen mit Fristen — vollständig dokumentiert für das nächste Audit.'],
    ['Metall- & Kunststoffverarbeitung', 'Rahmenverträge, QS-Vereinbarungen und Erstmusterprüfberichte je Lieferant an einem Ort.'],
    ['Automotive-Zulieferer', 'Tier-2- und Tier-3-Betriebe, die ihren OEM-Kunden Lieferkettennachweise liefern müssen.'],
    ['Handel & Import', 'Sanktionslisten- und USt-IdNr.-Prüfung vor der ersten Bestellung — statt nachträglich im Zoll- oder Steuerthema.'],
    ['Pharma & Kosmetik', 'GMP-relevante Lieferantenqualifizierung mit lückenloser Historie.'],
    ['Bau & Handwerk', 'Nachunternehmer mit Freistellungsbescheinigungen und Versicherungsnachweisen im Blick behalten.'],
  ],
})}
${faqHtml('de', faq1)}
${relatedHtml('de', [
  ['/de/einkaufssoftware-mittelstand/', 'Einkaufssoftware Mittelstand', 'Vom Bedarf über die Freigabe bis zur Zahlung — der digitale Bestellprozess.'],
  ['/de/lieferantenportal/', 'Lieferantenportal', 'Lieferanten pflegen ihre Daten selbst — ohne Account, mit Freigabe durch Sie.'],
  ['/de/vergleich/excel-vs-lieferantenmanagement-software/', 'Excel vs. Software', 'Direkter Vergleich: wann Excel reicht und wann es teuer wird.'],
])}`;

export const lieferantenmanagementSoftware = {
  lang: 'de',
  path: '/de/lieferantenmanagement-software/',
  altPath: '/supplier-management-software/',
  title: 'Lieferantenmanagement-Software für den Mittelstand | NexSource',
  description:
    'Stammdaten, Zertifikate mit Fristenwarnung, Verträge, Bewertung, Bestellungen mit Freigabe und Lieferantenportal — ab 29 €/Monat, unbegrenzte Nutzer.',
  keywords:
    'Lieferantenmanagement Software, SRM Software, Lieferantenverwaltung, Lieferantendatenbank, Supplier Relationship Management Mittelstand',
  crumbs: [['/de/lieferantenmanagement-software/', 'Lieferantenmanagement-Software']],
  schema: [softwareSchema('de'), faqSchema(faq1)],
  body: p1Body,
};

/* ============================================================
   2) Einkaufssoftware Mittelstand
   ============================================================ */
const faq2 = [
  {
    q: 'Was ist der Unterschied zwischen Einkaufssoftware und ERP?',
    a: 'Ein ERP bildet Warenwirtschaft, Buchhaltung und Produktion ab — der Einkauf ist dort meist nur ein Nebenmodul ohne Lieferantenqualifizierung, Zertifikatsfristen oder Lieferantenportal. Einkaufssoftware setzt genau dort an: strukturierte Bestellanforderung, Freigabe, Lieferantenkommunikation und Nachweisführung. Viele Mittelständler nutzen beides parallel.',
  },
  {
    q: 'Brauchen wir einen Freigabeworkflow schon bei 15 Mitarbeitenden?',
    a: 'Sobald mehr als eine Person bestellen darf, ja. Der Freigabeworkflow ist weniger Kontrolle als Dokumentation: Er beantwortet im Nachhinein zweifelsfrei, wer welche Ausgabe genehmigt hat — relevant für Wirtschaftsprüfung, Bankgespräche und interne Klarheit.',
  },
  {
    q: 'Wie werden Bestellnummern vergeben?',
    a: 'Automatisch und fortlaufend je Organisation, im Format ORD-2026-0042. Damit ist jede Bestellung eindeutig referenzierbar — in der Kommunikation mit dem Lieferanten ebenso wie in der Buchhaltung.',
  },
  {
    q: 'Können Lieferanten Bestellungen direkt bestätigen?',
    a: 'Ja. Über das Lieferantenportal nimmt der Lieferant die Bestellung an, meldet den Versand und die Lieferung. Jeder Schritt wird mit Zeitstempel in der Statushistorie dokumentiert.',
  },
  {
    q: 'Was kostet Einkaufssoftware für KMU?',
    a: 'NexSource startet bei 29 € im Monat für bis zu 25 Lieferanten, mit unbegrenzten Nutzern. Klassische E-Procurement-Lösungen für Konzerne liegen deutlich höher und rechnen meist pro Nutzer ab.',
  },
];

const p2Body = `
${hero({
  lang: 'de',
  eyebrow: 'Einkaufssoftware',
  h1: 'Einkaufssoftware für den Mittelstand',
  lead: 'Vom Bedarf über die interne Freigabe bis zur Zahlung: ein sauber dokumentierter Bestellprozess, den auch ein Team von drei Personen ohne IT-Projekt einführen kann.',
  meta: M,
})}
${prose(`
${answerBox('<strong>Kurz gesagt:</strong> NexSource digitalisiert den Beschaffungsprozess für Unternehmen mit 20–250 Mitarbeitenden: Bestellungen mit automatischer Nummernvergabe, interner Freigabe, Lieferantenbestätigung über das Portal, Zahlungszielen je Lieferant und vollständiger Statushistorie von „Freigabe ausstehend" bis „Bezahlt".')}

${toc('de', [
  ['prozess', 'Der Bestellprozess in sechs Schritten'],
  ['freigabe', 'Freigabeworkflow: wer genehmigt was'],
  ['status', 'Statushistorie und Nachweisführung'],
  ['erp', 'Einkaufssoftware oder ERP?'],
  ['nutzen', 'Was sich messbar verändert'],
])}

<h2 id="prozess">Der Bestellprozess in sechs Schritten</h2>
<p>Im Mittelstand läuft Beschaffung häufig über Zuruf, Telefon und E-Mail. Das ist schnell — bis etwas schiefgeht und niemand rekonstruieren kann, was vereinbart war. NexSource strukturiert den Ablauf, ohne ihn schwerfällig zu machen:</p>
<ol>
  <li><strong>Bestellung anlegen</strong> — Lieferant auswählen, Positionen erfassen, Zahlungsziel wird aus den Lieferantenstammdaten übernommen.</li>
  <li><strong>Interne Freigabe</strong> — Owner oder Manager genehmigt, bevor irgendetwas nach außen geht.</li>
  <li><strong>Lieferant nimmt an</strong> — Bestätigung über das Lieferantenportal, ohne dass der Lieferant einen Account braucht.</li>
  <li><strong>Versand</strong> — der Lieferant meldet den Versand mit Zeitstempel.</li>
  <li><strong>Lieferung</strong> — Wareneingang wird dokumentiert.</li>
  <li><strong>Zahlung</strong> — Zahlungsziel wird überwacht, Erinnerungen laufen automatisch.</li>
</ol>

<h2 id="freigabe">Freigabeworkflow: wer genehmigt was</h2>
<p>NexSource arbeitet mit drei Rollen, die in jedem Tarif unbegrenzt vergeben werden können:</p>
${table(
  ['Rolle', 'Typische Person', 'Rechte'],
  [
    ['Owner', 'Geschäftsführung / Inhaber', 'Vollzugriff inklusive Abrechnung und Freigaben'],
    ['Manager', 'Einkaufsleitung / QS-Leitung', 'Lieferanten und Bestellungen verwalten, Freigaben erteilen'],
    ['Member', 'Sachbearbeitung, Fachabteilung', 'Erfassen und vorbereiten, ohne Freigabeberechtigung'],
  ]
)}
<p>Der entscheidende Punkt: Weil Nutzer nicht extra kosten, können Sie auch Buchhaltung, Qualitätssicherung und Fachabteilungen einbinden. Genau daran scheitern nutzerbasierte Preismodelle im Mittelstand — man spart Lizenzen und arbeitet deshalb weiter mit Sammelpostfächern.</p>

<h2 id="status">Statushistorie und Nachweisführung</h2>
<p>Jede Statusänderung wird mit Zeitpunkt und auslösender Rolle protokolliert. Das ist im Alltag unspektakulär und in drei Situationen Gold wert:</p>
<ul>
  <li><strong>Reklamation:</strong> Wann wurde bestellt, wann bestätigt, wann versendet? Eine Minute statt eine Stunde E-Mail-Archäologie.</li>
  <li><strong>Wirtschaftsprüfung und Betriebsprüfung:</strong> Belege für Freigaben und Zahlungsziele sind sofort vorzeigbar.</li>
  <li><strong>Kundenaudit:</strong> Sie können belegen, dass Beschaffung nach einem definierten, kontrollierten Prozess abläuft.</li>
</ul>

<h2 id="erp">Einkaufssoftware oder ERP?</h2>
${table(
  ['', 'ERP-Einkaufsmodul', 'NexSource'],
  [
    ['Schwerpunkt', 'Warenwirtschaft, Buchhaltung, Produktion', 'Lieferantenbeziehung und Beschaffung'],
    ['Lieferantenqualifizierung', '<span class="no">meist nicht enthalten</span>', '<span class="yes">enthalten</span>'],
    ['Zertifikatsfristen', '<span class="no">selten</span>', '<span class="yes">automatische Warnung 90/60/30 Tage</span>'],
    ['Lieferantenportal', '<span class="no">Zusatzmodul, oft teuer</span>', '<span class="yes">in jedem Tarif</span>'],
    ['Sanktionslisten & VIES', '<span class="no">Add-on</span>', '<span class="yes">in der Lieferantensuche integriert</span>'],
    ['Einführung', 'Wochen bis Monate', 'Minuten'],
    ['Preismodell', 'meist pro Nutzer', 'nach Lieferantenanzahl, Nutzer unbegrenzt'],
  ]
)}
${callout('<strong>Ehrlich gesagt</strong><p>NexSource ersetzt kein ERP und will das auch nicht. Wenn Sie Lagerbestände, Fertigungsaufträge und Finanzbuchhaltung führen, brauchen Sie beides. NexSource ist die Schicht davor: alles, was passiert, <em>bevor</em> eine Rechnung im ERP landet.</p>')}

<h2 id="nutzen">Was sich messbar verändert</h2>
<ul>
  <li><strong>Durchlaufzeit bis zur Freigabe</strong> sinkt, weil die Genehmigung nicht mehr in einem E-Mail-Postfach liegen bleibt.</li>
  <li><strong>Maverick Buying</strong> — also Bestellungen am Prozess vorbei — wird sichtbar, weil es einen definierten Weg gibt.</li>
  <li><strong>Zahlungsziele werden ausgenutzt</strong> statt versehentlich zu früh oder zu spät bezahlt.</li>
  <li><strong>Onboarding neuer Mitarbeitender</strong> dauert Stunden statt Wochen, weil der Prozess im System steht und nicht im Kopf.</li>
</ul>
`)}
${faqHtml('de', faq2)}
${relatedHtml('de', [
  ['/de/lieferantenmanagement-software/', 'Lieferantenmanagement-Software', 'Der Überblick: Stammdaten, Zertifikate, Bewertung und Bestellungen in einem System.'],
  ['/de/lieferantenportal/', 'Lieferantenportal', 'So bestätigen Lieferanten Bestellungen und pflegen Stammdaten selbst.'],
  ['/de/ratgeber/', 'Ratgeber Einkauf', 'Leitfäden, Checklisten und Vorlagen für den Einkauf im Mittelstand.'],
])}`;

export const einkaufssoftwareMittelstand = {
  lang: 'de',
  path: '/de/einkaufssoftware-mittelstand/',
  altPath: '/procurement-software-small-business/',
  title: 'Einkaufssoftware für den Mittelstand | NexSource',
  description:
    'Bestellungen mit automatischer Nummer, interner Freigabe, Lieferantenbestätigung und lückenloser Statushistorie. Ab 29 €/Monat, unbegrenzte Nutzer.',
  keywords:
    'Einkaufssoftware Mittelstand, Einkaufssoftware KMU, Beschaffungssoftware, Bestellsoftware, E-Procurement Mittelstand, Bestellanforderung Software',
  crumbs: [['/de/einkaufssoftware-mittelstand/', 'Einkaufssoftware Mittelstand']],
  schema: [softwareSchema('de'), faqSchema(faq2)],
  body: p2Body,
};
