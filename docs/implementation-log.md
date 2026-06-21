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
- Career section
- Portfolio section
- Footer

---

## Phase 2 — Skill Stack section

### Overview

Added the Skill Stack section (section 01 in the design). This phase also introduced two primitives — `Pill` and `SectionHeader` — that will be reused across all remaining sections.

---

### Files created

```
components/
├── Pill.tsx            # pill badge — default (warm/chip) and highlight (sage green) variants
├── SectionHeader.tsx   # numbered section heading + gradient rule, reusable across all sections
├── SkillGroupCard.tsx  # single skill group: icon badge, title, pills, proficiency bar
└── SkillStack.tsx      # section: header + full-width card + 3-column grid

data/
└── skills.ts           # SkillGroup type + four skill groups with items, proficiency, layout
```

### Files modified

- **`app/page.tsx`** — added `<SkillStack />` below `<Hero />`

---

### Design decisions

**`data/skills.ts` stays a plain `.ts` file** — icons are referenced by a string `iconId` (`'opensource' | 'server' | 'languages' | 'collaboration'`), not as JSX. The `CardIcon` function inside `SkillGroupCard.tsx` matches the id to the correct inline SVG. This keeps data files free of React imports.

**`highlight` flag on `SkillItem`** — the reference renders three pills (Grafana, Prometheus, OpenTelemetry) in sage green instead of the default warm/chip style. Rather than encoding color directly in data, a boolean flag drives the `Pill` variant. This separates presentation from data.

**`layout: 'full' | 'grid'`** — `SkillStack` separates the single full-width card from the 3-column grid without hardcoding indices. Adding a new group only requires adding it to `skills.ts` with the right `layout` value.

**`Pill` is extracted as its own component** — it will appear again in the Career and Portfolio sections (tech tags). Keeping it standalone avoids duplicating the two-variant style logic.

**`SectionHeader` is extracted as its own component** — every section (`기술스택`, `경력`, `포토폴리오`) uses the same `number · Korean title · English subtitle · gradient rule` pattern. One component handles all of them.

**Proficiency bar** uses an inline `style` for the `width` (data-driven percentage) and a CSS gradient for the fill. The track color uses `bg-warm-400` from the Tailwind token set.

---

### How to verify

```bash
npm run dev   # http://localhost:3000
```

Scroll below the Hero section and confirm:

- Section header shows `01  기술스택  Skill Stack` with a gradient rule to the right.
- Full-width "오픈소스 운영" card shows all 11 pills. Grafana, Prometheus, and OpenTelemetry render in sage green; the rest in the default warm style.
- Three cards below in a responsive grid: 서버 운영체제, 프로그래밍 언어, 협업·도구 — each with the correct icon, pills, and a proficiency bar.
- Hovering over a default pill shifts its border to sage green. Hovering over a card shifts its border to `warm-400`.

```bash
npm run build   # should produce zero TypeScript errors
```

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
