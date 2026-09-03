import { faqSchema, faqHtml, relatedHtml, softwareSchema, SITE, APP } from '../layout.mjs';
import { hero, prose, table, callout, toc, answerBox } from '../blocks.mjs';

const M = ['14 days free', 'No credit card', 'Unlimited users', 'EU-hosted, GDPR-compliant'];

/* ---------------- Supplier management software ---------------- */
const faq1 = [
  { q: 'What is supplier management software?', a: 'Supplier management software (also called SRM software) centralises everything about your suppliers: master data, contacts, contracts, certificates, evaluations, documents and purchase orders. Instead of spreadsheets, inboxes and shared folders, procurement, quality and management work from one current data set.' },
  { q: 'When is it worth it for a small company?', a: 'From roughly 20 active suppliers, or from the moment more than one person maintains supplier data. That is when the hidden cost of spreadsheets appears: duplicate records, expired certificates, orders without documented approval and knowledge locked in one person’s head.' },
  { q: 'How long does implementation take?', a: 'Minutes, not months. Sign up, create your organisation, invite your team and add suppliers manually or through AI supplier discovery. There is no implementation project, no consultants and no server to install.' },
  { q: 'Do you charge per user?', a: 'No. Plans are limited by the number of suppliers you manage, not by seats. Every plan includes unlimited users with roles — which is what makes it realistic to involve quality, finance and management.' },
  { q: 'Where is our data hosted?', a: 'NexSource runs on EU infrastructure including object storage for files, and is GDPR-compliant. All connections are encrypted in transit.' },
];

export const supplierManagement = {
  lang: 'en',
  path: '/supplier-management-software/',
  altPath: '/de/lieferantenmanagement-software/',
  title: 'Supplier Management Software for SMBs | NexSource',
  description:
    'Master data, certificates with expiry alerts, contracts, supplier evaluation, purchase orders with approval and a supplier portal. From €29/month.',
  keywords: 'supplier management software, SRM software, supplier database, supplier relationship management, vendor management software SMB',
  crumbs: [['/supplier-management-software/', 'Supplier management software']],
  schema: [softwareSchema('en'), faqSchema(faq1)],
  body: `
${hero({
  lang: 'en',
  eyebrow: 'Supplier management software',
  h1: 'Supplier management software built for mid-sized teams',
  lead: 'Every supplier, contract, certificate, evaluation and purchase order in one place — instead of five spreadsheets and three inboxes. Live in minutes, from €29/month, unlimited users.',
  meta: M,
})}
${prose(`
${answerBox('<strong>In short:</strong> NexSource is supplier management software for companies with 20–250 employees. It combines supplier master data, certificate expiry tracking, contracts, documents, supplier evaluation, purchase orders with an approval workflow and a supplier portal — with no implementation project.')}

${toc('en', [
  ['problem', 'Why spreadsheets stop working'],
  ['capabilities', 'What the software has to cover'],
  ['modules', 'The NexSource modules'],
  ['criteria', 'How to choose'],
  ['pricing', 'What supplier management software costs'],
])}

<h2 id="problem">Why spreadsheets stop working</h2>
<p>Almost every mid-sized company starts with a spreadsheet, and that works — right up to the point where more than one person uses it. After that the failures are remarkably predictable:</p>
<ul>
  <li><strong>Nobody knows the current state.</strong> There is a "suppliers_final_v3_QA.xlsx" and three variants of it in different inboxes.</li>
  <li><strong>Certificates expire unnoticed.</strong> An ISO or IFS certificate valid until March surfaces during the June audit — too late to request a renewal.</li>
  <li><strong>Orders go out without documented approval.</strong> Who signed off on the €14,000 order? The answer is in an email thread nobody can find.</li>
  <li><strong>Knowledge is tied to people.</strong> When the buyer leaves, part of the supplier relationship leaves with them.</li>
  <li><strong>Evidence is missing at audit.</strong> Customer audits and certifications require proof of supplier checks. A spreadsheet has no history of who checked what, and when.</li>
</ul>
${callout('<strong>The arithmetic</strong><p>A procurement team spending 6 hours a month chasing and reconciling supplier paperwork burns roughly <strong>€3,240 a year</strong> at €45 fully loaded cost per hour — before a single expired certificate or mis-ordered delivery is counted.</p>')}

<h2 id="capabilities">What the software has to cover</h2>
${table(
  ['Capability', 'Why it matters'],
  [
    ['Central supplier record', 'One record per supplier: addresses, contacts, VAT ID, payment terms, status — searchable instead of scattered.'],
    ['Certificate & deadline tracking', 'Automatic alerts before expiry (90/60/30 days) is the single most valuable feature — it prevents audit findings.'],
    ['Contract & document storage', 'Framework agreements, quality assurance agreements and price lists per supplier, not on a shared drive.'],
    ['Supplier evaluation', 'Objective, repeatable criteria instead of gut feel — the basis for supplier development or de-listing.'],
    ['Purchase orders with approval', 'Internal sign-off before anything is sent, plus a complete status history through to payment.'],
    ['Supplier portal', 'Suppliers maintain their own data. It is the only way master data stays current over time.'],
  ]
)}

<h2 id="modules">The NexSource modules</h2>
<h3>Supplier master data</h3>
<p>One central database for contacts, addresses, VAT IDs, payment terms and status — searchable and filterable in seconds, with roles (owner, manager, member) controlling who can do what.</p>
<h3>Certificates and contracts with expiry tracking</h3>
<p>Store ISO 9001, IFS Food, BRC, organic certificates or quality assurance agreements with validity windows. NexSource warns you 90, 60 and 30 days before expiry — early enough to chase the supplier.</p>
<h3>AI supplier discovery with automated vetting</h3>
<p>Describe what you need in one sentence. NexSource searches the web, proposes matching suppliers and vets each one: VAT ID validation through the EU <a href="/vat-number-validator/">VIES system</a>, screening against EU, OFAC and UN sanctions lists, plus other trust signals — condensed into a trust score from 0–100.</p>
<h3>Supplier evaluation</h3>
<p>Rate communication, reliability, flexibility, cooperation and problem-solving with an overall score per supplier. See <a href="/supplier-evaluation/">supplier evaluation</a> for criteria and a free calculator.</p>
<h3>Purchase orders and approvals</h3>
<p>Orders get sequential numbers per organisation (ORD-2026-0042), pass through internal approval and are tracked to payment with a full status history. See <a href="/procurement-software-small-business/">procurement software for SMBs</a>.</p>
<h3>Supplier portal</h3>
<p>Suppliers update master data and confirm orders through a secure link — no account required. Every change reaches you as an approval request. See <a href="/supplier-portal/">supplier portal</a>.</p>

<h2 id="criteria">How to choose</h2>
<ol>
  <li><strong>Pricing model.</strong> Per-seat pricing scales against you the moment quality, finance and management need access. Seat-independent pricing is almost always cheaper for SMBs.</li>
  <li><strong>Time to value.</strong> Can you start on your own? If the answer is "kickoff workshop", plan for months.</li>
  <li><strong>Data residency.</strong> EU hosting and a data processing agreement are non-negotiable for GDPR compliance.</li>
  <li><strong>Supplier side.</strong> Can suppliers contribute, or does your team retype everything? Without a portal, master data decays within a year.</li>
  <li><strong>Auditability.</strong> Is there an immutable history of who checked or approved what, and when?</li>
  <li><strong>Exit.</strong> Can you export your data and cancel monthly?</li>
</ol>

<h2 id="pricing">What supplier management software costs</h2>
${table(
  ['Plan', 'Price', 'Suppliers', 'Users'],
  [
    ['Starter', '€29/month', 'up to 25', 'unlimited'],
    ['Pro', '€89/month', 'up to 150', 'unlimited'],
    ['Scale', '€199/month', 'unlimited', 'unlimited'],
  ]
)}
<p>All prices excl. VAT. 14-day free trial, no credit card required, cancel anytime. <a href="/#pricing">See full pricing</a>.</p>
`)}
${faqHtml('en', faq1)}
${relatedHtml('en', [
  ['/procurement-software-small-business/', 'Procurement software for SMBs', 'From request through approval to payment — the digital order process.'],
  ['/supplier-portal/', 'Supplier portal', 'Suppliers maintain their own data — no account, approved by you.'],
  ['/supplier-evaluation/', 'Supplier evaluation', 'Criteria, weighting and a free scorecard calculator.'],
])}`,
};

/* ---------------- Procurement software ---------------- */
const faq2 = [
  { q: 'What is the difference between procurement software and an ERP?', a: 'An ERP covers inventory, accounting and production; procurement is usually a side module without supplier qualification, certificate deadlines or a supplier portal. Procurement software starts exactly there: structured requisitions, approvals, supplier communication and evidence. Many SMBs run both.' },
  { q: 'Do we need an approval workflow at 15 employees?', a: 'As soon as more than one person can place orders, yes. The workflow is less about control than documentation: it answers, after the fact, who approved which spend — which matters for auditors, banks and internal clarity.' },
  { q: 'How are order numbers assigned?', a: 'Automatically and sequentially per organisation, in the format ORD-2026-0042, so every order is unambiguously referenceable in supplier communication and accounting.' },
  { q: 'Can suppliers confirm orders directly?', a: 'Yes. Through the supplier portal a supplier accepts the order and reports shipment and delivery. Each step is timestamped in the status history.' },
];

export const procurementSoftware = {
  lang: 'en',
  path: '/procurement-software-small-business/',
  altPath: '/de/einkaufssoftware-mittelstand/',
  title: 'Procurement Software for SMBs | NexSource',
  description:
    'Purchase orders with automatic numbering, internal approval, supplier confirmation and a complete status history. From €29/month, unlimited users.',
  keywords: 'procurement software small business, e-procurement SMB, purchase order software, purchase approval workflow, purchasing software',
  crumbs: [['/procurement-software-small-business/', 'Procurement software']],
  schema: [softwareSchema('en'), faqSchema(faq2)],
  body: `
${hero({
  lang: 'en',
  eyebrow: 'Procurement software',
  h1: 'Procurement software for small and mid-sized businesses',
  lead: 'From request through internal approval to payment: a properly documented order process that a team of three can adopt without an IT project.',
  meta: M,
})}
${prose(`
${answerBox('<strong>In short:</strong> NexSource digitises procurement for companies with 20–250 employees — purchase orders with automatic numbering, internal approval, supplier confirmation through the portal, per-supplier payment terms and a full status history from "pending approval" to "paid".')}

${toc('en', [
  ['process', 'The order process in six steps'],
  ['approval', 'Approval workflow: who signs off'],
  ['history', 'Status history and evidence'],
  ['erp', 'Procurement software or ERP?'],
])}

<h2 id="process">The order process in six steps</h2>
<ol>
  <li><strong>Create the order</strong> — pick the supplier, add line items; payment terms come from the supplier record.</li>
  <li><strong>Internal approval</strong> — owner or manager signs off before anything leaves the building.</li>
  <li><strong>Supplier accepts</strong> — confirmed through the supplier portal, no account required.</li>
  <li><strong>Shipment</strong> — the supplier reports dispatch with a timestamp.</li>
  <li><strong>Delivery</strong> — goods receipt is recorded.</li>
  <li><strong>Payment</strong> — payment terms are tracked and reminders run automatically.</li>
</ol>

<h2 id="approval">Approval workflow: who signs off</h2>
${table(
  ['Role', 'Typical person', 'Rights'],
  [
    ['Owner', 'Founder / managing director', 'Full access including billing and approvals'],
    ['Manager', 'Head of procurement or quality', 'Manage suppliers and orders, grant approvals'],
    ['Member', 'Administrator, department staff', 'Create and prepare, without approval rights'],
  ]
)}
<p>Because users cost nothing extra, you can involve finance, quality and departments. That is exactly where per-seat pricing fails SMBs: teams save licences and keep working out of shared inboxes.</p>

<h2 id="history">Status history and evidence</h2>
<p>Every status change is logged with timestamp and role. Unremarkable day to day, invaluable in three situations: a complaint (when was it ordered, confirmed, shipped?), an audit (approvals and terms are immediately presentable), and a customer audit (you can show procurement follows a controlled process).</p>

<h2 id="erp">Procurement software or ERP?</h2>
${table(
  ['', 'ERP purchasing module', 'NexSource'],
  [
    ['Focus', 'Inventory, accounting, production', 'Supplier relationship and sourcing'],
    ['Supplier qualification', '<span class="no">usually absent</span>', '<span class="yes">included</span>'],
    ['Certificate deadlines', '<span class="no">rare</span>', '<span class="yes">automatic 90/60/30-day alerts</span>'],
    ['Supplier portal', '<span class="no">costly add-on</span>', '<span class="yes">in every plan</span>'],
    ['Sanctions & VAT screening', '<span class="no">add-on</span>', '<span class="yes">built into supplier discovery</span>'],
    ['Time to value', 'weeks to months', 'minutes'],
    ['Pricing', 'usually per user', 'by supplier count, unlimited users'],
  ]
)}
${callout('<strong>Honestly</strong><p>NexSource does not replace an ERP and does not try to. If you run stock, production orders and financial accounting, you need both. NexSource is the layer before that: everything that happens <em>before</em> an invoice lands in the ERP.</p>')}
`)}
${faqHtml('en', faq2)}
${relatedHtml('en', [
  ['/supplier-management-software/', 'Supplier management software', 'Master data, certificates, evaluation and orders in one system.'],
  ['/supplier-portal/', 'Supplier portal', 'How suppliers confirm orders and maintain their own data.'],
  ['/guides/', 'Guides', 'Practical guides and checklists for procurement teams.'],
])}`,
};

/* ---------------- Supplier portal ---------------- */
const faq3 = [
  { q: 'Do suppliers need an account?', a: 'No. Each supplier gets a secure personalised link and works directly through it — no registration, no password, no software to install. That is precisely why portals requiring accounts often go unused.' },
  { q: 'Can suppliers overwrite our data?', a: 'No. Every change arrives as an approval request. You see the old and the new value side by side and decide whether it is applied. Your data stays under your control.' },
  { q: 'What can suppliers do in the portal?', a: 'Update master data (addresses, contacts, bank details, VAT ID), provide documents and current certificates, and accept orders while reporting shipment and delivery.' },
];

export const supplierPortal = {
  lang: 'en',
  path: '/supplier-portal/',
  altPath: '/de/lieferantenportal/',
  title: 'Supplier Portal — Self-Service Without Accounts | NexSource',
  description:
    'No account required: suppliers update master data, upload certificates and confirm orders through a secure link — every change subject to your approval.',
  keywords: 'supplier portal, vendor portal software, supplier self-service, supplier onboarding portal',
  crumbs: [['/supplier-portal/', 'Supplier portal']],
  schema: [softwareSchema('en'), faqSchema(faq3)],
  body: `
${hero({
  lang: 'en',
  eyebrow: 'Supplier portal',
  h1: 'The supplier portal your suppliers will actually use',
  lead: 'A secure link instead of yet another login. Suppliers update master data, provide certificates and confirm orders themselves — and nothing reaches your system without your approval.',
  meta: M,
})}
${prose(`
${answerBox('<strong>In short:</strong> The NexSource supplier portal is self-service without registration. Suppliers maintain their own data and handle orders; you keep full data ownership through an approval step.')}

<h2>Why master data decays</h2>
<p>Supplier data loses quality every year — contacts change, companies rebrand, bank details are updated, certificates expire. Most SMBs have no process for this, only a trigger: something goes wrong, and then it gets fixed.</p>
<p>The wrong answer is to email every supplier once a year and retype the replies. The right answer is to move maintenance to where the information originates: the supplier.</p>
${callout('<strong>The most expensive master-data problem</strong><p>Changed bank details. Classic SMB payment fraud runs on a spoofed email announcing "new account details". A portal with a documented change request and a second pair of eyes is far more robust than an inbox.</p>', 'warn')}

<h2>How it works</h2>
<ol>
  <li><strong>Send the link</strong> — you enable portal access for a supplier; they receive a secure link issued to them.</li>
  <li><strong>The supplier maintains their data</strong> — addresses, contacts, VAT ID, bank details, certificates and documents.</li>
  <li><strong>Changes become requests</strong> — nothing is overwritten directly; you see old and new values side by side.</li>
  <li><strong>You approve</strong> — only then does the record change, logged with a timestamp.</li>
  <li><strong>Orders are handled</strong> — the supplier accepts, ships and delivers in the same portal.</li>
</ol>

<h2>Portal with and without account requirement</h2>
${table(
  ['', 'Classic portal with login', 'NexSource portal'],
  [
    ['Registration', '<span class="no">required</span>', '<span class="yes">not required</span>'],
    ['Typical adoption', 'low — forgotten passwords, access never set up', 'high — one click in the link'],
    ['Effort for the supplier', 'onboarding, training, support', 'effectively none'],
    ['Data ownership', 'often direct overwrite', '<span class="yes">approved by you</span>'],
    ['Cost per supplier access', 'frequently licensed', '<span class="yes">included</span>'],
  ]
)}
`)}
${faqHtml('en', faq3)}
${relatedHtml('en', [
  ['/supplier-management-software/', 'Supplier management software', 'All supplier data, certificates and contracts in one system.'],
  ['/procurement-software-small-business/', 'Procurement software', 'Order process with approval, status history and payment terms.'],
  ['/supplier-evaluation/', 'Supplier evaluation', 'Free weighted scorecard calculator with CSV export.'],
])}`,
};

/* ---------------- Supplier evaluation (tool) ---------------- */
const CRITERIA_EN = [
  ['Delivery reliability', 'On-time and in-full performance', 25],
  ['Quality', 'Complaint rate, specification conformity', 25],
  ['Price & terms', 'Price level, payment terms, price stability', 15],
  ['Communication', 'Responsiveness, reaction time, proactivity', 10],
  ['Flexibility', 'Handling of volume and schedule changes', 10],
  ['Problem solving', 'Response to complaints and disruptions', 10],
  ['Compliance & evidence', 'Certificates current, disclosures complete', 5],
];

function scorecardEn() {
  return `<div class="tool" id="scorecard">
  <h2>Calculate a supplier score</h2>
  <p class="tool-sub">Weighted evaluation across seven standard criteria. Move the sliders and the total updates instantly. Export as CSV for Excel.</p>
  <div class="field">
    <label for="score-supplier">Supplier (optional)</label>
    <input type="text" id="score-supplier" placeholder="e.g. Acme Ltd" />
  </div>
  <div class="score-grid">
${CRITERIA_EN.map(
  ([name, hint, weight]) => `    <div class="score-row" data-weight="${weight}" data-name="${name}">
      <div class="crit">${name} <small>${hint} · Weight ${weight}%</small></div>
      <input type="range" min="1" max="10" value="7" aria-label="${name}" />
      <output>7</output>
    </div>`
).join('\n')}
  </div>
  <div class="score-total">
    <div>
      <div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.07em;color:var(--text-soft)">Total score</div>
      <div id="score-verdict" style="font-size:.9375rem;color:var(--text-muted)"></div>
    </div>
    <div class="big"><span id="score-total">70</span><span style="font-size:1rem;color:var(--text-soft)"> / 100</span></div>
  </div>
  <div class="score-actions">
    <button type="button" class="btn btn-secondary" id="score-csv">Download as CSV</button>
    <a href="${APP}" class="btn btn-primary" data-cta="trial-tool">Store evaluations permanently</a>
  </div>
</div>`;
}

const faq4 = [
  { q: 'Which criteria belong in a supplier evaluation?', a: 'A mix of hard and soft criteria works best: delivery reliability, quality and price as the core, plus communication, flexibility, problem solving and evidence. What matters is less the exact selection than consistency — trends only become visible if you score the same way year after year.' },
  { q: 'How often should suppliers be evaluated?', a: 'A-suppliers at least annually, ideally twice a year. B and C suppliers annually or after an incident. Evaluating more often rarely produces new insight; less often makes the evaluation worthless.' },
  { q: 'Is supplier evaluation required by ISO 9001?', a: 'ISO 9001:2015 clause 8.4 requires you to determine and apply criteria for the evaluation, selection, monitoring of performance and re-evaluation of external providers, and to retain documented information on the results and any necessary actions. The method is up to you; the evidence is not.' },
];

export const supplierEvaluation = {
  lang: 'en',
  path: '/supplier-evaluation/',
  altPath: '/de/lieferantenbewertung/',
  title: 'Supplier Evaluation: Criteria & Free Calculator | NexSource',
  description:
    'Evaluate suppliers objectively: proven weighted criteria, a free browser-based scorecard calculator with CSV export, and what ISO 9001 clause 8.4 actually requires.',
  keywords: 'supplier evaluation, supplier scorecard, supplier evaluation criteria, vendor evaluation template, ISO 9001 supplier evaluation',
  crumbs: [['/supplier-evaluation/', 'Supplier evaluation']],
  extraScript: '\n    <script src="/tool-ui.js"></script>',
  schema: [
    softwareSchema('en'),
    faqSchema(faq4),
    {
      '@type': 'WebApplication',
      name: 'Supplier scorecard calculator',
      url: SITE + '/supplier-evaluation/',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
  ],
  body: `
${hero({
  lang: 'en',
  eyebrow: 'Supplier evaluation',
  h1: 'Supplier evaluation: criteria, weighting and a free calculator',
  lead: 'Score suppliers against defined criteria instead of gut feel. Use the calculator below for free — including CSV export for Excel.',
  ctaPrimary: { href: '#calculator', label: 'Go to the free calculator', cta: 'tool-hero' },
  meta: ['Free, no sign-up', 'Runs in your browser', 'CSV export for Excel'],
})}
      <section class="section" id="calculator">
        <div class="container">
${scorecardEn()}
        </div>
      </section>
${prose(`
${answerBox('<strong>In short:</strong> Supplier evaluation is the regular, criteria-based assessment of your suppliers. ISO 9001 requires it in clause 8.4. It only becomes genuinely useful when criteria are weighted, kept constant over years, and tied to concrete actions.')}

<h2>The seven standard criteria</h2>
${table(
  ['Criterion', 'What is measured', 'Data source'],
  [
    ['Delivery reliability', 'On-time and in-full per order', 'Order history: planned vs. actual delivery'],
    ['Quality', 'Complaint rate, specification deviations', 'QA records, incoming inspection'],
    ['Price & terms', 'Price level vs. market, payment terms, stability', 'Quote comparison, price history'],
    ['Communication', 'Availability, response time, proactive notice of delays', 'Procurement experience'],
    ['Flexibility', 'Handling short-notice volume and schedule changes', 'Planning experience'],
    ['Problem solving', 'Root-cause analysis and corrective action', 'Complaint records'],
    ['Compliance & evidence', 'Certificates current, disclosures complete and on time', 'Supplier record'],
  ]
)}

<h2>Turning a score into a decision</h2>
${table(
  ['Score', 'Classification', 'Action'],
  [
    ['85–100', 'A supplier', 'Grow strategically, consolidate volume, consider a framework agreement'],
    ['70–84', 'B supplier', 'Solid. Agree one or two measurable development goals'],
    ['50–69', 'C supplier', 'Action plan with a deadline, review in six months'],
    ['below 50', 'Risk', 'Build a second source, actively reduce dependency'],
  ]
)}

<h2>Five common mistakes</h2>
<ol>
  <li><strong>Once a year, only for the audit.</strong> Scores produced from memory in December are worthless.</li>
  <li><strong>Equal weighting everywhere.</strong> A good price then compensates for terrible delivery reliability — usually the wrong trade.</li>
  <li><strong>One person scoring alone.</strong> Quality belongs to QA, delivery to planning, terms to procurement.</li>
  <li><strong>No feedback to the supplier.</strong> A supplier who never sees their score cannot improve. The feedback conversation is the actual lever.</li>
  <li><strong>No history.</strong> Without a year-on-year comparison you see level but not trend — and trend is the more interesting signal.</li>
</ol>
<p>For permanent documentation with history, ownership and review dates you need a system — that is the supplier evaluation built into <a href="/supplier-management-software/">NexSource</a>.</p>
`)}
${faqHtml('en', faq4)}
${relatedHtml('en', [
  ['/supplier-management-software/', 'Supplier management software', 'Store evaluations permanently, with history and ownership.'],
  ['/vat-number-validator/', 'VAT number validator', 'Free EU VAT ID format and check-digit validation.'],
  ['/guides/supplier-management/', 'Supplier management guide', 'The full supplier lifecycle in seven phases.'],
])}`,
};

/* ---------------- VAT validator ---------------- */
const faqV = [
  { q: 'What does this tool check?', a: 'It checks the country-specific format and, where a published algorithm exists, the check digit — entirely inside your browser. That reliably catches typos and invented numbers. It cannot tell you whether a number is actually registered and currently valid; only the official EU VIES service can.' },
  { q: 'Why does VAT ID validation matter?', a: 'For an intra-EU supply to be zero-rated, a valid VAT identification number of the customer is a substantive requirement. If it was invalid at the time of supply, the tax authority can deny the exemption and you owe the VAT. That is why validation belongs in supplier and customer onboarding — and why the result must be documented with a date.' },
  { q: 'Is my input stored?', a: 'No. The check runs entirely in your browser. No request is sent to a server, nothing is stored, and no cookies are set.' },
];

export const vatValidator = {
  lang: 'en',
  path: '/vat-number-validator/',
  altPath: '/de/ust-idnr-pruefen/',
  title: 'Free EU VAT Number Validator | NexSource',
  description:
    'Free EU VAT number validator: checks format and check digit for all EU member states plus Northern Ireland, directly in your browser. No sign-up, no data transfer.',
  keywords: 'VAT number validator, EU VAT number check, VAT ID validation, VIES check, validate VAT number',
  crumbs: [['/vat-number-validator/', 'VAT number validator']],
  extraScript: '\n    <script src="/vat.js"></script>\n    <script src="/tool-ui.js"></script>',
  schema: [
    faqSchema(faqV),
    {
      '@type': 'WebApplication',
      name: 'EU VAT number validator',
      url: SITE + '/vat-number-validator/',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
  ],
  body: `
${hero({
  lang: 'en',
  eyebrow: 'Free tool',
  h1: 'EU VAT number validator',
  lead: 'Check VAT identification numbers from all EU member states for correct structure and check digit — instantly, free, without sign-up. Everything runs in your browser.',
  ctaPrimary: { href: '#check', label: 'Check a number', cta: 'tool-hero' },
  meta: ['All 27 EU states + Northern Ireland', 'No data transfer', 'No cookies'],
})}
      <section class="section" id="check">
        <div class="container">
          <form class="tool" id="vat-form">
            <h2>Validate a VAT identification number</h2>
            <p class="tool-sub">Include the country code, e.g. <code>DE136695976</code> or <code>ATU13585627</code>. Spaces and punctuation are ignored.</p>
            <div class="field">
              <label for="vat-input">VAT number</label>
              <input type="text" id="vat-input" name="vat" autocomplete="off" spellcheck="false" placeholder="DE123456789" />
              <span class="hint">Validation happens locally in your browser. No data is transmitted.</span>
            </div>
            <button type="submit" class="btn btn-primary">Validate</button>
            <div class="tool-result" id="vat-result" hidden></div>
          </form>
        </div>
      </section>
${prose(`
${answerBox('<strong>Important:</strong> Format and check-digit validation catches typos and invented numbers. Whether a number is actually issued and <em>currently valid</em> can only be answered by the official EU VIES service. For evidence towards a tax authority you need that official confirmation, documented with a date.')}

<h2>VAT number formats by country</h2>
${table(
  ['Country', 'Code', 'Structure', 'Example'],
  [
    ['Germany', 'DE', '9 digits', 'DE136695976'],
    ['Austria', 'AT', 'U + 8 characters', 'ATU13585627'],
    ['Netherlands', 'NL', '9 digits + B + 2 digits', 'NL123456782B12'],
    ['Belgium', 'BE', '10 digits (starting 0 or 1)', 'BE0776091951'],
    ['France', 'FR', '2 characters + 9 digits (SIREN)', 'FR40303265045'],
    ['Italy', 'IT', '11 digits', 'IT00743110157'],
    ['Spain', 'ES', '9 characters including letters', 'ESA12345674'],
    ['Poland', 'PL', '10 digits', 'PL5260001246'],
    ['Sweden', 'SE', '12 digits, ending in 01', 'SE123456789701'],
    ['Northern Ireland', 'XI', '9 or 12 digits', 'XI123456789'],
  ]
)}

<h2>Common pitfalls</h2>
<ul>
  <li><strong>Greece</strong> uses the code <code>EL</code>, not <code>GR</code>, for VAT purposes. The tool above accepts both.</li>
  <li><strong>United Kingdom</strong> numbers left VIES after Brexit — except Northern Ireland with the <code>XI</code> prefix.</li>
  <li><strong>Tax number ≠ VAT ID.</strong> A domestic tax number is a different identifier and cannot be used for intra-EU trade.</li>
  <li><strong>Stale checks.</strong> Numbers can be withdrawn. A validation from three years ago says little about today.</li>
</ul>

<h2>Build validation into onboarding</h2>
<p>In practice this rarely fails on knowledge and almost always on process: the check happens once when the record is created, never again, and is not documented anywhere. In <a href="/supplier-management-software/">NexSource</a>, VIES validation is part of supplier discovery and onboarding, alongside screening against EU, OFAC and UN sanctions lists — and the result stays attached to the supplier record.</p>
`)}
${faqHtml('en', faqV)}
${relatedHtml('en', [
  ['/supplier-management-software/', 'Supplier management software', 'Keep screening results documented on the supplier record.'],
  ['/supplier-evaluation/', 'Supplier evaluation', 'Free weighted scorecard with CSV export.'],
  ['/guides/', 'Guides', 'Practical guides for procurement teams.'],
])}`,
};

/* ---------------- Guides hub + pillar ---------------- */
const EN_POSTS = [
  ['/guides/supplier-management/', 'Guide', 'Supplier management: a practical guide for SMBs', 'The full supplier lifecycle in seven phases, with ownership, metrics that matter and the usual mistakes.'],
  ['/supplier-evaluation/', 'Tool', 'Supplier evaluation: criteria and free calculator', 'Weighted scoring across seven standard criteria, in your browser, with CSV export.'],
  ['/vat-number-validator/', 'Tool', 'EU VAT number validator', 'Check format and check digit for all EU member states, free and without sign-up.'],
];

export const guidesHub = {
  lang: 'en',
  path: '/guides/',
  altPath: '/de/ratgeber/',
  title: 'Guides: Procurement & Supplier Management | NexSource',
  description: 'Practical guides, checklists and free tools for procurement and supplier management in small and mid-sized businesses.',
  crumbs: [['/guides/', 'Guides']],
  schema: [{ '@type': 'CollectionPage', name: 'Procurement & supplier management guides', url: SITE + '/guides/' }],
  body: `
${hero({
  lang: 'en',
  eyebrow: 'Guides',
  h1: 'Guides: procurement & supplier management',
  lead: 'Practical guides, checklists and free tools for procurement teams in small and mid-sized businesses — written for the people who have to run the process.',
  ctaPrimary: { href: '#articles', label: 'Browse the guides', cta: 'guides-hero' },
})}
      <section class="section" id="articles">
        <div class="container" style="max-width:900px">
          <div class="post-list">
${EN_POSTS.map(
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

const faqG = [
  { q: 'What does supplier management include?', a: 'The full lifecycle of a supplier relationship: demand definition, sourcing, qualification and screening, onboarding with master data and evidence, operational order handling, regular evaluation, supplier development and, where necessary, de-listing.' },
  { q: 'Who owns supplier management in an SMB?', a: 'Usually procurement leads, with quality (certificates, complaints), finance (terms, payment) and management (approvals above a threshold) involved. Below 50 employees it often sits with one person — which is exactly why documentation matters most there.' },
];

export const guideSupplierManagement = {
  lang: 'en',
  path: '/guides/supplier-management/',
  altPath: '/de/ratgeber/lieferantenmanagement/',
  title: 'Supplier Management: A Practical Guide for SMBs | NexSource',
  description:
    'Supplier management in seven phases: demand, sourcing, qualification, onboarding, evaluation and development — with metrics and the common mistakes.',
  keywords: 'supplier management, supplier relationship management, supplier lifecycle, vendor management process',
  crumbs: [['/guides/', 'Guides'], ['/guides/supplier-management/', 'Supplier management']],
  ogType: 'article',
  schema: [
    faqSchema(faqG),
    {
      '@type': 'Article',
      headline: 'Supplier management: a practical guide for SMBs',
      datePublished: '2026-09-02',
      dateModified: '2026-09-02',
      inLanguage: 'en',
      mainEntityOfPage: { '@type': 'WebPage', '@id': SITE + '/guides/supplier-management/' },
      author: { '@id': SITE + '/#organization' },
      publisher: { '@id': SITE + '/#organization' },
    },
  ],
  body: `
${hero({
  lang: 'en',
  eyebrow: 'Guide · about 8 min read',
  h1: 'Supplier management: a practical guide for SMBs',
  lead: 'The complete supplier lifecycle in seven phases — with clear ownership, the metrics that actually say something, and the mistakes mid-sized companies make most often.',
})}
${prose(`
${answerBox('<strong>In short:</strong> Supplier management is the systematic steering of every supplier relationship across its lifecycle. For SMBs it is rarely about buying power and almost always about three things: security of supply, being able to evidence your process to customers and auditors, and not depending on one person’s memory.')}

<h2>The seven phases</h2>
<h3>1. Understand the demand</h3>
<p>Before sourcing, get clear on what is needed, in what quantity, to what specification, at what cadence. A surprising share of bad supplier decisions originate here rather than in the selection.</p>
<h3>2. Source suppliers</h3>
<p>Trade fairs, directories, referrals, tenders. The effort involved is why many companies stay with a supplier they are unhappy with. AI-assisted discovery lowers that barrier considerably.</p>
<h3>3. Qualify and screen</h3>
<p>Before the first order: existence and creditworthiness, <a href="/vat-number-validator/">VAT ID</a>, sanctions screening, certificates, references and — for critical parts — first-article inspection or an audit. Depth should follow risk.</p>
<h3>4. Onboard</h3>
<p>Capture master data completely, name contacts, record terms, file the framework agreement and quality assurance agreement, store certificates with expiry dates. This phase determines your data quality for years.</p>
<h3>5. Execute</h3>
<p>Orders with defined approval, documented dates and a traceable status history. The side effect: this history becomes the data you later evaluate objectively against.</p>
<h3>6. Evaluate</h3>
<p>Regularly, against fixed weighted criteria, over time. See <a href="/supplier-evaluation/">supplier evaluation</a> for criteria and a free calculator.</p>
<h3>7. Develop or exit</h3>
<p>Every evaluation should produce a decision: grow, develop (with agreed goals, a deadline and a review) or replace. Anything else is wishful thinking.</p>

<h2>Segmenting suppliers</h2>
${table(
  ['', 'Low supply risk', 'High supply risk'],
  [
    ['<strong>High volume</strong>', 'Leverage suppliers: negotiate terms, use competition', 'Strategic suppliers: partnership, build a second source, evaluate closely'],
    ['<strong>Low volume</strong>', 'Routine suppliers: minimise effort, consolidate, automate', 'Bottleneck suppliers: find alternatives, raise stock, document dependency'],
  ]
)}

<h2>Metrics that say something</h2>
${table(
  ['Metric', 'Calculation', 'What it tells you'],
  [
    ['On-time in-full (OTIF)', 'on-time and complete deliveries ÷ all deliveries', 'The single most important operational indicator'],
    ['Complaint rate', 'rejected deliveries ÷ all deliveries', 'Quality stability, independent of any single incident'],
    ['Supplier concentration', 'share of spend with the top 5 suppliers', 'Dependency risk'],
    ['Share of qualified suppliers', 'screened ÷ active suppliers', 'Audit readiness at a glance'],
    ['Certificates without valid dates', 'count', 'Direct audit risk — should be zero'],
  ]
)}

<h2>The most common mistakes</h2>
<ol>
  <li><strong>Treating everyone the same.</strong> Without segmentation, attention follows volume of noise rather than relevance.</li>
  <li><strong>Evaluating without consequence.</strong> A score with no resulting action is busywork.</li>
  <li><strong>Looking only at price.</strong> A supplier 4% cheaper with an 8% complaint rate is a loss.</li>
  <li><strong>No second source for critical parts.</strong> Building one takes months — you do not start when the outage has already happened.</li>
  <li><strong>Not documenting knowledge.</strong> Agreements, alternatives and experience belong in a system, not a head.</li>
  <li><strong>Never refreshing master data.</strong> This is exactly what a <a href="/supplier-portal/">supplier portal</a> is for.</li>
</ol>
`)}
${faqHtml('en', faqG)}
${relatedHtml('en', [
  ['/supplier-management-software/', 'Supplier management software', 'Run the process described here in one system.'],
  ['/supplier-evaluation/', 'Supplier evaluation', 'Criteria, weighting and a free calculator.'],
  ['/supplier-portal/', 'Supplier portal', 'Keep master data current without retyping it.'],
])}`,
};

/* ---------------- Demo ---------------- */
const MAIL = 'info@getnexsource.com';
const MAIL_SUBJECT_EN = encodeURIComponent('NexSource demo request');
const MAIL_BODY_EN = encodeURIComponent(
  'Hi,\n\nwe would like to take a look at NexSource.\n\n' +
    'Company: \nIndustry: \nNumber of suppliers: \n' +
    'What this is about: \n\nBest regards\n'
);

export const demoEn = {
  lang: 'en',
  path: '/demo/',
  altPath: '/de/demo/',
  title: 'Book a Demo — 20 Minutes, On Your Own Use Case | NexSource',
  description:
    'A personal NexSource demo: 20 minutes, no sales pressure, walked through your actual supplier process. Or start the 14-day free trial straight away.',
  crumbs: [['/demo/', 'Book a demo']],
  schema: [
    {
      '@type': 'ContactPage',
      name: 'Book a demo',
      url: SITE + '/demo/',
      mainEntity: { '@id': SITE + '/#organization', email: MAIL },
    },
  ],
  cta: { title: 'Rather try it yourself?', text: 'The trial is available immediately — no call, no credit card.' },
  body: `
      <section class="section section-narrow">
        <div class="container">
          <div class="contact-grid">
            <div>
              <span class="eyebrow">Demo</span>
              <h1 style="margin:.6rem 0 1rem;font-size:clamp(1.9rem,3vw,2.6rem)">Your supplier process — shown in NexSource in 20 minutes.</h1>
              <p class="lead" style="margin-bottom:1.5rem">
                20 minutes over video, no slide deck. We walk through one of your real suppliers:
                master data, certificates, evaluation, purchase order. If NexSource is not a fit,
                we'll tell you.
              </p>
              <ul class="checks">
                <li>No sales pressure, no contract talk in the first call</li>
                <li>Reply within one business day</li>
                <li>Straight with the founder, not a call centre</li>
                <li>With your own sample data if you like</li>
              </ul>
              <div class="callout" style="margin-top:2rem">
                <strong>Don't want a demo at all?</strong>
                <p>Perfectly fine. <a href="${APP}" data-cta="trial-demo-page">Start the 14-day trial directly</a> — no credit card, live in minutes.</p>
              </div>
            </div>

            <div class="tool contact-card">
              <h2>Just email us</h2>
              <p class="tool-sub">One email is enough — no form, no newsletter.</p>

              <a class="mail-link" href="mailto:${MAIL}?subject=${MAIL_SUBJECT_EN}&amp;body=${MAIL_BODY_EN}" data-cta="demo-mail">
                <span class="mail-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>
                </span>
                <span>
                  <strong>${MAIL}</strong>
                  <small>Opens your mail client with a prepared message</small>
                </span>
              </a>

              <p class="mail-hint">So the first reply is already useful, tell us briefly:</p>
              <ul class="checks mail-checks">
                <li>Company and industry</li>
                <li>Roughly how many suppliers</li>
                <li>What bothers you today (spreadsheets, certificate deadlines, customer audits …)</li>
              </ul>

              <a href="${APP}" class="btn btn-primary btn-block" style="margin-top:1.35rem" data-cta="trial-demo-card">Start 14-day free trial</a>
            </div>
          </div>
        </div>
      </section>`,
};
