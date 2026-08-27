/**
 * Photography for the site.
 *
 * Each entry is an Unsplash photo chosen to match the section it sits in.
 * `u()` appends the crop/format params so every image ships at a sane weight.
 * If a request fails, <Img> removes itself and the navy→blue gradient behind
 * it shows through, exactly as the original static page behaved.
 */
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const IMG = {
  /* home */
  heroMeeting: u('photo-1552664730-d307ca884978'),
  heroDashboard: u('photo-1551288049-bebda4e38f71', 800),
  hiringPanel: u('photo-1521737604893-d14cc237f11d'),
  processMetrics: u('photo-1460925895917-afdab827c52f'),
  developerCode: u('photo-1517180102446-f3ece451e9d8'),

  /* about */
  aboutTeam: u('photo-1522071820081-009f0129c71c'),

  /* services */
  serviceHr: u('photo-1600880292089-90a7e086ee0c'),
  serviceWeb: u('photo-1547658719-da2b51169166'),
  serviceAutomation: u('photo-1518770660439-4636190af475'),
  serviceSoftware: u('photo-1461749280684-dccba630e2f6'),
  serviceData: u('photo-1543286386-713bdd548da4'),
  serviceSupport: u('photo-1497366754035-f200968a6e72'),

  /* careers */
  careersTeam: u('photo-1521737711867-e3b97375f902'),

  /* insights */
  blogOffice: u('photo-1497366811353-6870744d04b2'),
  blogDesk: u('photo-1486312338219-ce68d2c6f44d'),
  blogWorkspace: u('photo-1497215728101-856f4ea42174'),
} as const;
