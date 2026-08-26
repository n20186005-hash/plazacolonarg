# Plaza Colón Córdoba — complete website delivery

This delivery contains the complete Astro + Tailwind + TypeScript source project, the lockfile, Cloudflare Worker configuration, local SVG branding resources, research notes, and the visual assets used or prepared for the site.

## Included folders and files

| Item | Contents |
|---|---|
| `src/` | Astro pages, components, styles and type declarations. |
| `public/` | Local favicon, Apple touch icon, logo-related public resources, manifest and robots file. |
| `assets/` | Real Plaza Colón photographs and supporting original visual assets, copied from the project asset archive. |
| `package.json`, `pnpm-lock.yaml`, `.node-version`, `pnpm-workspace.yaml` | Reproducible package and runtime configuration. |
| `astro.config.mjs`, `wrangler.jsonc`, `scripts/` | Astro and Cloudflare Worker deployment configuration. |
| `README.md`, `ideas.md`, `references-notes.md`, `disambiguation-research.md`, `professional-content-review.md` | Project, design and research documentation. |

## Asset note

The deployed pages reference stable `/manus-storage/…` paths because the hosted build uses managed static storage. The original local image files are deliberately included in `assets/` so that the website can be migrated to another hosting provider. When moving the project, upload the image files to the chosen static host and replace the corresponding `/manus-storage/…` paths in `src/components/GuidePage.astro` and `src/layouts/BaseLayout.astro`.

## Reproduction

Use Node.js `24.12.0`, enable Corepack, then run:

```sh
CI=1 corepack pnpm install --frozen-lockfile
corepack pnpm check
corepack pnpm build
```

The delivery intentionally excludes `node_modules/`, `dist/`, `.git/`, `.wrangler/`, `.astro/` and logs because they are machine-specific, reproducible or ephemeral rather than project source.
