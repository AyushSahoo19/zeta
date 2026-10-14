# ZETA Portal

A responsive mobile learning portal with a graphite header, overlapping Quick Access sheet, 102 domain workspaces and five-tab navigation. Built with plain HTML, CSS and JavaScript; no build dependencies.

## Run

From this directory:

```sh
python -m http.server 5173
```

Open http://localhost:5173 in your browser. You can also open index.html directly; clipboard support varies by browser.

## Features

- 90+ catalogue-driven domain pages with progressive roadmaps, trusted beginner-to-advanced resources, projects, persistent tasks and real downloadable PDF planners. The original eight domains also include verified YouTube references and code snippets.
- Five navigation views (Home, Domains, Courses, Knowledge and Jobs), composed learning-library filters with pagination, domain bookmarks, activity stream and notifications. Profile is available from the avatar in each header.
- Task checkmarks, profile edits, domain bookmarks, role shortlist and job preferences persist in localStorage on this device. Existing NexusLearn task/profile storage is retained for migration.
- PDF study planners are generated as actual downloadable PDF files.
- Responsive layout, keyboard focus states and reduced-motion support.

## Data and offline behavior

This is a functional frontend demo. Home metrics, activity and analytics are illustrative seed content. Domain progress rings reflect actual persisted task completion; projects are suggested learning exercises. Task and profile edits are persisted locally. There is no backend or authentication. YouTube buttons open foundation lecture references; playback requires internet. Generated planners can be downloaded and viewed offline. No external font requests are required; typography uses local sans-serif fallbacks.


## Video reference sources

- [Stanford CS229 Lecture 1](https://www.youtube.com/watch?v=jGwO_UgTS7I) — AI & ML and Machine Learning.
- [Algorithms and Data Structures](https://www.youtube.com/watch?v=8hly31xKli0) — Computer Science.
- [But what is a neural network?](https://www.youtube.com/watch?v=aircAruvnKk) — Deep Learning.
- [Northwestern Modern Robotics chapter 2](https://modernrobotics.northwestern.edu/nu-gm-book-resource/chapter-2-playlist/) / [Foundations of Robot Motion](https://www.youtube.com/watch?v=csYtU2GY7FY) — Robotics.
- [How the Economic Machine Works](https://www.youtube.com/watch?v=PHe0bXAIuk0) — Quant Finance introductory context.
- [Learn Data Science](https://www.youtube.com/watch?v=ua-CiDNNj30) — Data Science.
- [Vectors](https://www.youtube.com/watch?v=fNk_zzaMoSs) — Mathematics.

## Expanded learning and career catalogue

`data.js` provides the single `window.ZETA_CATALOG` source for domains, roles, skills, categories and salary references. Domain details include practical roadmaps and genuine external learning resources. Knowledge filters compose domain, category, level, type and search, rendering 20 results at a time. Home and Domains include a horizontally scrollable semantic role-comparison table, with an option to compare every role.

Jobs is a career discovery/search interface, not a vacancy feed. Saved items are career paths; LinkedIn, Naukri and Indeed buttons open external searches. Custom keywords work even when no catalogue role matches. Location and experience preferences are stored locally. Experience requirements must be refined on each external board. Compensation ranges are indicative annual India CTC for early-career 0–3 years, independently of the user preference; each role links its salary reference. Featured roles/skills are editorial picks, not verified rankings or live demand claims.

See SOURCES.md for catalogue references and salary methodology. New-domain task progress starts at zero and updates from the three persisted task checkmarks. Core home metrics, activity and analytics remain clearly labeled demo content.

## Domain workspaces

Every domain now has six keyboard-accessible tabs: About, Basics, Roadmap, Resources, Jobs, and Insights & Updates. `domain-content.js` supplies tailored field introductions, applications, foundation concepts, prerequisites, subjects and editorial learning guidance. Left/Right/Home/End navigate the tablist; tasks stay focused when checked. Task changes update the progress ring and create device-local timestamped learning updates. Insights are static guidance with official resource links, not fetched live news.

Domains offers ten category tiles above a two-column catalogue (stacked on very narrow phones). Knowledge displays searchable, horizontally scrollable filters for all 102 domains, synchronized with the domain dropdown and combined category/level/type/resource search.

## Roadmaps and resource discovery

`learning-paths.js` provides 102 tailored learning paths with 408 stages: Beginner, Intermediate, Advanced and a practical Capstone. Every stage includes topic goals, a hands-on exercise, a completion checkpoint and followable resource links. Milestone checkboxes persist separately in `zeta-roadmap-progress`; the roadmap summary tracks these checkpoints independently of the three-task domain ring.

A single normalized resource getter powers both domain Resources and global Knowledge. Format, Source and Level filters compose with search. Video & courses includes video and course formats so selecting Coursera or Udemy yields course discovery material; Courses is also available separately. Sources include YouTube, Coursera, Udemy and Other. Direct PDFs open their external host; only generated study planners are downloadable offline artifacts. Discovery links are clearly labeled searches for courses/videos, not saved or enrolled courses. Platforms may require sign-in or payment.

The UI adds restrained CSS paper grain and etched graphite textures without external images or dependencies. See LEARNING-SOURCES.md for verified textbook and platform sources.

## Courses academy

The third bottom tab is Courses; actual learning analytics are available in Profile through the avatar. `course-catalog.js` supplies 29 focused learning packages across 10 categories. `courses.js` implements local enrollment, module checkpoints, goals, interests, self-declared skills, recommendations and manually logged study sessions. Every course has Overview, Syllabus, Roadmap, Resources and Progress tabs, with source-linked module learning material. Course progress is completed modules divided by total modules; it is self-reported, not a credential. Study estimates are editorial estimates, not measured time. Profile charts use actual study sessions and start at zero. Each date is limited to 720 logged minutes.

The Courses resource vault persists actual file contents and metadata in IndexedDB (`zeta-learning-files`), not just names. Accepted files are PDF, TXT, MD, JSON, PNG and JPG/JPEG, up to 20 MB each. Saved files can be downloaded with their original name and deleted individually. Files stay local in the browser; loss of browser storage removes them. Storage errors are reported without claiming success. JSON progress exports cover course progress, goals, interests and sessions; uploaded file blobs are separate.

All previous domain bookmarks, profiles, tasks, domain roadmap milestones and knowledge filters are retained. Courses use `zeta-courses`; existing legacy task/profile keys are unchanged. See COURSE-SOURCES.md for course resource provenance.

## Courses layout

Explore is the first Courses section. Category cards show catalogue counts, and all 29 courses are displayed by default, including enrolled paths with Continue and accurate progress. Category, search and level filters compose. My Learning is the separate second section containing the enrolled library, tracker, goals, interests, recommendations, actual file vault and export controls. Enrollment and storage behavior are unchanged.

## GitHub deployment

Repository: https://github.com/AyushSahoo19/zeta
Live site: https://ayushsahoo19.github.io/zeta/

Every push to `main` runs syntax/catalogue validation and deploys the eight runtime files to GitHub Pages. Development screenshots, evaluation reports, draft briefs and uploaded test files are excluded. Run `node scripts/check.mjs` locally before pushing. The GitHub Pages workflow requires no custom secrets.

Browser storage belongs to an origin. The live site's learning records and uploads are separate from the localhost preview; existing local records are not automatically transferred. The in-app JSON export backs up course records, while uploaded files can be downloaded individually.
