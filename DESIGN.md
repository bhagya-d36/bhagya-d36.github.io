# Design system

**Direction:** an instrument panel, not a brochure — a warm-charcoal canvas, monospace for anything that is data, hairline rules for structure, and a single signal-amber accent that only marks interaction.

**Explicit negative constraints:** no glow effects, no gradient orbs, no glassmorphism/backdrop-blur, no indigo/violet/neon-cyan, no gradient text, no icon-above-heading cards, no emoji as icons, no decorative section numbering, no pill-tag soup, no invented metrics or testimonials.

**The one signature moment:** the Skills section renders as a capability matrix (a hairline-ruled table), not tag pills. Everything else stays quiet.

## Color (`app/globals.css` `@theme`)

Warm-tinted neutrals (hue ≈ 35°), one accent. Neutrals do ~90% of the work.

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#12100e` | base canvas |
| `--color-surface-1` | `#1a1714` | cards |
| `--color-surface-2` | `#221e1a` | raised / mobile sheet |
| `--color-line` | `#2e2925` | hairlines |
| `--color-line-strong` | `#3a342e` | hairline on hover/active |
| `--color-text` | `#f2ede6` | primary text |
| `--color-text-secondary` | `#b5aca1` | body support |
| `--color-text-muted` | `#8f8579` | metadata, mono labels |
| `--color-accent` | `#e0a458` | links, focus ring, primary action |
| `--color-accent-hover` | `#f0b978` | accent hover/active |

Dark elevation is lightness steps (`bg` → `surface-1` → `surface-2`), never shadows, except one soft shadow reserved for the mobile menu sheet.

## Typography

IBM Plex Sans (400/500/600) + IBM Plex Mono (400/500), self-hosted via `next/font/google`. Mono is a role (labels, dates, tags, code-like data), not a second brand voice.

- Hero: `clamp(2.5rem, 6vw, 4.5rem)`, tracking `-0.03em`, line-height 1.05
- Section headings: 24–32px, tracking `-0.02em`, line-height 1.15
- Body: 17px / 1.6, max-width 68ch
- Mono labels: 12px, uppercase, tracking `+0.08em`, `--color-text-muted`
- Numerals: `tabular-nums` everywhere (dates, tables)

Three text color tiers only: `text`, `text-secondary`, `text-muted`.

## Spacing, radius, motion

- Base-4 spacing scale via Tailwind's default multiplier (`--spacing: 0.25rem`, so utility number × 4px): `p-1`=4px … `p-6`=24px, `p-8`=32px, `p-24`=96px, `p-32`=128px. **Do not add custom `--spacing-N` keys to `@theme`** — a numeric key there overrides Tailwind's computed multiplier for that exact utility number instead of extending it (this broke `top-16`/`h-16` site-wide during build and was reverted). Section rhythm: `py-24` mobile / `py-32` desktop (96px/128px).
- Radius scale: `sm` 2px (hairlines), `md` 4px (buttons), `lg` 6px (cards) — via `--radius-*` in `@theme`, which is a named (non-colliding) namespace. Sharp reads technical.
- Motion: Tailwind's default `duration-150`/`duration-200` utilities (micro-interactions) and default `ease-out`/`ease-in` easings, applied directly as classes — no separate custom tokens needed since the defaults already match the intended vocabulary (100–200ms micro-interactions, ease-out entrances). `transform`/`opacity` only. `prefers-reduced-motion` disables transforms globally (see `globals.css`).

## Component states

Every interactive element (nav links, buttons, cards, the copy-email control): default → hover (150ms color/border shift) → focus-visible (2px accent ring, 2px offset) → active (scale 0.98) → disabled (n/a on this site) → loading (`CopyEmail` only: idle → copied → failed-with-select-fallback).

## Content

All copy and links live in `content/cv.ts` — the single typed source of truth. Update the site by editing that file; components carry no hardcoded content.
