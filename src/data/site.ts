import { IMG } from './images';
import type { IconName } from '../components/Icons';

export interface NavItem { to: string; label: string }

export const NAV: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/insights', label: 'Insights' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

export const HERO_PILLS = [
  'HR & Staffing',
  'Web Development',
  'RPA & Automation',
  'Custom Software',
  'Data & Cloud',
  'Managed IT',
];

export const CREDENTIALS = [
  'UiPath & Power Automate',
  'Microsoft 365 & Azure',
  'React, Node.js, .NET, Python',
  'ISO-aligned delivery process',
];

/* ---------- service summary cards (home) ---------- */
export interface ServiceCard {
  icon: IconName;
  kick: string;
  title: string;
  body: string;
  points: string[];
}

export const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: 'people',
    kick: '01 — Talent',
    title: 'HR & Staffing Solutions',
    body: 'Sourcing, screening and onboarding handled end to end, with a recruiter who knows the role well enough to defend the shortlist.',
    points: [
      'Contract and contract-to-hire staffing',
      'Permanent and leadership hiring',
      'Recruitment process outsourcing (RPO)',
      'Payroll, compliance and background checks',
    ],
  },
  {
    icon: 'browser',
    kick: '02 — Digital',
    title: 'Web Development',
    body: 'Corporate sites, portals and storefronts built to load fast, rank well and stay editable by your marketing team.',
    points: [
      'Corporate websites and microsites',
      'Customer and partner portals',
      'E-commerce and payment integration',
      'Core Web Vitals and SEO engineering',
    ],
  },
  {
    icon: 'bot',
    kick: '03 — Automation',
    title: 'Intelligent Automation & RPA',
    body: 'Bots that take the repetitive middle out of a process, built on the platform you already license and documented for the people who inherit them.',
    points: [
      'UiPath and Power Automate development',
      'Invoice, claims and KYC processing',
      'Document understanding and OCR',
      'Bot support, monitoring and hypercare',
    ],
  },
  {
    icon: 'code',
    kick: '04 — Engineering',
    title: 'Custom Software Development',
    body: 'Line-of-business applications for the processes no product off the shelf actually fits, delivered in two-week increments you can see running.',
    points: [
      'Web and mobile application development',
      'API design and system integration',
      'Legacy modernisation and re-platforming',
      'QA, UAT support and release management',
    ],
  },
  {
    icon: 'database',
    kick: '05 — Data',
    title: 'Data, Cloud & Analytics',
    body: 'Reporting people trust, on infrastructure that costs what you expect at the end of the month.',
    points: [
      'Power BI and operational dashboards',
      'Data migration and warehouse setup',
      'Azure and AWS deployment',
      'CI/CD pipelines and DevOps',
    ],
  },
  {
    icon: 'shield',
    kick: '06 — Support',
    title: 'Managed IT & Application Support',
    body: 'An L1–L3 desk that owns the ticket queue, the SLA and the root-cause note that stops it happening twice.',
    points: [
      'Application and bot support desks',
      'Infrastructure monitoring',
      'Patching, backup and access management',
      'Extended-hours and weekend coverage',
    ],
  },
];

/* ---------- home: problem rows ---------- */
export interface DetailRow {
  img: string;
  alt: string;
  eyebrow?: string;
  title: string;
  body: string;
  tags: string[];
  link?: { to: string; label: string };
  receive?: string;
}

export const PROBLEM_ROWS: DetailRow[] = [
  {
    img: IMG.hiringPanel,
    alt: 'Hiring panel interviewing a candidate',
    title: '“We are hiring for roles we cannot describe yet.”',
    body: 'New systems create roles that did not exist last year, and job descriptions written from templates attract the wrong people. We sit with the hiring manager first, turn the vague brief into a real scorecard, and then go looking. Candidates arrive with a written assessment against that scorecard, not just a CV.',
    tags: ['Role scorecards', 'Technical screening', 'Salary benchmarking', 'Offer management'],
    link: { to: '/services', label: 'See our talent process' },
  },
  {
    img: IMG.processMetrics,
    alt: 'Analyst reviewing process metrics on screen',
    title: '“Our team spends half the day copying data between systems.”',
    body: 'Most back-office work is a chain of small, rule-based steps that nobody has ever written down. We map the chain, measure how long each step really takes, and automate the parts where the rules hold. The parts where judgement is needed stay with your people, with the context handed to them cleanly.',
    tags: ['Process discovery', 'Attended & unattended bots', 'Exception handling', 'Audit logging'],
    link: { to: '/insights', label: 'Read how we size an automation' },
  },
  {
    img: IMG.developerCode,
    alt: 'Developer writing application code',
    title: '“The system works, but only the person who built it understands it.”',
    body: 'Software written in a hurry becomes a dependency on one employee. We take over that codebase, document what it actually does, cover the risky paths with tests, and rebuild the parts that block you. You end up with something a second developer can pick up on their first week.',
    tags: ['Code audit', 'Refactor & test coverage', 'Documentation', 'Handover training'],
    link: { to: '/contact', label: 'Ask for a code review' },
  },
];

/* ---------- services page: full rows ---------- */
export const SERVICE_ROWS: DetailRow[] = [
  {
    img: IMG.serviceHr,
    alt: 'Recruiter interviewing a candidate',
    eyebrow: 'Service 01',
    title: 'HR & Staffing Solutions',
    body: 'Hiring fails at the brief far more often than at the interview. We start by writing a scorecard with the hiring manager — the outcomes the person must deliver in the first year — and screen every candidate against it. You receive shortlists with written assessments, not a folder of CVs.',
    tags: ['Contract staffing', 'Permanent hiring', 'RPO', 'Payroll & compliance', 'Background verification', 'Bulk hiring desks'],
    receive: 'role scorecard, screened shortlist with assessment notes, interview coordination, offer and joining support, and a replacement guarantee window.',
  },
  {
    img: IMG.serviceWeb,
    alt: 'Designer and developer reviewing a website layout',
    eyebrow: 'Service 02',
    title: 'Web Development',
    body: 'A website earns its cost through two things: how quickly it loads and how easily your team can change it. We build on modern frameworks or a headless CMS, ship with performance budgets, and train your marketing team to publish without raising a ticket.',
    tags: ['Corporate websites', 'Customer portals', 'E-commerce', 'Headless CMS', 'Accessibility', 'SEO engineering'],
    receive: 'design system, responsive build, CMS training, analytics and search console setup, performance report and a 30-day post-launch fix window.',
  },
  {
    img: IMG.serviceAutomation,
    alt: 'Automation engineer configuring a workflow',
    eyebrow: 'Service 03',
    title: 'Intelligent Automation & RPA',
    body: 'We measure a process before we automate it, because roughly a third of the candidates people bring us are better fixed by a settings change or an API than by a bot. For the rest, we build on UiPath or Power Automate with proper exception handling, queue management and logging that an auditor can follow.',
    tags: ['Process discovery', 'UiPath', 'Power Automate', 'Document understanding', 'Orchestrator & queues', 'Bot support'],
    receive: 'process definition document, solution design, tested bot, exception matrix, runbook, hypercare period and a benefit report measured against the baseline.',
  },
  {
    img: IMG.serviceSoftware,
    alt: 'Application source code on a monitor',
    eyebrow: 'Service 04',
    title: 'Custom Software Development',
    body: 'For the processes where no product fits, we build the smallest application that solves the problem completely. Requirements are captured as user stories with acceptance criteria, work is demonstrated every two weeks, and the code lives in your repository from the first commit.',
    tags: ['Web applications', 'Mobile apps', 'API & integrations', 'Legacy modernisation', 'QA automation', 'Release management'],
    receive: 'backlog with acceptance criteria, fortnightly demos, test coverage report, deployment pipeline, technical documentation and handover training.',
  },
  {
    img: IMG.serviceData,
    alt: 'Team reviewing analytics reports',
    eyebrow: 'Service 05',
    title: 'Data, Cloud & Analytics',
    body: 'Reporting only helps when everyone agrees on the numbers. We consolidate the sources, define each metric in writing, and build dashboards that answer a specific decision rather than showing everything at once. Infrastructure is sized for your actual load and reviewed for cost every quarter.',
    tags: ['Power BI', 'Data migration', 'Azure & AWS', 'CI/CD', 'Monitoring', 'Cost optimisation'],
    receive: 'metric dictionary, data pipeline, dashboards, access model, infrastructure-as-code and a cost baseline report.',
  },
  {
    img: IMG.serviceSupport,
    alt: 'Support desk team at work',
    eyebrow: 'Service 06',
    title: 'Managed IT & Application Support',
    body: 'A support desk is only as good as its second week. Ours starts with a knowledge transfer and a written service catalogue, then reports monthly on ticket volume, resolution time and the recurring issues we have permanently removed.',
    tags: ['L1–L3 support', 'Bot monitoring', 'Incident management', 'Patching & backup', 'Access management', 'Extended hours'],
    receive: 'service catalogue, SLA matrix, ticketing setup, monthly service report and a quarterly problem-management review.',
  },
];

/* ---------- delivery method ---------- */
export interface Step { title: string; body: string }

export const DELIVERY_STEPS: Step[] = [
  { title: 'Discover', body: 'Workshops with the people who do the work. We record volumes, exceptions and the constraints nobody wrote down.' },
  { title: 'Blueprint', body: 'Scope, architecture, effort and a written definition of done, priced before anyone writes a line of code.' },
  { title: 'Build', body: 'Two-week increments with a working demo at the end of each. Feedback changes the next sprint, not the budget.' },
  { title: 'Deploy', body: 'UAT with your users, a rollback plan, and go-live scheduled around your business calendar rather than ours.' },
  { title: 'Run', body: 'Hypercare, monitoring and a monthly report on what the work actually saved. Then we hand over or stay on.' },
];

export const FIRST_30_DAYS: Step[] = [
  { title: 'Week 1', body: 'Discovery sessions, access requests raised, and a written summary of what we heard for you to correct.' },
  { title: 'Week 2', body: 'Blueprint delivered: scope, approach, team, effort, risks and the definition of done.' },
  { title: 'Week 3', body: 'Environment set up, repository and boards created, first increment starts against agreed priorities.' },
  { title: 'Week 4', body: 'First working demo, plus the reporting cadence and escalation path agreed in writing.' },
  { title: 'Ongoing', body: 'Fortnightly demos, a monthly outcome report, and a quarterly review of whether the model still fits.' },
];

export const HIRING_STEPS: Step[] = [
  { title: 'Screening call', body: 'Thirty minutes on your experience and what you want next. You get the salary band in this call.' },
  { title: 'Technical round', body: 'A real problem from our work, discussed together. No trick puzzles, no unpaid take-home projects.' },
  { title: 'Team conversation', body: 'Meet the lead you would report to and one peer. Ask them anything, including what frustrates them.' },
  { title: 'Offer', body: 'Written offer within three working days of the last round, with the role scorecard attached.' },
  { title: 'Onboarding', body: 'Laptop and access ready on day one, mentor assigned, first project brief in week one.' },
];

/* ---------- stats ---------- */
export interface Stat { value: number; label: string }

export const STATS: Stat[] = [
  { value: 120, label: 'Processes automated' },
  { value: 480, label: 'Candidates placed' },
  { value: 45, label: 'Client organisations' },
  { value: 96, label: 'Percent contract renewal' },
];

/* ---------- engagement models ---------- */
export interface SimpleCard { kick?: string; title: string; body: string; points?: string[] }

export const ENGAGEMENT_MODELS: SimpleCard[] = [
  { kick: 'Model A', title: 'Staff augmentation', body: 'Our specialists join your team, follow your process and report to your manager. Monthly rate, one month notice.', points: ['Best for known scope, your own delivery lead', 'Replacement guarantee inside 30 days'] },
  { kick: 'Model B', title: 'Dedicated team', body: 'A named squad with a delivery lead, working only on your roadmap and scaling up or down each quarter.', points: ['Best for continuous product work', 'Shared backlog and sprint reporting'] },
  { kick: 'Model C', title: 'Fixed-scope project', body: 'A defined deliverable, a fixed price and a fixed date, quoted after the blueprint stage rather than before it.', points: ['Best for well-understood builds', 'Change requests priced in writing'] },
  { kick: 'Model D', title: 'Managed service', body: 'We own an outcome — a support desk, a bot estate, a hiring pipeline — against an SLA and a monthly fee.', points: ['Best for steady-state operations', 'Reported against agreed service levels'] },
];

/* ---------- industries ---------- */
export const INDUSTRY_BRIEF: SimpleCard[] = [
  { title: 'Banking & Financial Services', body: 'KYC verification, reconciliation, loan file processing and audit-ready logging for regulated workflows.' },
  { title: 'Healthcare & Life Sciences', body: 'Claims handling, eligibility checks, provider data management and patient record integrations built around privacy rules.' },
  { title: 'Manufacturing', body: 'Purchase-order automation, vendor onboarding, plant reporting and shop-floor to ERP data flows.' },
  { title: 'Retail & E-commerce', body: 'Catalogue operations, order and returns processing, marketplace reconciliation and storefront engineering.' },
  { title: 'Logistics & Supply Chain', body: 'Freight documentation, shipment tracking updates, invoice matching and carrier portal automation.' },
  { title: 'Professional Services', body: 'Timesheet and billing operations, resource planning tools, and recruitment support for consulting benches.' },
];

export const INDUSTRY_DETAIL: SimpleCard[] = [
  {
    kick: 'Sector',
    title: 'Banking, Financial Services & Insurance',
    body: 'Regulated workflows where every automated action needs an audit trail and every exception needs a named owner.',
    points: ['KYC and customer onboarding verification', 'Account reconciliation and exception reporting', 'Loan file processing and document checks', 'Contract staffing for operations and compliance teams'],
  },
  {
    kick: 'Sector',
    title: 'Healthcare & Life Sciences',
    body: 'High-volume administrative work around clinical operations, handled with strict access control and privacy boundaries.',
    points: ['Claims submission, status checks and denial handling', 'Eligibility and benefits verification', 'Provider and patient data management', 'Integration between practice systems and portals'],
  },
  {
    kick: 'Sector',
    title: 'Manufacturing',
    body: 'Bridging the gap between plant systems and enterprise software, where data is entered twice more often than anyone admits.',
    points: ['Purchase order and goods-receipt automation', 'Vendor onboarding and master data updates', 'Production and downtime reporting', 'Engineering and plant-support recruitment'],
  },
  {
    kick: 'Sector',
    title: 'Retail & E-commerce',
    body: 'Operations that scale with order volume, where a manual step becomes a bottleneck the week a campaign works.',
    points: ['Catalogue and pricing operations', 'Order, returns and refund processing', 'Marketplace and payment reconciliation', 'Storefront development and performance work'],
  },
  {
    kick: 'Sector',
    title: 'Logistics & Supply Chain',
    body: 'Document-heavy processes spread across portals that were never designed to talk to each other.',
    points: ['Freight document extraction and validation', 'Shipment status updates across carrier portals', 'Invoice matching and dispute handling', 'Control-tower dashboards'],
  },
  {
    kick: 'Sector',
    title: 'Professional & IT Services',
    body: 'Firms whose product is their people, where utilisation, billing accuracy and bench management decide the margin.',
    points: ['Timesheet, billing and invoice operations', 'Resource planning and utilisation reporting', 'Internal tools and client portals', 'Bench and project-based staffing'],
  },
];

export const COMPLIANCE: SimpleCard[] = [
  { title: 'Least-privilege access', body: 'Our team works on your systems with named accounts scoped to the task, revoked at the end of the engagement and reviewed monthly during it.' },
  { title: 'Data stays where it is', body: 'We do not copy production data to local machines. Testing uses masked or synthetic datasets unless you specifically authorise otherwise in writing.' },
  { title: 'Traceable change', body: 'Every deployment is version-controlled and approved. Bots log each transaction with inputs, outputs and outcome so an auditor can reconstruct the day.' },
];

/* ---------- testimonials ---------- */
export interface Testimonial { quote: string; initials: string; name: string; org: string }

export const TESTIMONIALS: Testimonial[] = [
  { quote: 'They pushed back on our original scope, which nobody else did. The build ended up smaller than we asked for and solved more than we expected.', initials: 'OH', name: 'Operations Head', org: 'Healthcare services, Ahmedabad' },
  { quote: 'Three shortlists, three offers accepted. The screening notes were detailed enough that our panel could skip a full interview round.', initials: 'TA', name: 'Talent Acquisition Lead', org: 'NBFC, Mumbai' },
  { quote: 'The handover documentation was the difference. Our own team has been running and changing the bots since the third month without calling anyone.', initials: 'PM', name: 'Program Manager', org: 'Manufacturing group, Pune' },
];

/* ---------- faq ---------- */
export interface Faq { q: string; a: string }

export const FAQS: Faq[] = [
  { q: 'How quickly can you start?', a: 'Staffing mandates open within 48 hours of the role brief. Development and automation work starts after the discovery workshop, typically 7–10 working days from the first call, because we will not quote a build we have not scoped.' },
  { q: 'Do you work with our existing licences?', a: 'Yes. If you already own UiPath, Power Platform, Azure or a CMS, we build on it. We only recommend a new platform when the current one genuinely cannot do the job, and we will show you the comparison.' },
  { q: 'What happens after go-live?', a: 'Every delivery includes a hypercare window at no extra cost, plus written runbooks and a training session for your team. After that you choose: take it in-house, or keep us on a managed-service SLA.' },
  { q: 'Who owns the code and the data?', a: 'You do, from day one. Source code sits in your repository, credentials sit in your vault, and the contract assigns all intellectual property created during the engagement to your organisation.' },
  { q: 'Can you support a small team?', a: 'Most of our work starts small — one automation, one hire, one page. We would rather prove the working relationship on a contained piece of work than sell a programme up front.' },
];

/* ---------- about ---------- */
export const COMMITMENTS: SimpleCard[] = [
  { kick: 'Commitment', title: 'Estimates you can hold us to', body: 'We quote after discovery, in writing, with the assumptions listed. If an assumption turns out to be wrong, you see the revised number before the work happens.' },
  { kick: 'Commitment', title: 'The people you interviewed', body: 'The engineers and recruiters shown in the proposal are the ones assigned. Replacements are proposed to you, not swapped in quietly.' },
  { kick: 'Commitment', title: 'Documentation as a deliverable', body: 'Runbooks, architecture notes and handover training ship with the work, not after a follow-up purchase order.' },
  { kick: 'Commitment', title: 'An exit that works', body: 'If you end the engagement, we hand over cleanly — credentials, code, context and a transition call with whoever takes it on.' },
];

export const PRACTICE_GROUPS: SimpleCard[] = [
  {
    title: 'People',
    body: 'Recruiters, sourcers and HR operations specialists covering technical and non-technical hiring, payroll and compliance across India and offshore delivery centres.',
    points: ['Technology and engineering recruitment', 'Volume and bulk hiring desks', 'HR shared services and payroll'],
  },
  {
    title: 'Technology',
    body: 'Developers, automation engineers, QA and cloud specialists. This is where web, custom software, RPA and data work is delivered.',
    points: ['Full-stack and mobile engineering', 'RPA and intelligent document processing', 'Cloud, DevOps and analytics'],
  },
  {
    title: 'Business Support',
    body: 'The operational layer that keeps engagements predictable: project management, service desk, documentation and quality assurance.',
    points: ['Delivery and project management', 'Application and bot support desks', 'Process documentation and audits'],
  },
];

/* ---------- services page: tech stack ---------- */
export const TECH_STACK: SimpleCard[] = [
  { title: 'Front end', body: '', points: ['React & Next.js', 'TypeScript', 'Tailwind & design systems'] },
  { title: 'Back end', body: '', points: ['Node.js & .NET', 'Python & Java', 'REST & GraphQL APIs'] },
  { title: 'Automation', body: '', points: ['UiPath & Orchestrator', 'Power Automate', 'Document understanding & OCR'] },
  { title: 'Platform', body: '', points: ['Azure & AWS', 'SQL Server & PostgreSQL', 'Docker & CI/CD pipelines'] },
];

/* ---------- careers ---------- */
export const PERKS: SimpleCard[] = [
  { title: 'Certification support', body: 'Exam fees and study time covered for UiPath, Microsoft and cloud certifications relevant to your track.' },
  { title: 'Project variety', body: 'Rotation across clients and domains, so two years here does not look like the same year twice.' },
  { title: 'Mentor from day one', body: 'A named senior engineer or recruiter reviews your work weekly for the first six months.' },
  { title: 'Hybrid by default', body: 'Three days in the Pune office, two remote, with flexibility around client go-live windows.' },
];

export interface Job { title: string; blurb: string; location: string; experience: string }

export const JOBS: Job[] = [
  { title: 'RPA Developer — UiPath', blurb: 'REFramework, Orchestrator, queue management, document understanding.', location: 'Pune · Hybrid', experience: '2–5 years' },
  { title: 'Full-Stack Developer — React & Node.js', blurb: 'Client-facing portals and internal tools, TypeScript throughout.', location: 'Pune · Hybrid', experience: '3–6 years' },
  { title: 'Technical Recruiter', blurb: 'Engineering and automation hiring, scorecard-based screening.', location: 'Pune · On-site', experience: '1–4 years' },
  { title: 'Business Analyst — Process Automation', blurb: 'Process discovery, PDD authoring, benefit measurement.', location: 'Pune · Hybrid', experience: '2–5 years' },
  { title: 'QA Engineer — Automation', blurb: 'Test strategy, Selenium or Playwright, release verification.', location: 'Remote · India', experience: '2–5 years' },
  { title: 'Support Engineer — Applications & Bots', blurb: 'L1–L2 triage, incident handling, extended-hours rotation.', location: 'Pune · On-site', experience: '0–3 years' },
];

/* ---------- contact ---------- */
export const SERVICE_OPTIONS = [
  'HR & staffing solutions',
  'Web development',
  'Intelligent automation / RPA',
  'Custom software development',
  'Data, cloud & analytics',
  'Managed IT & support',
  'Something else',
];

export const TIMELINE_OPTIONS = [
  'Exploring options',
  'Within a month',
  'This quarter',
  'Urgent',
];
