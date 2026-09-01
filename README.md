# Talentica Resource — React + TypeScript

A React/TypeScript rebuild of `talentica-resource-website.html`. Same design tokens,
same layout, same copy — rebuilt as routed components with real photography.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production bundle into dist/
npm run preview    # serve the production build
npm run typecheck  # tsc --noEmit
```

## Routes

| Path                | Page                                                   |
| ------------------- | ------------------------------------------------------ |
| `/`                 | Hero, services, problem rows, delivery method, models, industries, testimonials, insights preview, FAQ, CTA |
| `/about`            | Positioning, commitments, practice groups, first 30 days |
| `/services`         | Six full service rows, technology stack                 |
| `/services/:slug`   | One page per header menu item (28 of them), one template |
| `/industries`       | Six sector cards, compliance posture                    |
| `/insights`         | All articles + newsletter signup                        |
| `/insights/:slug`   | Article view with related posts                         |
| `/careers`          | Perks, open roles, hiring process                       |
| `/contact`          | Enquiry form, direct contact details                    |

Unknown paths redirect to `/`. The original used hash routing (`#/about`); this uses
real paths via `react-router-dom`, so **your host needs an SPA fallback** — every path
must serve `index.html`. Vite's dev server and `vite preview` already do this.

## Structure

```
src/
  main.tsx              BrowserRouter mount
  App.tsx               route table + header/footer shell
  styles/global.css     design tokens and every class from the original
  data/
    images.ts           the Unsplash photo set, one place to swap them
    posts.ts            the six insight articles (typed content blocks)
    menu.ts             the header nav tree + the copy for all 28 service pages
    site.ts             services, industries, jobs, FAQs, stats
  components/
    Header/Footer/Logo  chrome, mobile drawer, wordmark
    MegaMenu.tsx        hover/click dropdown, Escape + outside-click to close
    Bits.tsx            SectionHead, PageHero, InfoCard, MediaRow, Steps,
                        Stats, Quote, CtaBand, BadgeFloat
    Reveal.tsx          IntersectionObserver scroll-reveal (+ useReveal hook)
    Counter.tsx         eased count-up for the stat strip
    Accordion.tsx       single-open FAQ
    PostCard.tsx        clickable / keyboard-activatable article card
    Img.tsx             removes itself on load failure, gradient shows through
    Icons.tsx           the inline SVG set
```

## What is interactive

- Sticky header, nav beside the logo, actions on the right
- Two mega-menus: open on hover (desktop) or click, close on Escape, outside click
  or navigation. Below 1140px they collapse into the burger drawer as accordions.
- Mobile burger drawer that closes on navigation
- Scroll-reveal on cards, rows and section heads, staggered per grid position
- Stat counters that ease up the first time they enter the viewport
- Single-open FAQ accordion with height animation
- Article cards navigate on click **and** on Enter
- Contact and newsletter forms are controlled, validated and show a success panel

Every animation is disabled under `prefers-reduced-motion: reduce`.

## Images

All 16 photos are stored locally in `src/assets/photos` and imported through
`src/data/images.ts` — nothing is fetched from a third-party host at runtime. Vite
bundles them with a content hash, so they can be cached forever and a missing file
breaks the build rather than the page.

WebP at 1200px wide / quality 70 (one file stayed JPEG — the CDN would not serve a
WebP for it). Sourced from Unsplash, whose licence permits commercial use without
attribution.

To swap a photo: drop the replacement into `src/assets/photos` and update its import
in `images.ts`. If an image still fails to load, `<Img>` unmounts and the navy→blue
gradient behind it stands in, matching the original page's `onerror` behaviour.

## Before launch

Placeholders carried over from the original, all flagged in the UI:

- Stat figures on the home page (120 / 480 / 45 / 96)
- Testimonial quotes
- Job vacancies
- Phone number on `/contact`
- Both forms only set local state — point them at your form handler, CRM or mailbox
# talenticar
