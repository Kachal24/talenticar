/**
 * Photography for the site.
 *
 * The files live in src/assets/photos and are bundled by Vite, so each one
 * ships with a content hash and can be cached forever. Nothing is fetched
 * from a third-party host at runtime.
 *
 * Sourced from Unsplash (Unsplash License — free for commercial use, no
 * attribution required) and re-encoded to WebP at 1200px wide, quality 70.
 * To swap a photo, drop a replacement into src/assets/photos and update the
 * import below; the build fails if a file is missing, so nothing goes stale.
 */
import aboutTeam from '../assets/photos/about-team.webp';
import blogDesk from '../assets/photos/blog-desk.webp';
import blogOffice from '../assets/photos/blog-office.webp';
import blogWorkspace from '../assets/photos/blog-workspace.jpg';
import careersTeam from '../assets/photos/careers-team.webp';
import developerCode from '../assets/photos/developer-code.webp';
import heroDashboard from '../assets/photos/hero-dashboard.webp';
import heroMeeting from '../assets/photos/hero-meeting.webp';
import hiringPanel from '../assets/photos/hiring-panel.webp';
import processMetrics from '../assets/photos/process-metrics.webp';
import serviceAutomation from '../assets/photos/service-automation.webp';
import serviceData from '../assets/photos/service-data.webp';
import serviceHr from '../assets/photos/service-hr.webp';
import serviceSoftware from '../assets/photos/service-software.webp';
import serviceSupport from '../assets/photos/service-support.webp';
import serviceWeb from '../assets/photos/service-web.webp';

export const IMG = {
  /* home */
  heroMeeting,
  heroDashboard,
  hiringPanel,
  processMetrics,
  developerCode,

  /* about */
  aboutTeam,

  /* services */
  serviceHr,
  serviceWeb,
  serviceAutomation,
  serviceSoftware,
  serviceData,
  serviceSupport,

  /* careers */
  careersTeam,

  /* insights */
  blogOffice,
  blogDesk,
  blogWorkspace,
} as const;
