import { IMG } from './images';

export type Block =
  | { t: 'p'; v: string }
  | { t: 'h'; v: string }
  | { t: 'quote'; v: string }
  | { t: 'ul'; v: string[] };

export interface Post {
  slug: string;
  cat: string;
  date: string;
  read: string;
  title: string;
  excerpt: string;
  img: string;
  body: Block[];
}

export const POSTS: Post[] = [
  {
    slug: 'rpa-payback-model',
    cat: 'Automation',
    date: '12 August 2026',
    read: '6 min read',
    title: 'What an automation actually costs: a 90-day payback model',
    excerpt:
      'Licence fees are the number everyone asks about and the one that matters least. Here is the arithmetic we use before recommending a bot.',
    img: IMG.serviceData,
    body: [
      { t: 'p', v: 'The first question in an automation conversation is almost always about licence cost. It is the easiest number to find and the least useful one to plan with. In the automations we have delivered, licensing rarely accounts for more than a quarter of the first-year cost, and it is the only component that does not vary with how messy the process is.' },
      { t: 'h', v: 'The four numbers that decide payback' },
      { t: 'p', v: 'Before recommending anything, we ask the team to help us fill in four figures. None of them require a tool, and if the process owner cannot answer them, that itself is the finding.' },
      { t: 'ul', v: [
        'Volume: how many times the process runs in a month, at peak and at trough.',
        'Handling time: how long one run takes, measured by watching rather than estimating.',
        'Exception rate: what share of runs fall outside the happy path, and what happens to them today.',
        'Change rate: how often the underlying screens, formats or rules change in a year.',
      ] },
      { t: 'p', v: 'The first two give you the gross hours available to recover. The third tells you how much of that is actually recoverable, because exceptions usually stay with a person. The fourth predicts your maintenance cost, and it is the number most business cases quietly leave out.' },
      { t: 'h', v: 'A worked example' },
      { t: 'p', v: 'Take an invoice-processing queue running 3,000 documents a month at four minutes each. That is 200 hours. If 18 percent of documents are exceptions and still need a human, the recoverable pool is closer to 164 hours. Against a fully loaded cost per hour, that is your monthly gross benefit. Then subtract maintenance: for a process touching three interfaces that change twice a year each, budget a day of developer time a month and a support allocation on top.' },
      { t: 'quote', v: 'If the payback period is longer than nine months, the honest recommendation is usually to fix the process first and automate what is left.' },
      { t: 'h', v: 'Where the model says no' },
      { t: 'p', v: 'Roughly a third of the candidates brought to us do not clear this arithmetic, and the reason is nearly always the same: the volume is real but the rules are not stable enough to encode. In those cases the better answer is an API integration, a configuration change in the source system, or a redesign of the form that creates the mess upstream. Recommending that costs us a project and saves the client a maintenance liability, which is the trade we would rather make.' },
      { t: 'h', v: 'What to take into your next meeting' },
      { t: 'p', v: 'Ask for volume, handling time, exception rate and change rate before you ask for a quote. Any vendor who can price the work without them is pricing a guess.' },
    ],
  },
  {
    slug: 'hiring-for-automation-2026',
    cat: 'Talent',
    date: '29 July 2026',
    read: '5 min read',
    title: 'Hiring automation engineers in 2026: the skills that still matter',
    excerpt:
      'Tool certification is now the easy part. The candidates who last are the ones who can say why a process should not be automated.',
    img: IMG.hiringPanel,
    body: [
      { t: 'p', v: 'Screening for automation roles used to be simple: check the certification, check the years on the platform, run a build exercise. That filter has stopped discriminating. Certification is accessible, assistants generate workable selector logic, and a candidate who has never designed a process end to end can still produce a demo that runs.' },
      { t: 'h', v: 'What we test instead' },
      { t: 'p', v: 'Our technical round now centres on a deliberately flawed process description and one question: what would you not automate here, and why? The answers separate candidates faster than any coding exercise we have used.' },
      { t: 'ul', v: [
        'Process judgement: recognising when a configuration change or an API beats a bot entirely.',
        'Exception design: how they plan for the day the source system returns something unexpected.',
        'Operability: whether they think about logging, alerting and who gets paged at 2am.',
        'Handover instinct: whether documentation is something they do or something they promise.',
      ] },
      { t: 'h', v: 'The interview questions that earn their place' },
      { t: 'p', v: 'Two questions do most of the work. First, describe an automation you built that you would now build differently, and say what changed your mind. Second, walk me through what happens when your bot fails at three in the morning. The first tests reflection, the second tests whether they have ever owned something in production.' },
      { t: 'quote', v: 'A candidate who has been woken up by their own bot designs differently from one who has not.' },
      { t: 'h', v: 'What this means for job descriptions' },
      { t: 'p', v: 'Most automation job descriptions still read as a list of tools. That attracts people who match the list and screens out people who would have been better. Write the outcomes instead: the processes the person will own, the systems they will have to argue with, and the level of independence expected in the first six months. We build a scorecard on exactly that basis before opening any technical mandate, and it consistently shortens the shortlist.' },
    ],
  },
  {
    slug: 'attended-vs-unattended',
    cat: 'Automation',
    date: '14 July 2026',
    read: '4 min read',
    title: 'Attended or unattended? Choose by process shape, not licence price',
    excerpt:
      'Teams often pick the bot type from a pricing page. The process itself usually decides for you, if you look at three things.',
    img: IMG.processMetrics,
    body: [
      { t: 'p', v: 'Attended and unattended automation solve different problems, but the choice is often made on cost per licence rather than on what the process actually looks like. Three characteristics settle it in most cases.' },
      { t: 'h', v: '1. Who starts the work' },
      { t: 'p', v: 'If a person decides when the process runs, based on something on their screen or a customer on the phone, attended automation fits. If the trigger is a file landing, a queue filling or a clock, it should run unattended. Fighting this creates the worst outcome: an unattended bot that waits for someone to click, or an attended bot people forget to run.' },
      { t: 'h', v: '2. Whether judgement sits in the middle' },
      { t: 'p', v: 'Processes that need a human decision halfway through are a poor fit for a fully unattended design. You can split them, running the mechanical halves unattended and handing the decision to a person with the context assembled. That is usually better than forcing a single end-to-end bot with a long-running pause in it.' },
      { t: 'ul', v: [
        'Judgement at the start only: unattended, triggered after the decision is recorded.',
        'Judgement in the middle: split into two unattended runs with a work queue between them.',
        'Judgement throughout: attended, with the bot doing the typing rather than the thinking.',
      ] },
      { t: 'h', v: '3. Where the volume actually is' },
      { t: 'p', v: 'Attended automation scales with headcount; unattended scales with runtime. A process running 200 times a day across 30 people looks different from one running 6,000 times overnight, even though the annual volume matches. Sizing the licence to the wrong axis is how estates end up expensive and underused.' },
      { t: 'quote', v: 'The cheapest bot is the one nobody has to remember to start.' },
    ],
  },
  {
    slug: 'careers-page-recruiter',
    cat: 'Talent',
    date: '30 June 2026',
    read: '5 min read',
    title: 'Your careers page is doing more recruiting than your job boards',
    excerpt:
      'Candidates check it before they apply and again before they accept. Most careers pages answer neither question they arrive with.',
    img: IMG.blogOffice,
    body: [
      { t: 'p', v: 'Every serious candidate visits the careers page twice: once before applying, and once after the offer arrives, when they are quietly looking for a reason to say no. Both visits are decision moments, and most pages are written as though the reader has already decided.' },
      { t: 'h', v: 'The two questions candidates actually arrive with' },
      { t: 'p', v: 'The first is practical: what would I be doing, with whom, and where. The second is about risk: is this a place where good work gets noticed, or where I will be a resource on a spreadsheet. Culture statements answer neither. Specifics answer both.' },
      { t: 'ul', v: [
        'Name the projects, not the values. One paragraph on real work beats a page on collaboration.',
        'Publish the hiring process with timelines, and then hold to them.',
        'Say what the first ninety days look like, including who the person reports to.',
        'Show the actual office and the actual team, not a stock photo of a glass building.',
      ] },
      { t: 'h', v: 'Salary bands and the trust they buy' },
      { t: 'p', v: 'Publishing a band, or committing to give it in the first call, costs less than most employers fear and removes the largest reason candidates drop out late. In our own hiring we give the band in the screening call, and our late-stage drop-off is a fraction of what we see in client processes that hold it back until the offer.' },
      { t: 'quote', v: 'A candidate who withdraws in week one because the range does not work has saved you three interviews.' },
      { t: 'h', v: 'Treat it as a product page' },
      { t: 'p', v: 'If your marketing team would not ship a product page with no pricing, no screenshots and no description of what it does, do not ship a careers page that way either. The page is competing for attention against every other tab the candidate has open.' },
    ],
  },
  {
    slug: 'ocr-vs-document-understanding',
    cat: 'Engineering',
    date: '18 June 2026',
    read: '6 min read',
    title: 'When plain OCR is enough, and when it quietly is not',
    excerpt:
      'Document automation fails in production more often than anywhere else. Usually because the wrong extraction approach was chosen at the demo stage.',
    img: IMG.blogDesk,
    body: [
      { t: 'p', v: 'Document processing demos beautifully and breaks in production. The reason is nearly always the same: the pilot used twenty clean documents from one supplier, and the live queue contains four hundred layouts, three languages and a scanner someone tilted.' },
      { t: 'h', v: 'Where plain OCR still wins' },
      { t: 'p', v: 'If the layout is fixed, the source is digital, and the fields sit in the same place every time, template-based extraction is faster, cheaper and easier to debug than anything intelligent. Machine-generated statements, structured forms and internal reports fall into this category, and reaching for a model here adds cost and unpredictability for no accuracy gain.' },
      { t: 'h', v: 'Where it will not hold' },
      { t: 'ul', v: [
        'Many suppliers, each with their own invoice layout.',
        'Scanned or photographed documents with skew, shadows or handwriting.',
        'Tables that span pages, or line items with variable column counts.',
        'Documents where the same label means different things by context.',
      ] },
      { t: 'p', v: 'These need a model that reads position and context rather than coordinates, plus a human-in-the-loop step for anything below a confidence threshold. The threshold is a business decision, not a technical one: it is a trade between review effort and the cost of a wrong value reaching your finance system.' },
      { t: 'h', v: 'Build the validation before the extraction' },
      { t: 'p', v: 'The most useful thing you can do early is write the validation rules: totals that must reconcile, dates that must fall in a range, references that must exist in a master list. Good validation catches extraction errors regardless of which technique produced them, and it gives you a measurable accuracy baseline from day one.' },
      { t: 'quote', v: 'Measure accuracy on documents you have not seen. Anything else is measuring your template.' },
      { t: 'h', v: 'A practical sequence' },
      { t: 'p', v: 'Collect a hundred real documents from the live queue before designing anything. Sort them by layout. If five layouts cover eighty percent of volume, template extraction handles the bulk and a model handles the tail. That split is usually cheaper and considerably easier to support than one approach for everything.' },
    ],
  },
  {
    slug: 'contract-vs-project-team',
    cat: 'Talent',
    date: '3 June 2026',
    read: '5 min read',
    title: 'Contract staffing or a project team: a comparison on cost and control',
    excerpt:
      'Both arrangements put people on your work. They differ on who carries the risk when the estimate is wrong.',
    img: IMG.blogWorkspace,
    body: [
      { t: 'p', v: 'Companies often compare a contract rate against a project price and conclude the contractor is cheaper. The comparison is not like for like, because the two models allocate risk differently and require different amounts of your own management time.' },
      { t: 'h', v: 'What contract staffing really costs' },
      { t: 'p', v: 'The rate is visible. The management load is not. A contractor needs a manager who defines the work, reviews it, unblocks it and decides when it is done. If your team already has that capacity and a clear backlog, the model is efficient. If the manager is already at capacity, the contractor’s output degrades to whatever supervision is left over.' },
      { t: 'ul', v: [
        'Best when: the scope is known, your delivery lead has bandwidth, and the need is ongoing.',
        'Poor when: nobody internally owns the backlog or the definition of done.',
      ] },
      { t: 'h', v: 'What a project team really costs' },
      { t: 'p', v: 'A fixed-scope engagement moves estimation risk to the vendor, which is priced in. In exchange you get a delivery lead, an agreed outcome and one accountable party when things slip. The trade is flexibility: mid-stream changes go through a change request rather than a conversation.' },
      { t: 'quote', v: 'You are not choosing between two prices. You are choosing who absorbs the cost of being wrong about the estimate.' },
      { t: 'h', v: 'A reasonable default' },
      { t: 'p', v: 'Start with a small fixed-scope piece to establish the working relationship and calibrate estimates. If the work continues and your internal ownership is strong, convert to augmentation, which is usually cheaper per hour. If ownership is thin, keep the managed arrangement and buy the outcome instead of the hours.' },
    ],
  },
];

export const getPost = (slug?: string): Post | undefined =>
  POSTS.find((p) => p.slug === slug);
