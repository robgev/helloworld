# Hello World Fade-In Demo

This demo adds a dedicated `/hello` route that centers a semantic `h1` reading "Hello World" and reveals it with a CSS-only fade-in animation.

## Behavior
- Navigation to `/hello` renders a minimal page wrapper with data hooks:
  - Container: `data-testid="hello-container"`, `data-hello-world="container"`
  - Heading: `data-testid="hello-text"`, `data-hello-world="text"`
- The heading animates from 0% to 100% opacity over 700ms using `ease-in-out` and replays on each mount.
- A `prefers-reduced-motion: reduce` media query disables the animation and presents the heading instantly.

## Adjusting the Animation
- Duration/easing live in `src/styles/hello.css` on the `.fade-in` rule. Tweak `animation: helloFade 700ms ease-in-out forwards;` to change timing or easing.
- Keyframes (`@keyframes helloFade`) control the opacity endpoints; keep them at `0` and `1` to maintain accessibility expectations.

## Accessibility & Performance Checklist
- Semantic heading and centered layout verified via unit and e2e tests.
- Reduced-motion path confirmed in Playwright (`chromium-reduced-motion` project) to avoid unintended motion.
- Added CSS is under 1KB, contains no transforms, and relies on opacity only, minimizing layout impact and FCP regression risk.
