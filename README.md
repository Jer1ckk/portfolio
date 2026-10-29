# Full-stack developer portfolio

A responsive, dark portfolio built with React, Vite, Tailwind CSS (via the official Vite plugin), and Lucide React. No backend, credentials, external fonts, or image services are required.

## Run locally

Use Node.js 22.12+ or a current supported release (developed with Node 24).

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. For a production build and local production preview:

```sh
npm run build
npm run preview
```

The generated static site is in `dist/`. `package-lock.json` records the installed versions; use `npm ci` for repeatable installs.

## Personalize before publishing

- `src/data/profile.js`: replace the name, introduction, email, GitHub and LinkedIn URLs, and internship entry. Missing social URLs render as text marked “add link.” Adding an email enables a real `mailto:` link; there is no simulated contact form. Use full `https://` profile URLs.
- `src/data/skills.js`: the supplied list is labeled sample content. Remove technologies you have not used and set each remaining group's `confirmed` flag to `true` after reviewing it. Update the sample-content note in `Skills.jsx` when the full list is confirmed.
- `src/data/projects.js`: all three supplied projects are explicitly examples. Confirm the title, description, stack, contribution, architecture, database/API notes, and challenges. Set each feature's status to `implemented`, `planned`, or `unverified` as appropriate. Replace the sample status after verification. Add actual `github` and `demo` URLs, or leave them `null` to keep them unavailable.
- Project `image` fields accept a local public path such as `/projects/kaseapp.webp`. Add optimized actual screenshots under `public/projects/` (use a `.webp` or `.avif` where practical). Until then, the locally drawn editorial artwork is explicitly labeled illustrative and is not a screenshot.
- `src/components/Projects.jsx` and `src/components/ProjectDetails.jsx`: adjust the sample-content notes once the content has been verified.
- `index.html`: personalize the page title and description. Replace the placeholder icon at `public/favicon.svg`. Add an absolute canonical URL and social preview metadata after choosing your production URL.
- Experience is separate from personal projects. Replace the internship placeholders only with actual organization, dates, responsibilities, contributions, and technologies. Add further entries to the array as needed.

No real identity, work history, proficiency ratings, metrics, or project links have been invented.

## Structure

```text
public/                 Favicon and future screenshots
src/components/         Navbar, Hero, About, Skills, Projects, ProjectCard,
                        ProjectDetails, ProjectArtwork, Experience, Contact,
                        Footer, and shared components
src/data/               Editable profile, experience, project, and skill data
src/App.jsx             Page composition
src/index.css           Tailwind import, design tokens, responsive styles
src/main.jsx            React entry point
```

The UI includes active section navigation, a mobile menu, project category filters, native modal project details with keyboard focus containment and Escape dismissal, anchor scrolling, hover and focus states, a skip link, and reduced-motion support. The year in the footer updates automatically. There is no router or backend to configure.

## Deploy

This delivery is local and has not been published. After reviewing all placeholders:

**Vercel:** push the project to your Git provider, import the repository in Vercel, and select the Vite preset. Build command: `npm run build`. Output directory: `dist`.

**Netlify:** import the repository, use build command `npm run build` and publish directory `dist`. The included `netlify.toml` sets these values. You can also upload a freshly built `dist/` folder through Netlify's manual deploy interface.

Use a supported Node version in your host's build settings. No environment variables or server functions are required. All sections use in-page anchors, so SPA path rewrites are unnecessary.

## Verification

The production build was verified locally. Headless Chrome checks covered layouts at 320, 390, 768, 1024, and 1440 pixels; horizontal overflow; project filters; mobile menu open/close behavior; all anchor targets; and modal opening, focus containment, focus restoration, Escape, and backdrop dismissal. No runtime errors were observed. Automated axe checks found no WCAG A/AA violations on the desktop page and project dialog after contrast fixes. Automated checks complement manual accessibility testing; they do not guarantee full compliance.

Setup references: [Vite guide](https://vite.dev/guide/), [Tailwind's Vite installation](https://tailwindcss.com/docs/installation/using-vite), and [React versions](https://react.dev/versions).
