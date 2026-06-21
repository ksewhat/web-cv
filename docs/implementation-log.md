# Implementation Log

## Phase 1 — Project scaffold + TopBar + Hero

### Overview

Initial scaffold of the IT Engineer CV as a Next.js application. The goal of this phase was to establish a working project structure and implement only the top two visible sections: the sticky navigation bar and the identity / stat-tile hero area.

The visual design was imported from a Claude Design project (`reference/index.html`) and is used as a pixel-level reference only — no code was copied from it.

---

### Stack

| Layer | Choice | Version |
|---|---|---|
| Framework | Next.js (App Router) | ^15.3.3 |
| Language | TypeScript | ^5.8.3 |
| Styling | Tailwind CSS v3 | ^3.4.17 |
| Runtime | Node.js | 20.x |
| Package manager | npm | 10.x |

Tailwind v3 was chosen over v4 for its stable `tailwind.config.ts` API. v4 shifts configuration into CSS and would add friction for custom token work at this stage.

---

### Files created

```
web-cv/
├── app/
│   ├── globals.css        # body background, grid lines, ::selection, @tailwind directives
│   ├── layout.tsx         # HTML shell, JetBrains Mono (next/font), Pretendard (CDN link), grain SVG
│   └── page.tsx           # root page — assembles TopBar + Hero
├── components/
│   ├── Hero.tsx           # identity card + 2×2 stat tiles
│   └── TopBar.tsx         # sticky bar with live KST clock (client component)
├── data/
│   └── profile.ts         # typed profile object — single source of truth for all CV content
├── next.config.ts         # minimal Next.js config
├── package.json
├── postcss.config.mjs     # tailwindcss + autoprefixer
├── tailwind.config.ts     # custom color tokens, font families, shadows, pulse keyframe
└── tsconfig.json
```

---

### Structure rationale

**`data/profile.ts`** holds all CV content as a typed `const` object. Components import from it rather than containing their own strings. This makes content changes a single-file edit and keeps components logic-free.

**`components/`** at the root (not `src/`) matches the flat Next.js App Router convention. Components are co-located by feature, not by type.

**`TopBar.tsx` is the only client component** (`'use client'`). It owns the live KST clock via `useEffect` / `setInterval`. Everything else is a server component.

**Fonts** — JetBrains Mono is loaded through `next/font/google` (zero layout shift, self-hosted by Next.js). Pretendard is loaded via a `<link>` tag in `layout.tsx` pointing to the jsDelivr CDN, because it is not available on Google Fonts. The earlier approach of using `@import` in `globals.css` was removed to avoid a duplicate request.

**Tailwind custom tokens** mirror the design's color palette directly:
- `warm-*` — page and card backgrounds (`#e7e4de` → `#dcd7cf`)
- `sage-*` — primary green accent (`#8fa68e`, `#6e8a6c`)
- `ink-*` — text hierarchy (`#2f2c27` → `#a39d92`)
- `sky`, `terra` — secondary accent colors (blue-muted, terracotta)
- `chip` — contact chip background (`#ece9e3`)

The `pulse` keyframe is defined in `tailwind.config.ts` (not in `globals.css`) so it can be used via the `animate-pulse` utility class directly in JSX.

**Background texture** — the subtle dot-grid is applied as a CSS `background-image` in `globals.css`. The grain overlay is an inline `<svg>` with `feTurbulence` in `layout.tsx`, fixed-positioned behind all content (`z-index: -1`). This avoids a missing-asset dependency on a PNG file.

---

### Not yet implemented

The following sections from the design are deferred to later phases:

- Competency gauges (circular SVG)
- Stack-mix donut chart
- Currently-learning progress bars
- Activity heatmap
- Life timeline
- Skill Stack section
- Career section
- Portfolio section
- Footer

---

### How to run

```bash
cd /root/workspace/web-cv
npm run dev
```

The dev server starts on port 3000.

---

### How to verify from the VM

Open a browser on the VM and navigate to:

```
http://localhost:3000
```

What to confirm:
- The sticky top bar shows `seungeun.dev / engineer / overview`, a live KST clock that ticks every second, and a pulsing AVAILABLE badge.
- The identity card shows the "SK" hatched avatar, Korean and English name, title line, bio, and four contact chips.
- The 2×2 stat grid shows Experience (with sparkline), Stacks (with mini bar chart), Role (APM 파트장), and Mindset (24/7).
- The background has a warm beige (`#e7e4de`) color with faint grid lines and a subtle grain texture.

To confirm no TypeScript or build errors:

```bash
npm run build
```

A clean build produces no errors and outputs a static route at `/`.
