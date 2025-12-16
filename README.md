# React "Hello World" Fade-In Demo

This project hosts a standalone `/hello` route that renders a centered "Hello World" heading with a CSS-only fade-in animation. The implementation is dependency-light, responsive, and includes QA hooks plus automated coverage.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:4173/hello` to view the demo.

## QA Hooks

- Container: `data-testid="hello-container"`, `data-hello-world="container"`
- Text: `data-testid="hello-text"`, `data-hello-world="text"`

These attributes are stable and used across the unit and E2E test suites.

## Animation Controls

Animation styles live in `src/routes/HelloWorldPage.module.css`:

- Duration: `700ms` (tweak `animation: fadeIn 700ms ...`)
- Easing: `ease-in-out`
- Keyframes: `@keyframes fadeIn`

To change duration/easing, update the `.title` animation declaration. Reduced-motion is enforced both via a React hook (`usePrefersReducedMotion`) and by CSS fallbacks to guarantee instant rendering when users opt out of motion.

## Scripts

- `npm run dev` – Start Vite dev server
- `npm run build` – Type-check and build for production
- `npm run test` – Run unit tests (Vitest)
- `npm run test:e2e` – Run Playwright E2E tests (auto-spawns dev server)
- `npm run lint` – ESLint with React rules

## Accessibility & Performance

- Semantic `<h1>` heading, high-contrast palette, and respect for `prefers-reduced-motion`
- Minimal CSS (≈1 KB) and no third-party animation libraries keep performance impact negligible
- `index.html` renders "Hello World" within `#root` and `<noscript>` to ensure graceful degradation when JS or CSS is disabled
