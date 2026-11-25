# ScrollMotion Skill

Original, composable React/TypeScript patterns for cinematic interface motion. Use this skill when an agent needs scroll-aware navigation, tactile controls, expressive card layouts, particle effects, or animated shader-like backgrounds. Implementations are clean-room; Scrolltide is inspiration, not a code or prompt source.

## Install and integrate

1. Install dependencies with `npm install`; run `npm run typecheck` and `npm run build` before shipping.
2. Copy only the needed `components/<name>` or `animations/<name>` folder into the app. Preserve its local README and styles; add the folder's peer dependencies only when used.
3. Import its public component and styles, then compose in semantic HTML. Keep effects local to the component; avoid global scroll hijacking.
4. For scroll-linked effects use GSAP ScrollTrigger and clean up via `gsap.context().revert()`; use Lenis only when the host app owns smooth scrolling. Do not initialize competing scroll engines.
5. Shader/Three.js work must be lazy-loaded, resize-aware, dispose GPU resources, and provide a static CSS fallback.

## Catalog and API

The canonical inventory is exactly 20 UI components and 20 animation/background recipes. Each item folder documents its API, dependencies, reduced-motion behavior, and integration notes. The current demo imports all 40 entries and provides search, category filters, and individual live controls. Component entry point: `components/<kebab-name>/Component.tsx`; motion entry point: `animations/<kebab-name>/Animation.tsx`. Shader-based animations include `shader.glsl`. Keep APIs typed and narrowly scoped; prefer CSS variables and props for tuning rather than hard-coded app assumptions. The root README is the catalog index.

## Accessibility and performance rules

- Respect `prefers-reduced-motion`: replace continuous or scroll motion with a still state or brief opacity transition.
- Use native buttons/links, visible focus indicators, keyboard-operable controls, useful labels, and sufficient contrast.
- Avoid layout reads/writes in animation loops; animate transform/opacity where possible, throttle pointer input, and pause offscreen effects.
- Support touch and narrow viewports; never make hover the only way to access content.
- Keep heavy canvases lazy and bounded; target 60fps on mid-range devices and test on mobile.

## Verification checklist

- `npm run typecheck` and `npm run build` pass.
- Test keyboard-only use, touch, narrow layout, reduced motion, and no-WebGL fallback.
- Confirm scroll cleanup on unmount and no duplicate Lenis/ScrollTrigger instances.
- Check console for errors, GPU/resource leaks, overflow, and missing local preview assets.
- Ensure every catalog entry has a README and `assets/previews/<kebab-name>.png` before release. This repository currently includes 40 PNG previews, one per catalog entry.
