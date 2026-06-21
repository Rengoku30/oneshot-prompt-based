# MERIDIAN — Architects

A multi-page website for a fictional architecture studio, built in the
**Minimalist Monochrome** design language: pure black & white, oversized serif
typography, sharp corners, hover inversions, layered textures, and instant
interactions.

Built with **React + Vite + Tailwind CSS**, routed with **React Router**, icons
from **lucide-react**, and editorial type from **Google Fonts**
(Playfair Display · Source Serif 4 · JetBrains Mono).

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build → /dist
npm run preview  # preview the production build
```

> Requires Node 18+ (built and tested on Node 20).

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, manifesto, stats, approach, selected work, process, testimonials, engagement tiers, final CTA |
| `/studio` | About — origin story, awards, team |
| `/work` | Portfolio — filterable grid of all commissions |
| `/work/:slug` | Project detail — drop cap, spec sidebar, palette, next project |
| `/journal` | Journal — featured essay + list |
| `/journal/:slug` | Article — drop cap, pull quote, body |
| `/contact` | Contact — enquiry form (with success state) + studio details |
| `*` | 404 |

---

## Design system at a glance

- **Palette** — `#FFFFFF` / `#000000` only; grays (`#525252`, `#E5E5E5`, `#F5F5F5`)
  reserved for secondary text and hairlines. Defined as CSS variables in
  `src/index.css` and mirrored in `tailwind.config.js`.
- **Type** — `font-display` (Playfair) for headlines, `font-serif` (Source Serif 4)
  for body, `font-mono` (JetBrains Mono) for labels/metadata. Dramatic scale up to
  ~11.5rem via fluid `clamp()`.
- **Corners** — `0px` everywhere (`borderRadius` overridden in the Tailwind theme).
- **Textures** — layered overlays (`.bg-lines`, `.bg-grid`, `.bg-diagonal`,
  `.bg-noise`, `.bg-radial-light`, `.bg-lines-light`) applied through the
  `<Texture>` / `<Section texture>` primitives. A faint global grain sits over all
  content via the `Layout`.
- **Motion** — `100ms` color inversions on hover; no shadows, gradients, or easing.
- **Accessibility** — skip link, `focus-visible` 3px outlines, input border-thicken
  on focus, 21:1 contrast, `prefers-reduced-motion` honored.

---

## Project structure

```
src/
├─ main.jsx               # app entry + BrowserRouter
├─ App.jsx                # routes
├─ index.css              # tokens, base, textures, focus system
├─ data/content.js        # ALL editorial copy (edit here)
├─ lib/cn.js              # className helper
├─ components/
│  ├─ ui/                 # Button, Container, Section, Texture, Atoms
│  ├─ layout/             # Navbar, Footer, Layout
│  ├─ sections/           # Hero, Manifesto, Stats, Approach, SelectedWorks,
│  │                      #   Process, Testimonials, Engagement, FinalCTA
│  ├─ PageHeader.jsx
│  └─ ProjectCard.jsx
└─ pages/                 # Home, Studio, Work, Project, Journal, JournalPost,
                         #   Contact, NotFound
public/images/            # architectural photography (B&W)
```

---

## Customizing

- **Content** — all studio info, projects, journal posts, testimonials, awards and
  engagement tiers live in [`src/data/content.js`](src/data/content.js). Edit there;
  the whole site updates.
- **Colors / fonts** — `:root` variables in `src/index.css` and the matching
  `theme.extend` in `tailwind.config.js`.
- **Images** — replace files in `public/images/` (keep the same filenames, or update
  the paths in `content.js`).

---

*Architecture as Discipline.*
