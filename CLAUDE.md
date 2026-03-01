# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**TALLK AI** — A Hebrew RTL single-page application for education and learning in an AI environment. Built with vanilla JavaScript and Vite (no framework). Apple.com-inspired design with dark theme, gradient accents, and scroll-reveal animations.

## Commands

- `npm run dev` — Start Vite dev server (HMR, typically port 5173)
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build locally

No linter, formatter, or test runner is configured.

## Architecture

This is a zero-framework SPA. The entire app is rendered via JS template literals injected into a single `#app` div.

- **`index.html`** — Shell HTML with `lang="he" dir="rtl"`, loads Heebo font and entry module
- **`src/main.js`** — All application logic in one file:
  - Data arrays at top (features, showcases, stats, testimonials, pricing, FAQ)
  - Visual component renderers (chat mockup, adaptive learning track, analytics dashboard)
  - Section render functions that return HTML strings
  - App mount: all sections joined and set as `innerHTML` on `#app`
  - Event listeners at bottom: nav scroll, mobile menu, FAQ accordion, scroll fade-in (IntersectionObserver), smooth anchor scroll
- **`src/style.css`** — All styles in one file using CSS custom properties (`:root` variables). Organized by section. Responsive breakpoints at 1024px and 768px.

## Key Conventions

- **Hebrew RTL**: All content is in Hebrew. The HTML document uses `dir="rtl"`. Use logical CSS properties (`margin-inline`, `padding-block`, etc.) rather than directional ones.
- **No build-time dependencies**: Only Vite as a dev dependency. No React, no TypeScript, no CSS preprocessor.
- **Render pattern**: Each section is a function returning a template literal string. Data is defined as JS arrays/objects and mapped into HTML. To add a new section, create a render function and add it to the mount array in `main.js`.
- **Animations**: Elements with class `fade-in` are observed by an IntersectionObserver and get `visible` class added on scroll.
- **Design tokens**: Colors, spacing, and radii are in CSS custom properties. The accent color is `--accent: #2997ff` (Apple blue). Buttons use `border-radius: 980px` (pill shape).
