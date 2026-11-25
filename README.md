# ScrollMotion Skill

A clean-room library of 20 expressive UI components and 20 scroll/motion/background recipes for AI coding agents. Inspired by the broad motion-design category represented by Scrolltide; no paid source or prompts are reproduced.

> Status: All four implementation phases are present. Each inventory entry links to its authored PNG preview in `assets/previews/`.

## Components

| Preview | Component | Description |
|---|---|---|
| ![Preview](assets/previews/particle-globe.png) | Particle Globe | Interactive point-sphere rotates with pointer drag and proximity glow. |
| ![Preview](assets/previews/morph-navbar.png) | Morph Navbar | Navigation capsule changes silhouette and density as the page scrolls. |
| ![Preview](assets/previews/spotlight-carousel.png) | Spotlight Carousel | Active card receives a focused pool of light. |
| ![Preview](assets/previews/glow-ring-button.png) | Glow Ring Button | Cursor-tracking luminous ring around a focused action. |
| ![Preview](assets/previews/glass-tabs.png) | Glass Tabs | Frosted tabs with a sliding active indicator. |
| ![Preview](assets/previews/arc-carousel.png) | Arc Carousel | Cards rotate through a shallow cinematic arc. |
| ![Preview](assets/previews/fan-deck.png) | Fan Deck / Fan Carousel | Fanned cards spread and elevate on interaction. |
| ![Preview](assets/previews/image-tunnel.png) | Image Tunnel | Image planes recede through a scroll-controlled depth tunnel. |
| ![Preview](assets/previews/particle-text.png) | Particle Text | Letterforms assemble from points and scatter on hover. |
| ![Preview](assets/previews/focus-reveal.png) | Focus Reveal | Sentence resolves from soft blur to crisp focus word by word. |
| ![Preview](assets/previews/crumple-reveal.png) | Crumple Reveal | Content unfolds from a paper-like compressed state. |
| ![Preview](assets/previews/ink-button.png) | Ink Button | Organic ink wash fills an accessible action button. |
| ![Preview](assets/previews/receipt-printer.png) | Receipt Printer | Receipt content prints into view line by line. |
| ![Preview](assets/previews/trail-pamphlet.png) | Trail Pamphlet | Folded panels open in sequence with a trailing motion. |
| ![Preview](assets/previews/stack-slider.png) | Stack Slider | Layered cards advance through a depth stack. |
| ![Preview](assets/previews/flow-tunnel.png) | Flow Tunnel | A flowing depth passage connects neighboring sections. |
| ![Preview](assets/previews/tilt-carousel.png) | Tilt Carousel | Cards tilt subtly toward pointer or device orientation. |
| ![Preview](assets/previews/orbit-gallery.png) | Orbit Gallery | Gallery items circle a central focal point. |
| ![Preview](assets/previews/intro-loader.png) | Intro Loader | Progress cue transitions into a restrained content reveal. |
| ![Preview](assets/previews/petal-dissolve.png) | Petal Dissolve | Petal-like fragments disperse to reveal the next scene. |

## Animations and shader backgrounds

| Preview | Animation | Description |
|---|---|---|
| ![Preview](assets/previews/borealis.png) | Borealis | Layered aurora ribbons drift across a dark sky. |
| ![Preview](assets/previews/mercury.png) | Mercury | Reflective liquid-metal surface ripples like chrome. |
| ![Preview](assets/previews/silk-mesh.png) | Silk Mesh | Soft animated mesh-gradient color fields. |
| ![Preview](assets/previews/ember-bloom.png) | Ember Bloom | Warm ember-like flame blooms over a dark field. |
| ![Preview](assets/previews/plasma-gradient.png) | Plasma Gradient | Fluid, saturated plasma colors flow across the canvas. |
| ![Preview](assets/previews/dot-screen.png) | Dot Screen | Halftone dots modulate light and shadow. |
| ![Preview](assets/previews/swirl-gradient.png) | Swirl Gradient | Vortex-shaped gradient turns around a soft focal point. |
| ![Preview](assets/previews/nebula-starfield.png) | Nebula Starfield | Sparse stars sit within a clouded nebula field. |
| ![Preview](assets/previews/silk-lines.png) | Silk Lines | Fine luminous wave lines ripple like woven fabric. |
| ![Preview](assets/previews/flow-field-particle-trails.png) | Flow-Field Particle Trails | Particles trace directional currents through space. |
| ![Preview](assets/previews/scroll-driven-parallax-reveal.png) | Scroll-driven Parallax Reveal | Layered content separates gently as it enters view. |
| ![Preview](assets/previews/scroll-pin-scrub-hero.png) | Scroll Pin + Scrub Hero | Pinned hero progresses in sync with scroll position. |
| ![Preview](assets/previews/text-focus-reveal.png) | Text Focus Reveal | Scrolling sharpens blurred text progressively. |
| ![Preview](assets/previews/particle-morph.png) | Particle Morph | Point cloud transitions between typed shapes. |
| ![Preview](assets/previews/ink-dissolve.png) | Ink Dissolve | Ink-like mask spreads to transition between states. |
| ![Preview](assets/previews/bayer-drift.png) | Bayer Drift | Dither pattern drifts under restrained film grain. |
| ![Preview](assets/previews/total-eclipse.png) | Total Eclipse | Dark disc and volumetric rays create an eclipse scene. |
| ![Preview](assets/previews/chrome-ooze.png) | Chrome Ooze | Metallic metaball forms merge and separate. |
| ![Preview](assets/previews/prism-eclipse.png) | Prism Eclipse | Conic spectrum arcs around a dark eclipse core. |
| ![Preview](assets/previews/cursor-reactive-glow-magnetic-hover.png) | Cursor-reactive Glow + Magnetic Hover | Local glow and restrained magnetic response follow the pointer. |

## Structure

`components/<kebab-name>/Component.tsx` + local styles and README; `animations/<kebab-name>/Animation.tsx`, optional `shader.glsl`, styles and README; `assets/previews/<kebab-name>.png`; and `demo/` for the interactive Vite showcase. See [SKILL.md](SKILL.md) for agent instructions and validation criteria.

## Development

```sh
npm install
npm run dev
npm run typecheck
npm run build
```
