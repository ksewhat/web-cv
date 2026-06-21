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

---

## Phase 3 — Career Section

### What changed

Added the `경력 / Career` section (section `02`) below Skill Stack. It displays one career entry — ㈜ 와치텍 — with a company header, tenure badge, three metric tiles, and three bullet points.

### Why it changed

The reference (`reference/index.html` lines 416–470) defines a structured career card with distinct sub-regions. Each sub-region is isolated into its own component to keep `CareerCard` readable and to allow the bullet pattern to be used independently if additional sections need it later.

### Files created

| File | Purpose |
|------|---------|
| `data/career.ts` | Types (`MetricTile`, `BulletItem`, `CareerEntry`) + `careerEntries` array |
| `components/CareerBullet.tsx` | Green dot with glow ring + title + optional mono tag + description |
| `components/CareerCard.tsx` | Full card: header row, divider, metric tiles grid, bullet list |
| `components/CareerSection.tsx` | Section wrapper — `SectionHeader` + one `CareerCard` per entry |

### Files modified

| File | Change |
|------|--------|
| `app/page.tsx` | Added `<CareerSection />` import and usage after `<SkillStack />` |

### Design notes

**`CareerEntry` data shape** — `company`, `role`, and `tenure` each carry both `ko` and `en` strings. `metrics` and `bullets` are typed arrays so new entries require no component changes.

**Tenure badge** — styled identically to the AVAILABLE badge in `TopBar`: `border-sage-300 bg-sage-500/[.14] text-sage-600 rounded-lg`. This is not a `Pill` (which uses `rounded-full`); the badge is `rounded-lg` per the reference.

**Bullet glow ring** — the 9 × 9 px sage dot uses `boxShadow: '0 0 0 4px rgba(143,166,142,.16)'` as an inline style. This soft ring is not expressible as a Tailwind utility without a custom token, so an inline style was used to match the reference exactly.

**Metric tile grid** — `repeat(auto-fit, minmax(110px, 1fr))` in an inline style, consistent with the `SkillGroupCard` grid pattern. Three tiles at 110 px minimum fill the card naturally at all widths.

**`SectionHeader` reuse** — `<SectionHeader number="02" title="경력" subtitle="Career" />` confirms the component handles all sections without modification.

**No `Pill` usage** — the Career section in the reference contains no pill-shaped tags; all badges are rectangular (`rounded-lg` or `rounded-[10px]`).

### How to verify

```bash
npm run dev   # http://localhost:3000
```

Scroll below the Skill Stack section and confirm:

- Section header shows `02  경력  Career` with the gradient rule.
- A single card for ㈜ 와치텍 appears with `WATCHTEC` in muted mono beside it.
- Top-right of the card shows `3년 5개월 · 3y 5m` in the sage badge.
- A horizontal divider separates the header from the body.
- Three metric tiles: `BMT/POC`, `Build→Ops`, `QA` — each with a Korean + English sub-label.
- Three bullet points with a 9 × 9 px sage dot and a soft glow ring, followed by the Korean title, optional mono tag, and an English description.

```bash
npm run build   # zero TypeScript errors
```

---

## Phase 4 — Overview Dashboard Widgets

### What changed

Added five Overview dashboard widgets between the Hero section and the Skill Stack section. They occupy "Row 2" of the Overview layout: a 4-column auto-fit grid (Competency Gauges, Stack Mix Donut, Currently Learning, Activity Heatmap) followed by a full-width Life Timeline card.

### Why it changed

The reference (`reference/index.html` lines 134–298) defines these widgets as part of the Overview section, positioned between the identity / stat tiles (Hero) and the numbered sections (01 Skill Stack, 02 Career). Each widget is self-contained and visualises a distinct profile dimension: raw skill scores, stack distribution, active learning, recent activity, and biographical events.

### Files created

| File | Purpose |
|------|---------|
| `data/competency.ts` | `CompetencyItem[]` — label (ko/en), score 0–100, hex color |
| `data/stackMix.ts` | `StackSegment[]` — label, percentage, hex color for the donut |
| `data/learning.ts` | `LearningItem[]` — label + progress percentage |
| `data/timeline.ts` | `TimelineEvent[]` with `TimelineTag` union (`LIFE \| EDU \| WORK`) |
| `data/heatmap.ts` | `heatmapCells: number[]` — 112 precomputed values (16 weeks × 7 days, 0–4) |
| `components/CompetencyGauges.tsx` | SVG circular gauges; arc math computed from score (circumference = 2π × 35) |
| `components/StackMixDonut.tsx` | SVG donut with cumulative `strokeDashoffset` segments; SVG rotated −90° |
| `components/LearningBars.tsx` | Progress bar rows with gradient fill and `● live` badge |
| `components/ActivityHeatmap.tsx` | CSS grid (7 rows, `grid-auto-flow:column`) from precomputed array; 5 color levels |
| `components/LifeTimeline.tsx` | Horizontal timeline with per-tag dot colors and badge styles (LIFE/EDU/WORK) |
| `components/OverviewWidgets.tsx` | Assembles the 4-card grid + timeline, inserted between Hero and SkillStack |

### Files modified

| File | Change |
|------|---------|
| `app/page.tsx` | Added `<OverviewWidgets />` import and usage between `<Hero />` and `<SkillStack />` |

### Design notes

**Gauge SVG math** — circumference = 2π × 35 = 219.9. Each arc uses `strokeDasharray="${(score/100 × C).toFixed(1)} ${C.toFixed(1)}"` and `transform="rotate(-90 42 42)"` to start at the top. Values match the reference exactly (95% → 208.9, 88% → 193.5, 80% → 175.9).

**Donut SVG** — circumference = 2π × 40 = 251.3. The whole SVG element is CSS-rotated −90°. Each segment uses a `strokeDashoffset` equal to the negative sum of all preceding dashes. Offsets are computed cumulatively in `StackMixDonut.tsx` before render (no side-effects in JSX).

**Heatmap** — precomputed array in `data/heatmap.ts` (not DOM manipulation). The grid uses `gridTemplateRows: repeat(7, 1fr)` and `gridAutoFlow: column` so cells flow column-major (week columns, day rows). Five level colors hardcoded as inline styles because they don't map to existing Tailwind tokens.

**Timeline connector rule** — `bg-warm-400` (`#e2ddd5`), positioned absolute `top-[8px]` so it aligns with the centre of the 16 px dot. The dot uses `bg-warm-100` matching the card background, with a coloured border and box-shadow glow ring (inline style, no Tailwind equivalent).

**Tag badge colours** — LIFE (terra tones), EDU (sky tones), WORK (sage tones). All inline-styled because the alpha-tinted backgrounds and unique border shades are not in the token set.

**No client-side JS added** — all 5 components are server-rendered static SVG / HTML. The KST clock in TopBar remains the only live behaviour.

### How to verify

```bash
npm run dev   # http://localhost:3000
```

Scroll just below the Hero section and confirm:

- **Competency Gauges**: Three circular arcs — sage (95), sky-blue (88), terra-pink (80) — with Korean + English labels beneath each.
- **Stack Mix Donut**: Tricolour donut showing "14+" in the centre, with three legend rows and percentage labels.
- **Currently Learning**: Three gradient progress bars (Kubernetes 심화 80%, OpenTelemetry 70%, Go 65%) with "● live" badge.
- **Activity Heatmap**: 16-column × 7-row grid of green-shaded squares with Less / More legend.
- **Life Timeline**: Full-width card with four events (LIFE terra, EDU sky ×2, WORK sage), horizontal rule connector, coloured dots, and tag badges.
- Existing Skill Stack and Career sections remain unchanged below.

```bash
npm run build   # zero TypeScript errors
```
