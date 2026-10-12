# PROMPTX 2026 — The Ultimate AI Showdown

Immersive black-and-crimson event website for **PROMPTX 2026**, a team-based AI prompting
competition at Vidya Academy of Science and Technology, part of **VYVIDH '26**.

Stack: React + TypeScript + Vite + Tailwind CSS + Lucide React. No backend, database or auth.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build
```

## Where things live

| Purpose | File |
| --- | --- |
| Event details, registration URL, asset paths | `src/config/event.ts` |
| Card decks, stages, scoring, twists | `src/data/challengeCards.ts` |
| Visual system, animations, reduced-motion rules | `src/index.css` |
| Sections | `HeroSection`, `ArenaSection`, `ChallengeSection`, `FinalCTA` in `src/components/` |

Event details are defined once in `event.ts` and read everywhere else.

## Adding official assets

Put files in `public/assets/` using these exact names:

| File | Used for |
| --- | --- |
| `promptx-poster.png` | Faint blended layer in the hero background |
| `vidya-logo.png` | Navbar (left) |
| `vyvidh-logo.png` | Navbar (right) |
| `promptx-registration-qr.png` | QR panel in the register section |

Missing files never break the page: logos fall back to text, the poster layer is skipped, and the QR area
shows a clearly labelled, non-scannable placeholder ("OFFICIAL REGISTRATION QR GOES HERE").
The QR image is displayed with `object-contain` on a white background with generous quiet space,
with no filters, cropping or overlays. Use a square image if possible.

## Setting the registration URL

Edit `registrationUrl` in `src/config/event.ts`:

```ts
registrationUrl: 'https://your-official-registration-link',
```

- While it still holds the placeholder, the register buttons do **not** open anything; they show
  "Registration details are being configured." and the copy-link button shows the same message.
- Once set, every register button opens it in a new tab (`rel="noopener noreferrer"`) and
  "Copy registration link" copies that exact URL.

## Deploying to GitHub Pages

1. Push this project to a GitHub repository.
2. **Base path:** in `vite.config.ts`, `REPO_NAME` must equal your repository name
   (default `promptx-website`). Production builds use `/<REPO_NAME>/`; local dev uses `/`.
   If you rename the repo, update `REPO_NAME`. For a `<user>.github.io` root site, set the base to `'/'`.
3. In the repo go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Push to `main`. `.github/workflows/deploy.yml` builds and publishes `dist/`.

Asset URLs go through `import.meta.env.BASE_URL`, so images load correctly under the repo sub-path.
The site is a single page using hash anchors, so no router configuration is needed.

## Accessibility and motion

Semantic landmarks, keyboard-operable navigation and menu (Esc closes), visible focus states,
`aria-live` status messages for copy actions, and full `prefers-reduced-motion` support
(animations collapse to instant state changes; the roulette reveals immediately).
Decorative overlays use `pointer-events: none`.
