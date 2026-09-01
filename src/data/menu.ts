/**
 * Header navigation tree.
 *
 * Mirrors the "Header Sequence" change request: two mega-menus, each item
 * backed by a real page at /services/<slug>. Copy here describes what each
 * offering is — swap in your own positioning before launch.
 */

export interface MenuItem {
  label: string;
  slug: string;
  /** One line, shown under the label inside the menu. */
  blurb: string;
  /** Opening paragraph on the item's page. */
  intro: string;
  points: string[];
  children?: MenuItem[];
}

export interface MegaMenuDef {
  label: string;
  /** 'list' renders one flat panel; 'columns' renders grouped columns. */
  layout: 'list' | 'columns';
  items: MenuItem[];
}

export const SERVICES_SOLUTIONS: MegaMenuDef = {
  label: 'Services & Solutions',
  layout: 'list',
  items: [
    {
      label: 'Staffing and Recruiting Services',
      slug: 'staffing-and-recruiting-services',
      blurb: 'Sourcing, screening and onboarding across every level',
      intro:
        'End-to-end hiring support for permanent, contract and volume roles. We take the brief, agree a scorecard with the hiring manager, and run sourcing through to the joining date so your team only spends time on candidates worth interviewing.',
      points: [
        'Role scorecards written with the hiring manager before sourcing starts',
        'Screened shortlists with written assessments, not forwarded CVs',
        'Interview coordination, offer management and joining support',
        'Replacement guarantee window on every placement',
      ],
    },
    {
      label: 'Search Services',
      slug: 'search-services',
      blurb: 'Mapped, confidential search for senior and scarce roles',
      intro:
        'For roles where the right person is not looking, and where an open advert would be counterproductive. We map the market, approach candidates directly and manage the process confidentially on your behalf.',
      points: [
        'Market mapping and target company lists agreed up front',
        'Direct, confidential approach to passive candidates',
        'Structured assessment against the agreed success profile',
        'Regular longlist reviews so you see the market, not just the shortlist',
      ],
    },
    {
      label: 'Talent Advisory Services',
      slug: 'talent-advisory-services',
      blurb: 'Benchmarking, org design and hiring process review',
      intro:
        'Advisory work for the decisions that sit around hiring: what a role should pay, how a team should be structured, and why offers are being declined. Delivered as written findings you can act on rather than a workshop deck.',
      points: [
        'Salary benchmarking and compensation band design',
        'Organisation and team structure reviews',
        'Hiring process audits, including drop-off analysis',
        'Employer positioning and candidate experience review',
      ],
    },
    {
      label: 'Managed Delivery Services',
      slug: 'managed-delivery-services',
      blurb: 'We own the outcome against an agreed service level',
      intro:
        'Rather than supplying people into your process, we take responsibility for a defined outcome — a support desk, a bot estate, a delivery workstream — with a named lead, an SLA and monthly reporting against it.',
      points: [
        'A named delivery lead accountable for the outcome',
        'Agreed service levels with monthly reporting',
        'Team scaled up or down at each review point',
        'Documentation and handover included as a deliverable',
      ],
    },
    {
      label: 'Workforce Management Services',
      slug: 'workforce-management-services',
      blurb: 'Compliance, payroll and administration for a mixed workforce',
      intro:
        'The administrative layer under a workforce that mixes permanent staff, contractors and vendors. We handle onboarding, compliance, timesheets and payroll so the operational load does not land on your line managers.',
      points: [
        'Onboarding, documentation and background verification',
        'Timesheet, attendance and leave administration',
        'Statutory compliance and audit-ready records',
        'Consolidated reporting across employment types',
      ],
    },
  ],
};

export const WORKFORCE_SOLUTIONS: MegaMenuDef = {
  label: 'Workforce Solutions',
  layout: 'columns',
  items: [
    {
      label: 'Permanent Recruitment',
      slug: 'permanent-recruitment',
      blurb: 'Full-time hiring, from brief to joining date',
      intro:
        'Permanent hiring run against a written scorecard rather than a job description template, so the shortlist can be defended and the panel can move quickly.',
      points: [
        'Scorecard-based briefing with the hiring manager',
        'Sourcing across job boards, referrals and direct approach',
        'Written assessment attached to every shortlisted candidate',
        'Offer negotiation and joining follow-up',
      ],
      children: [
        {
          label: 'Recruitment Process Outsourcing',
          slug: 'recruitment-process-outsourcing',
          blurb: 'Your hiring function, run by our team',
          intro:
            'You hand over all or part of the hiring function — sourcing, screening, coordination, reporting — and we run it inside your process, on your systems, under your employer brand.',
          points: [
            'Dedicated recruiters embedded in your process',
            'Work inside your ATS, under your employer brand',
            'Agreed cost per hire and time to fill targets',
            'Weekly pipeline reporting against open mandates',
          ],
        },
        {
          label: 'Executive Search',
          slug: 'executive-search',
          blurb: 'Leadership hiring, mapped and approached directly',
          intro:
            'Retained search for leadership appointments, where the shortlist has to be built rather than collected. Confidential throughout, with the market mapped before anyone is approached.',
          points: [
            'Success profile agreed with the board or hiring sponsor',
            'Full market map before the first approach',
            'Confidential handling of both client and candidate',
            'Structured referencing and onboarding support',
          ],
        },
      ],
    },
    {
      label: 'Contract Staffing',
      slug: 'contract-staffing',
      blurb: 'Specialists on your team, on a monthly rate',
      intro:
        'Contract and contract-to-hire resourcing for known scope, where your own delivery lead owns the backlog. Monthly rate, one month notice, replacement guarantee inside the first thirty days.',
      points: [
        'Contract, contract-to-hire and project-duration engagements',
        'Compliance, payroll and statutory handling included',
        'Replacement guarantee inside 30 days',
        'Conversion to permanent at any agreed point',
      ],
      children: [
        {
          label: 'Talent Based Outsourcing',
          slug: 'talent-based-outsourcing',
          blurb: 'A skill pool held and managed on your behalf',
          intro:
            'We hold a pool of specialists against your forecast demand and deploy them as work arrives, so you are not restarting a hiring cycle every time a project is approved.',
          points: [
            'Skill pool sized against your forecast',
            'Deployment within days rather than hiring cycles',
            'Bench and utilisation managed by us, not billed to you',
            'Consolidated monthly invoicing',
          ],
        },
        {
          label: 'Payroll Management System',
          slug: 'payroll-management-system',
          blurb: 'Payroll, statutory filings and audit-ready records',
          intro:
            'Payroll processing and statutory compliance for contract and outsourced staff, with the records an auditor would ask for kept current rather than assembled at year end.',
          points: [
            'Monthly payroll processing and payslip distribution',
            'Statutory deductions, filings and returns',
            'Reimbursement and expense handling',
            'Audit-ready registers and reports on demand',
          ],
        },
      ],
    },
    {
      label: 'Workforce Transformation',
      slug: 'workforce-transformation',
      blurb: 'Reshaping teams, capability and careers',
      intro:
        'Support for organisations changing shape — new operating models, restructures, or capability gaps that hiring alone will not close. The work is planned with HR and delivered with the line managers who have to live with it.',
      points: [
        'Capability assessment against the target operating model',
        'Redeployment and reskilling planning',
        'Manager enablement through the change',
        'Communication and transition support',
      ],
      children: [
        {
          label: 'Leadership Development',
          slug: 'leadership-development',
          blurb: 'Structured development for current and next leaders',
          intro:
            'Development programmes for people moving into or through leadership roles, built around the decisions they actually face rather than a generic curriculum.',
          points: [
            'Capability framework agreed with your leadership team',
            'Assessment and individual development plans',
            'Cohort workshops plus one-to-one coaching',
            'Progress measured against the framework, not attendance',
          ],
        },
        {
          label: 'Outplacement Services',
          slug: 'outplacement-services',
          blurb: 'Support for people leaving the organisation',
          intro:
            'Practical, time-bound support for exiting employees: CV and positioning work, interview preparation and active introductions, so the transition is short and the separation stays respectful.',
          points: [
            'One-to-one career consultation and CV rework',
            'Interview preparation and market briefing',
            'Active introductions into our client network',
            'Progress reporting back to your HR team',
          ],
        },
        {
          label: 'Career Management',
          slug: 'career-management',
          blurb: 'Internal mobility and progression frameworks',
          intro:
            'Frameworks that let people see a route forward inside the organisation, which is consistently cheaper than replacing them. Career paths, progression criteria and the review cadence that keeps them honest.',
          points: [
            'Career paths and progression criteria per track',
            'Internal mobility and posting process',
            'Manager guidance for career conversations',
            'Review cadence and calibration support',
          ],
        },
        {
          label: 'Leadership Solutions',
          slug: 'leadership-solutions',
          blurb: 'Succession, assessment and interim leadership',
          intro:
            'Cover and planning for leadership positions: assessing internal successors, benchmarking them against the external market, and putting interim leadership in place while a permanent search runs.',
          points: [
            'Succession mapping for critical roles',
            'Leadership assessment against external benchmarks',
            'Interim and fractional leadership placement',
            'Onboarding and first-hundred-days support',
          ],
        },
        {
          label: 'Workforce Career Management',
          slug: 'workforce-career-management',
          blurb: 'Career support extended across the whole workforce',
          intro:
            'Career development applied beyond the leadership layer — to contract staff, operational teams and specialists — so progression is visible to the people who most often fall outside the talent process.',
          points: [
            'Skills mapping across permanent and contract staff',
            'Certification and reskilling pathways',
            'Redeployment routes between projects and clients',
            'Retention reporting by team and skill',
          ],
        },
      ],
    },
    {
      label: 'IT Services',
      slug: 'it-services',
      blurb: 'Engineering capability, supplied or delivered',
      intro:
        'Technology delivery in whichever shape fits: individual specialists into your team, a dedicated offshore squad, or a fixed-scope project we own end to end.',
      points: [
        'Full-stack, mobile, QA, cloud and automation skills',
        'Staff augmentation, dedicated squads or fixed scope',
        'Code in your repository from the first commit',
        'Documentation and handover training included',
      ],
      children: [
        {
          label: 'IT Contract Staffing',
          slug: 'it-contract-staffing',
          blurb: 'Vetted engineers into your existing team',
          intro:
            'Technical specialists who join your team, follow your process and report to your manager. Screened by engineers rather than by keyword match against the job description.',
          points: [
            'Technical screening carried out by practising engineers',
            'Availability inside days for common stacks',
            'Onsite, hybrid or fully remote engagement',
            'Monthly rate with one month notice',
          ],
        },
        {
          label: 'Offshore Delivery Center',
          slug: 'offshore-delivery-center',
          blurb: 'A dedicated squad running on your roadmap',
          intro:
            'A named team working only on your backlog from our delivery centre, with your tooling, your ceremonies and a delivery lead accountable for the sprint outcome.',
          points: [
            'Named, dedicated squad with a delivery lead',
            'Your tooling, boards and definition of done',
            'Overlap hours agreed to match your working day',
            'Scale up or down at each quarterly review',
          ],
        },
        {
          label: 'Project Solutions',
          slug: 'project-solutions',
          blurb: 'Fixed scope, fixed price, quoted after discovery',
          intro:
            'A defined deliverable at a fixed price and date, quoted after the blueprint stage rather than before it, so the number is based on scope we have actually examined.',
          points: [
            'Discovery and blueprint before any price is quoted',
            'Written definition of done and acceptance criteria',
            'Fortnightly demos against the agreed backlog',
            'Change requests priced in writing before work starts',
          ],
        },
        {
          label: 'Cloud and Infrastructure',
          slug: 'cloud-and-infrastructure',
          blurb: 'Azure and AWS builds, migrations and cost control',
          intro:
            'Infrastructure sized for your actual load, built as code, and reviewed for cost every quarter — plus the migration work to get there without a weekend outage nobody planned for.',
          points: [
            'Azure and AWS landing zones and migrations',
            'Infrastructure as code and CI/CD pipelines',
            'Monitoring, alerting and backup design',
            'Quarterly cost baseline and optimisation review',
          ],
        },
      ],
    },
    {
      label: 'Vendor Management Services',
      slug: 'vendor-management-services',
      blurb: 'One point of control across your supplier panel',
      intro:
        'Where hiring runs across several suppliers, we act as the managed service provider: one contract, one rate card, one set of reporting, and consistent compliance across every vendor on the panel.',
      points: [
        'Single point of contact across the supplier panel',
        'Consolidated rate card and commercial terms',
        'Vendor performance scorecards and quarterly reviews',
        'Consolidated invoicing and compliance reporting',
      ],
    },
    {
      label: 'Industrial Engineering Services',
      slug: 'industrial-engineering-services',
      blurb: 'Plant maintenance, shutdowns and project execution',
      intro:
        'Engineering manpower and supervision for plant environments, where the work is scheduled around production windows and safety compliance is non-negotiable.',
      points: [
        'Skilled and supervisory manpower for plant operations',
        'Work scheduled around production and outage windows',
        'Safety induction and statutory compliance handled',
        'Deployment reporting against the agreed schedule',
      ],
      children: [
        {
          label: 'Annual Maintenance',
          slug: 'annual-maintenance',
          blurb: 'Planned preventive maintenance on contract',
          intro:
            'Contracted preventive maintenance against an agreed schedule and scope, with the checklists, records and spares planning that keep unplanned downtime from becoming the norm.',
          points: [
            'Preventive maintenance schedule and checklists',
            'Deployed technicians with supervision',
            'Spares planning and consumption records',
            'Monthly reporting on completion and breakdowns',
          ],
        },
        {
          label: 'Shutdown Services',
          slug: 'shutdown-services',
          blurb: 'Manpower and supervision for planned outages',
          intro:
            'Mobilised teams for planned shutdowns, where the whole point is finishing inside the window. Planned in advance, staffed to the peak, and demobilised cleanly afterwards.',
          points: [
            'Pre-shutdown planning and manpower loading',
            'Round-the-clock shift coverage through the window',
            'Safety permits and compliance documentation',
            'Daily progress reporting against the shutdown plan',
          ],
        },
        {
          label: 'Overhauling',
          slug: 'overhauling',
          blurb: 'Strip-down, inspection and rebuild of equipment',
          intro:
            'Full overhaul of rotating and static equipment: dismantling, inspection against tolerance, replacement of worn components, reassembly and recommissioning with the readings recorded.',
          points: [
            'Dismantling and condition assessment',
            'Inspection against manufacturer tolerances',
            'Component replacement and reassembly',
            'Recommissioning with recorded test readings',
          ],
        },
        {
          label: 'Project Execution',
          slug: 'project-execution',
          blurb: 'Erection, commissioning and handover on site',
          intro:
            'Site execution for capital and expansion work — erection, installation, commissioning and handover — run against a schedule with a single point of accountability on site.',
          points: [
            'Site mobilisation and resource planning',
            'Erection, installation and alignment',
            'Commissioning support and trial runs',
            'Documentation pack and handover to operations',
          ],
        },
      ],
    },
  ],
};

export const MEGA_MENUS: MegaMenuDef[] = [SERVICES_SOLUTIONS, WORKFORCE_SOLUTIONS];

/** Flat nav links that sit after the two mega-menus. */
export const SIMPLE_NAV: { to: string; label: string }[] = [
  { to: '/industries', label: 'Industries' },
  { to: '/insights', label: 'Insights' },
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
];

/* ---------- flattened lookup for /services/:slug ---------- */

export interface Resolved {
  item: MenuItem;
  menu: MegaMenuDef;
  /** Set when the item is a third-level entry. */
  parent?: MenuItem;
  /** Items shown as "related" at the foot of the page. */
  siblings: MenuItem[];
}

const INDEX = new Map<string, Resolved>();

for (const menu of MEGA_MENUS) {
  for (const item of menu.items) {
    INDEX.set(item.slug, {
      item,
      menu,
      siblings: menu.items.filter((i) => i.slug !== item.slug),
    });
    for (const child of item.children ?? []) {
      INDEX.set(child.slug, {
        item: child,
        menu,
        parent: item,
        siblings: (item.children ?? []).filter((c) => c.slug !== child.slug),
      });
    }
  }
}

export const resolveService = (slug?: string) => (slug ? INDEX.get(slug) : undefined);
export const ALL_SERVICE_SLUGS = [...INDEX.keys()];
