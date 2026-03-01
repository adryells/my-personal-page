# Personal Page (Adryell)

This repository hosts my personal/portfolio website built with React, TypeScript and Vite. It features:

- Multiple routes: **Home** and **Projects** (client‑side routing with HashRouter).
- Dark/light theme with system preference detection and persistence.
- Internationalization (i18next) in English, Portuguese and Spanish.
- SEO helpers using `react-helmet-async` for dynamic titles/descriptions.
- Progressive Web App support (offline, installable) via `vite-plugin-pwa`.
- Accessibility improvements: proper `aria` labels, focus outlines, and keyboard navigation.
- Performance tweaks: lazy-loaded images, srcset for WebP, code-splitting with `React.lazy`, prefetch links and optimized meta tags.
- Responsive layout, header with navigation and language selector.
- Dynamic project listing driven by `projectsData.json`.

## Running the project

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

After building, the app is optimized with code-splitting and service worker caches resources for offline use.

## Notes

- The `src/services` folder contains helper contexts (`themeContext`, `authContext`).
- Styles are written using CSS modules under `src/pages` and `src/components`.
- The application is deployed on Render (see `render.yaml`) but can easily be ported to other static hosts.

Feel free to explore and customize the content; the translation files under `src/locales` drive the copy.
