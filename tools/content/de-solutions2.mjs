import { faqSchema, faqHtml, relatedHtml, softwareSchema } from '../layout.mjs';
import { hero, prose, featureGrid, table, callout, toc, answerBox } from '../blocks.mjs';

const M = ['14 Tage kostenlos', 'Keine Kreditkarte nötig', 'Unbegrenzte Nutzer', 'EU-Hosting, DSGVO-konform'];

/* ============================================================
   3) Lieferantenportal
   ============================================================ */
const faq3 = [
  {
    q: 'Brauchen unsere Lieferanten einen Account?',
    a: 'Nein. Der Lieferant erhält einen sicheren, personalisierten Link und arbeitet direkt darüber. Keine Registrierung, kein Passwort, keine Software-Installation — das ist der Grund, warum Portale mit Accountpflicht in der Praxis oft ungenutzt bleiben.',
  },
  {
    q: 'Können Lieferanten Daten einfach überschreiben?',
    a: 'Nein. Jede Änderung an Stammdaten kommt als Freigabeanfrage in Ihr System. Sie sehen den alten und den neuen Wert und entscheiden, ob die Änderung übernommen wird. Ihr Datenbestand bleibt jederzeit unter Ihrer Kontrolle.',
  },
  {
    q: 'Was können Lieferanten im Portal tun?',
    a: 'Stammdaten aktualisieren (Adressen, Ansprechpartner, Bankverbindung, USt-IdNr.), Dokumente und aktuelle Zertifikate bereitstellen sowie Bestellungen annehmen, den Versand und die Lieferung melden.',
  },
  {
    q: 'Wie oft sollten wir Lieferanten zur Datenpflege auffordern?',
    a: 'Ein bewährter Rhythmus ist einmal jährlich für alle A-Lieferanten plus anlassbezogen, wenn ein Zertifikat ausläuft. NexSource erinnert Sie automatisch an ablaufende Nachweise, sodass die Anfrage zum richtigen Zeitpunkt kommt statt pauschal.',
  },
  {
    q: 'Ist das DSGVO-konform?',
    a: 'Ja. Die Daten liegen auf EU-Infrastruktur, Verbindungen sind verschlüsselt, und der Portallink ist an den jeweiligen Lieferanten gebunden. Es werden keine personenbezogenen Daten über das hinaus verarbeitet, was für die Geschäftsbeziehung erforderlich ist.',
  },
];

export const lieferantenportal = {
  lang: 'de',
  path: '/de/lieferantenportal/',
  altPath: '/supplier-portal/',
  title: 'Lieferantenportal ohne Account-Zwang | NexSource',
  description:
    'Lieferanten pflegen Stammdaten, laden Zertifikate hoch und bestätigen Bestellungen über einen sicheren Link — ohne Account. Freigabe bleibt bei Ihnen.',
  keywords: 'Lieferantenportal, Lieferantenportal Software, Supplier Portal, Lieferanten Self-Service, Stammdatenpflege Lieferanten',
  crumbs: [['/de/lieferantenportal/', 'Lieferantenportal']],
  schema: [softwareSchema('de'), faqSchema(faq3)],
  body: `
${hero({
  lang: 'de',
  eyebrow: 'Lieferantenportal',
  h1: 'Das Lieferantenportal, das Ihre Lieferanten tatsächlich nutzen',
  lead: 'Ein sicherer Link statt eines weiteren Logins: Ihre Lieferanten aktualisieren Stammdaten, stellen Zertifikate bereit und bestätigen Bestellungen selbst. Jede Änderung erreicht Ihr System erst nach Ihrer Freigabe.',
  meta: M,
})}
${prose(`
${answerBox('<strong>Kurz gesagt:</strong> Das NexSource-Lieferantenportal ist ein Self-Service-Zugang ohne Registrierung. Lieferanten pflegen ihre eigenen Daten, laden Nachweise hoch und wickeln Bestellungen ab — Sie behalten über einen Freigabeschritt die volle Datenhoheit.')}

${toc('de', [
  ['problem', 'Warum Stammdaten veralten'],
  ['funktion', 'So funktioniert das Portal'],
  ['freigabe', 'Datenhoheit durch Freigabe'],
  ['einfuehrung', 'Portal einführen: was in der Praxis funktioniert'],
  ['vergleich', 'Portal mit und ohne Account-Zwang'],
])}

<h2 id="problem">Warum Stammdaten veralten</h2>
<p>Lieferantenstammdaten verlieren jedes Jahr an Qualität — Ansprechpartner wechseln, Firmierungen ändern sich, Bankverbindungen werden umgestellt, Zertifikate laufen aus. In den meisten Mittelständlern gibt es keinen Prozess dafür, sondern nur einen Anlass: Etwas geht schief, und danach wird korrigiert.</p>
<p>Die falsche Antwort darauf ist, dass Ihr Team einmal jährlich alle Lieferanten anschreibt und Antworten manuell abtippt. Das ist teuer und veraltet sofort wieder. Die richtige Antwort ist, die Pflege dorthin zu verlagern, wo die Information entsteht: zum Lieferanten.</p>
${callout('<strong>Das teuerste Stammdatenproblem</strong><p>Geänderte Bankverbindungen. Der klassische Zahlungsbetrug im Mittelstand läuft über eine gefälschte E-Mail mit „neuer Kontoverbindung". Ein Portal mit dokumentierter Änderungsanfrage und Freigabe durch zwei Augen ist dagegen deutlich robuster als ein Postfach.</p>', 'warn')}

<h2 id="funktion">So funktioniert das Portal</h2>
<ol>
  <li><strong>Link versenden</strong> — Sie geben den Portalzugang für einen Lieferanten frei; er erhält einen sicheren, auf ihn ausgestellten Link.</li>
  <li><strong>Lieferant pflegt seine Daten</strong> — Adressen, Ansprechpartner, USt-IdNr., Bankverbindung, Zertifikate und Dokumente.</li>
  <li><strong>Änderung wird zur Anfrage</strong> — nichts wird direkt überschrieben; Sie sehen alten und neuen Wert nebeneinander.</li>
  <li><strong>Sie geben frei</strong> — erst danach ändert sich der Datensatz, protokolliert mit Zeitpunkt.</li>
  <li><strong>Bestellungen abwickeln</strong> — der Lieferant nimmt an, meldet Versand und Lieferung im selben Portal.</li>
</ol>

<h2 id="freigabe">Datenhoheit durch Freigabe</h2>
<p>Der Freigabeschritt ist der Unterschied zwischen einem Portal, das Arbeit spart, und einem, das neue Risiken schafft. In NexSource gilt konsequent: Der Lieferant <em>schlägt vor</em>, Sie <em>entscheiden</em>. Damit bleibt Ihr Datenbestand geprüft, während die Tipparbeit trotzdem beim Lieferanten liegt.</p>

<h2 id="einfuehrung">Portal einführen: was in der Praxis funktioniert</h2>
<ul>
  <li><strong>Nicht alle auf einmal.</strong> Starten Sie mit den 20 wichtigsten Lieferanten. Die Erfahrungswerte daraus machen den Rollout danach einfacher.</li>
  <li><strong>Nutzen benennen, nicht Prozess.</strong> „Sie erhalten Bestellungen künftig strukturiert und müssen bei Rückfragen nicht mehr suchen" zieht besser als „Wir führen ein Portal ein".</li>
  <li><strong>An einen konkreten Anlass koppeln.</strong> Der beste Zeitpunkt für die erste Portaleinladung ist die nächste ohnehin fällige Zertifikatsnachforderung.</li>
  <li><strong>Ansprechpartner benennen.</strong> Eine Person bei Ihnen, die Rückfragen beantwortet, erhöht die Nutzungsquote deutlich.</li>
</ul>

<h2 id="vergleich">Portal mit und ohne Account-Zwang</h2>
${table(
  ['', 'Klassisches Portal mit Login', 'NexSource-Portal'],
  [
    ['Registrierung', '<span class="no">erforderlich</span>', '<span class="yes">nicht erforderlich</span>'],
    ['Typische Nutzungsquote', 'niedrig — Passwort vergessen, Zugang nie eingerichtet', 'hoch — ein Klick im Link'],
    ['Aufwand beim Lieferanten', 'Onboarding, Schulung, Support', 'praktisch keiner'],
    ['Datenhoheit', 'oft direktes Überschreiben', '<span class="yes">Freigabe durch Sie</span>'],
    ['Kosten je Lieferantenzugang', 'häufig lizenzpflichtig', '<span class="yes">inklusive</span>'],
  ]
)}
`)}
${faqHtml('de', faq3)}
${relatedHtml('de', [
  ['/de/lieferantenmanagement-software/', 'Lieferantenmanagement-Software', 'Alle Lieferantendaten, Zertifikate und Verträge in einem System.'],
  ['/de/einkaufssoftware-mittelstand/', 'Einkaufssoftware Mittelstand', 'Bestellprozess mit Freigabe, Statushistorie und Zahlungszielen.'],
  ['/de/lieferantenbewertung/', 'Lieferantenbewertung', 'Objektiv bewerten statt nach Bauchgefühl — inklusive kostenlosem Rechner.'],
])}`,
};

/* ============================================================
   4) Sanktionslistenprüfung
   ============================================================ */
const faq5 = [
  {
    q: 'Wer muss Sanktionslisten prüfen?',
    a: 'Die EU-Sanktionsverordnungen gelten unmittelbar für alle Unternehmen in der EU — unabhängig von der Größe. Es gibt keine Bagatellgrenze und keine Mitarbeiterzahl, ab der die Pflicht erst greift. Verboten ist insbesondere, gelisteten Personen und Organisationen direkt oder indirekt Gelder oder wirtschaftliche Ressourcen bereitzustellen.',
  },
  {
    q: 'Welche Listen sind relevant?',
    a: 'Für EU-Unternehmen sind die EU-Sanktionslisten maßgeblich. Praktisch relevant sind zusätzlich die UN-Listen sowie die US-Listen des OFAC (insbesondere SDN), sobald Sie US-Bezug haben — etwa durch US-Kunden, US-Dollar-Zahlungen oder US-Vorprodukte. NexSource prüft gegen EU, OFAC und UN.',
  },
  {
    q: 'Wie oft muss geprüft werden?',
    a: 'Sinnvoll ist eine Prüfung vor der Aufnahme einer Geschäftsbeziehung und danach anlassbezogen — die Listen ändern sich laufend. Wichtig ist, dass die Prüfung dokumentiert ist: Ohne Nachweis lässt sich im Zweifel nicht belegen, dass sie stattgefunden hat.',
  },
  {
    q: 'Ersetzt NexSource eine Compliance-Beratung?',
    a: 'Nein. NexSource automatisiert und dokumentiert den Abgleich und liefert Ihnen die Nachweise. Die Bewertung eines Treffers, die Entscheidung über die Geschäftsbeziehung und die Frage nach Genehmigungspflichten bleiben Ihre unternehmerische und juristische Verantwortung. Bei einem Treffer sollten Sie fachkundigen Rat einholen.',
  },
  {
    q: 'Was passiert bei einem Treffer?',
    a: 'Ein Treffer ist zunächst ein Verdachtsmoment, kein Urteil — Namensgleichheiten kommen vor. NexSource weist den Treffer aus, sodass Sie ihn prüfen, dokumentieren und bewusst entscheiden können, statt ihn unbemerkt zu übergehen.',
  },
];

export const sanktionslisten = {
  lang: 'de',
  path: '/de/sanktionslisten-pruefung/',
  title: 'Sanktionslistenprüfung für Lieferanten (EU, OFAC, UN) | NexSource',
  description:
    'Lieferanten automatisch gegen EU-, OFAC- und UN-Sanktionslisten prüfen — inklusive VIES-Validierung der USt-IdNr. und dokumentiertem Nachweis fürs Audit.',
  keywords: 'Sanktionslistenprüfung, Sanktionslisten Software, EU Sanktionsliste prüfen, OFAC Prüfung, Embargoprüfung Lieferanten',
  crumbs: [['/de/sanktionslisten-pruefung/', 'Sanktionslistenprüfung']],
  schema: [softwareSchema('de'), faqSchema(faq5)],
  body: `
${hero({
  lang: 'de',
  eyebrow: 'Compliance',
  h1: 'Sanktionslistenprüfung für Lieferanten — automatisch und dokumentiert',
  lead: 'Jeder Lieferant, den Sie über NexSource finden oder anlegen, wird gegen EU-, OFAC- und UN-Sanktionslisten abgeglichen und die Umsatzsteuer-ID über das EU-VIES-System validiert. Das Ergebnis wird dokumentiert — nachweisbar im Audit.',
  meta: M,
})}
${prose(`
${answerBox('<strong>Kurz gesagt:</strong> Sanktionsrecht gilt in der EU für jedes Unternehmen, ohne Größengrenze. Wer Lieferanten nicht abgleicht, riskiert empfindliche Bußgelder und im Extremfall strafrechtliche Folgen. NexSource prüft automatisch bei jeder Lieferantensuche gegen EU-, OFAC- und UN-Listen und hält das Ergebnis fest.')}

${toc('de', [
  ['pflicht', 'Die Pflicht gilt auch für kleine Unternehmen'],
  ['listen', 'Welche Listen relevant sind'],
  ['prozess', 'Wie die Prüfung in NexSource abläuft'],
  ['dokumentation', 'Warum Dokumentation wichtiger ist als die Prüfung selbst'],
  ['treffer', 'Was tun bei einem Treffer?'],
])}

<h2 id="pflicht">Die Pflicht gilt auch für kleine Unternehmen</h2>
<p>Ein weit verbreiteter Irrtum lautet, Sanktionsprüfung sei ein Konzernthema. Das Gegenteil ist der Fall: EU-Sanktionsverordnungen gelten unmittelbar in allen Mitgliedstaaten und für alle Wirtschaftsteilnehmer — vom Einzelunternehmen bis zum Konzern. Untersagt ist unter anderem, gelisteten Personen oder Organisationen direkt <em>oder indirekt</em> Gelder und wirtschaftliche Ressourcen zur Verfügung zu stellen.</p>
<p>„Indirekt" ist dabei der schwierige Teil: Es genügt nicht, den Namen des Vertragspartners zu prüfen, wenn dahinter eine gelistete Person als wirtschaftlich Berechtigter steht. Deshalb gehört zur Prüfung auch ein Blick auf Eigentümerstrukturen — insbesondere bei Neukunden und Lieferanten aus Risikoregionen.</p>
${callout('<strong>Hinweis</strong><p>Diese Seite gibt einen praxisorientierten Überblick und ersetzt keine Rechtsberatung. Bei konkreten Treffern, Genehmigungsfragen oder Geschäften mit Bezug zu Sanktionsregimen sollten Sie fachkundigen Rat einholen.</p>', 'warn')}

<h2 id="listen">Welche Listen relevant sind</h2>
${table(
  ['Liste', 'Herausgeber', 'Wann relevant'],
  [
    ['EU-Sanktionsliste (CFSP)', 'Europäische Union', 'Immer — unmittelbar bindend für EU-Unternehmen'],
    ['UN-Sanktionsliste', 'Vereinte Nationen', 'Grundlage vieler EU-Listungen, international relevant'],
    ['OFAC SDN List', 'US-Finanzministerium', 'Bei US-Bezug: US-Kunden, USD-Zahlungen, US-Vorprodukte, US-Tochtergesellschaften'],
  ]
)}
<p>NexSource prüft gegen alle drei. Zusätzlich wird die Umsatzsteuer-Identifikationsnummer über das offizielle <a href="/de/ust-idnr-pruefen/">EU-VIES-System</a> validiert — das ist eine andere Prüfung mit einem anderen Zweck, gehört im Lieferanten-Onboarding aber in denselben Arbeitsschritt.</p>

<h2 id="prozess">Wie die Prüfung in NexSource abläuft</h2>
<ol>
  <li><strong>Lieferant suchen oder anlegen</strong> — bei der KI-Lieferantensuche geschieht die Prüfung automatisch für jedes Suchergebnis.</li>
  <li><strong>Abgleich</strong> — Name und Unternehmensdaten werden gegen EU-, OFAC- und UN-Listen abgeglichen.</li>
  <li><strong>USt-IdNr.-Validierung</strong> — parallel wird die Umsatzsteuer-ID über VIES geprüft.</li>
  <li><strong>Trust-Score</strong> — die Signale werden zu einer Bewertung von 0–100 mit Risikoeinstufung und Onboarding-Empfehlung verdichtet.</li>
  <li><strong>Dokumentation</strong> — das Ergebnis bleibt am Lieferantendatensatz erhalten und ist im Audit vorzeigbar.</li>
</ol>

<h2 id="dokumentation">Warum Dokumentation wichtiger ist als die Prüfung selbst</h2>
<p>Viele Unternehmen prüfen tatsächlich — nur eben in einem Browser-Tab, ohne Spur. Im Prüfungsfall ist die entscheidende Frage jedoch nicht, ob Sie geprüft haben, sondern ob Sie es <em>belegen</em> können. Eine Prüfung ohne Nachweis ist im Zweifel keine Prüfung.</p>
<p>Deshalb speichert NexSource das Prüfergebnis am Lieferanten, statt es nur anzuzeigen. Zusammen mit Zertifikaten, Verträgen und der Statushistorie der Bestellungen ergibt sich eine vollständige Lieferantenakte.</p>

<h2 id="treffer">Was tun bei einem Treffer?</h2>
<ol>
  <li><strong>Nicht sofort handeln, sondern verifizieren.</strong> Namensgleichheiten sind häufig — prüfen Sie Geburtsdatum, Sitz, Registernummer und weitere Identifikatoren.</li>
  <li><strong>Vorgang einfrieren.</strong> Keine Zahlungen und keine Lieferungen, solange der Verdacht nicht ausgeräumt ist.</li>
  <li><strong>Fachkundigen Rat einholen.</strong> Bei einem bestätigten Treffer bestehen unter Umständen Melde- und Einfrierpflichten.</li>
  <li><strong>Alles dokumentieren.</strong> Prüfzeitpunkt, Ergebnis, Bewertung und Entscheidung — das ist Ihre Absicherung.</li>
</ol>
`)}
${faqHtml('de', faq5)}
${relatedHtml('de', [
  ['/de/ust-idnr-pruefen/', 'USt-IdNr. prüfen', 'Kostenloses Prüftool für Umsatzsteuer-Identifikationsnummern aller EU-Staaten.'],
  ['/de/lksg-software/', 'LkSG für Zulieferer', 'Was Großkunden von mittelständischen Lieferanten verlangen — und wie Sie liefern.'],
  ['/de/lieferantenmanagement-software/', 'Lieferantenmanagement-Software', 'Die vollständige Lieferantenakte inklusive Nachweisführung.'],
])}`,
};

/* ============================================================
   5) LkSG für Zulieferer
   ============================================================ */
const faq6 = [
  {
    q: 'Gilt das Lieferkettensorgfaltspflichtengesetz für mein KMU?',
    a: 'Direkt verpflichtet sind Unternehmen ab 1.000 Beschäftigten in Deutschland. Kleinere Unternehmen sind in aller Regel nicht unmittelbar verpflichtet — werden aber als Zulieferer mittelbar einbezogen, weil ihre großen Kunden Nachweise, Selbstauskünfte und Verhaltenskodizes einfordern. Diese Weitergabe der Anforderungen ist der Grund, warum das Thema im Mittelstand ankommt.',
  },
  {
    q: 'Was verlangen Großkunden typischerweise?',
    a: 'Meist eine unterschriebene Lieferanten-Selbstauskunft, die Anerkennung eines Code of Conduct, Angaben zu Umwelt- und Sozialstandards, Nachweise über Zertifizierungen sowie eine Bestätigung, dass Sie Ihre eigenen Vorlieferanten prüfen. Wer das schnell und vollständig liefert, bleibt gelistet — wer es nicht kann, verliert im schlimmsten Fall den Kunden.',
  },
  {
    q: 'Ist NexSource eine LkSG-Compliance-Software?',
    a: 'NexSource ist keine Rechtsberatung und kein vollständiges Risikomanagementsystem nach LkSG. Es liefert die operative Grundlage, die solche Nachweise erst möglich macht: eine vollständige, aktuelle Lieferantenakte mit Zertifikaten, Verträgen, dokumentierter Sanktionslisten- und USt-IdNr.-Prüfung sowie einer nachvollziehbaren Historie.',
  },
  {
    q: 'Was ändert sich durch die CSDDD?',
    a: 'Die EU-Lieferkettenrichtlinie (CSDDD) weitet Sorgfaltspflichten auf EU-Ebene aus; Umfang und Zeitplan wurden politisch mehrfach angepasst. Für den Mittelstand bleibt die praktische Konsequenz gleich: Große Kunden reichen ihre Pflichten in der Lieferkette weiter. Wer seine Lieferantendaten im Griff hat, ist unabhängig von der finalen Ausgestaltung vorbereitet.',
  },
  {
    q: 'Wie schnell können wir eine Lieferanten-Selbstauskunft beantworten?',
    a: 'Mit vollständig gepflegten Lieferantendaten in Stunden statt Wochen. Der Zeitfresser ist fast nie das Ausfüllen des Formulars, sondern das Zusammensuchen der Nachweise aus Postfächern, Ordnern und Köpfen.',
  },
];

export const lksg = {
  lang: 'de',
  path: '/de/lksg-software/',
  title: 'LkSG für Zulieferer: Nachweise liefern | NexSource',
  description:
    'Ihr Großkunde verlangt Lieferkettennachweise? Vollständige Lieferantenakte, Zertifikate mit Fristen, dokumentierte Prüfungen — in Stunden statt Wochen.',
  keywords: 'LkSG Software, Lieferkettengesetz Mittelstand, LkSG Zulieferer, Lieferantenselbstauskunft, CSDDD Mittelstand, Sorgfaltspflichten Lieferkette',
  crumbs: [['/de/lksg-software/', 'LkSG für Zulieferer']],
  schema: [softwareSchema('de'), faqSchema(faq6)],
  body: `
${hero({
  lang: 'de',
  eyebrow: 'Lieferkette & Sorgfaltspflichten',
  h1: 'LkSG trifft den Mittelstand indirekt — über die Kunden',
  lead: 'Nicht Ihre Mitarbeiterzahl entscheidet, ob das Thema Sie betrifft, sondern die Ihrer Kunden. Wer Großkunden beliefert, muss Lieferkettennachweise vorlegen können. NexSource hält die Daten dafür bereit.',
  meta: M,
})}
${prose(`
${answerBox('<strong>Kurz gesagt:</strong> Direkt verpflichtet sind Unternehmen ab 1.000 Beschäftigten. Mittelständische Zulieferer werden über Verträge, Selbstauskünfte und Verhaltenskodizes ihrer Großkunden trotzdem in die Pflicht genommen. Wer die Nachweise schnell liefert, sichert den Kunden — wer sie nicht liefert, riskiert die Auslistung.')}

${toc('de', [
  ['kaskade', 'Die Kaskade: wie Pflichten nach unten weitergegeben werden'],
  ['anforderungen', 'Was Großkunden konkret anfordern'],
  ['vorbereitung', 'Vorbereitung in fünf Schritten'],
  ['nexsource', 'Was NexSource dabei leistet — und was nicht'],
  ['chance', 'Die unterschätzte Vertriebschance'],
])}

<h2 id="kaskade">Die Kaskade: wie Pflichten nach unten weitergegeben werden</h2>
<p>Das deutsche Lieferkettensorgfaltspflichtengesetz verpflichtet unmittelbar Unternehmen ab 1.000 Beschäftigten. Diese Unternehmen müssen Risiken in ihrer Lieferkette analysieren, Präventionsmaßnahmen ergreifen und dokumentieren. Nur können sie das nicht allein tun — sie brauchen Informationen von ihren Lieferanten.</p>
<p>Also geben sie die Anforderungen vertraglich weiter. Für einen mittelständischen Zulieferer sieht das so aus: Der Einkauf des Großkunden schickt eine Selbstauskunft, einen Code of Conduct zur Unterschrift und eine Frist. Wer nicht liefert, fällt aus der Lieferantenliste — unabhängig von Preis und Qualität.</p>
${callout('<strong>Der eigentliche Hebel</strong><p>Für die meisten Mittelständler ist LkSG kein Rechtsrisiko, sondern ein <strong>Vertriebsrisiko</strong>. Die relevante Frage lautet nicht „Werde ich sanktioniert?", sondern „Verliere ich einen Kunden, weil ich innerhalb von zwei Wochen keine vollständigen Nachweise liefern kann?"</p>')}

<h2 id="anforderungen">Was Großkunden konkret anfordern</h2>
${table(
  ['Anforderung', 'Was Sie bereithalten müssen'],
  [
    ['Lieferanten-Selbstauskunft', 'Unternehmensdaten, Standorte, Eigentümerstruktur, Zertifizierungen, Ansprechpartner für Compliance'],
    ['Code of Conduct', 'Unterzeichnete Fassung, oft mit Weitergabepflicht an Ihre eigenen Vorlieferanten'],
    ['Zertifikate', 'ISO 9001, ISO 14001, IFS, BRC, SA8000 oder branchenspezifische Nachweise — gültig und aktuell'],
    ['Nachweis eigener Lieferantenprüfung', 'Beleg, dass Sie Ihre Vorlieferanten qualifizieren und prüfen'],
    ['Sanktionslisten-Screening', 'Bestätigung, dass Ihre Geschäftspartner abgeglichen werden'],
    ['Ansprechpartner & Beschwerdeweg', 'Benannte Person und ein dokumentierter Prozess für Hinweise'],
  ]
)}

<h2 id="vorbereitung">Vorbereitung in fünf Schritten</h2>
<ol>
  <li><strong>Lieferantenbasis vollständig erfassen.</strong> Ohne zentrale Liste ist jede weitere Maßnahme Stückwerk.</li>
  <li><strong>Zertifikate mit Gültigkeitsdaten hinterlegen.</strong> Abgelaufene Nachweise sind der häufigste Grund für Rückfragen des Kunden.</li>
  <li><strong>Screening etablieren.</strong> <a href="/de/sanktionslisten-pruefung/">Sanktionslistenprüfung</a> und <a href="/de/ust-idnr-pruefen/">USt-IdNr.-Validierung</a> beim Onboarding, dokumentiert.</li>
  <li><strong>Kritische Lieferanten identifizieren.</strong> Risikoregionen, Rohstoffe mit bekannten Menschenrechtsrisiken, Einzelquellen ohne Alternative.</li>
  <li><strong>Ansprechpartner benennen und Prozess aufschreiben.</strong> Zwei Seiten reichen — aber sie müssen existieren.</li>
</ol>

<h2 id="nexsource">Was NexSource dabei leistet — und was nicht</h2>
<p><strong>Was es leistet:</strong> eine vollständige, aktuelle Lieferantenakte mit Zertifikaten und Fristenwarnung, dokumentierter Sanktionslisten- und VIES-Prüfung, Verträgen und Dokumenten, Lieferantenbewertung sowie einer nachvollziehbaren Historie aller Änderungen und Freigaben. Das ist die Datengrundlage, aus der Sie jede Selbstauskunft in kurzer Zeit beantworten.</p>
<p><strong>Was es nicht leistet:</strong> NexSource ist keine Rechtsberatung, erstellt keine Risikoanalyse nach § 5 LkSG und ersetzt kein Beschwerdeverfahren nach § 8. Wenn Sie selbst unter das Gesetz fallen, brauchen Sie zusätzlich juristische Begleitung und ein dokumentiertes Risikomanagementsystem.</p>

<h2 id="chance">Die unterschätzte Vertriebschance</h2>
<p>Drehen Sie die Perspektive um: Wenn Ihre Wettbewerber sechs Wochen für eine Selbstauskunft brauchen und Sie zwei Tage, ist das ein Argument im Einkaufsgespräch. Einkäufer bei Großkunden bewerten Lieferanten zunehmend auch danach, wie viel Arbeit sie im Compliance-Prozess verursachen. Saubere Lieferantendaten sind damit nicht nur Pflichterfüllung, sondern ein Verkaufsargument.</p>
`)}
${faqHtml('de', faq6)}
${relatedHtml('de', [
  ['/de/sanktionslisten-pruefung/', 'Sanktionslistenprüfung', 'EU, OFAC und UN automatisch abgleichen und dokumentieren.'],
  ['/de/lieferantenmanagement-software/', 'Lieferantenmanagement-Software', 'Die zentrale Lieferantenakte als Grundlage aller Nachweise.'],
  ['/de/ratgeber/lieferantenaudit-checkliste/', 'Lieferantenaudit-Checkliste', 'Fragenkatalog und Ablauf für das nächste Lieferantenaudit.'],
])}`,
};
