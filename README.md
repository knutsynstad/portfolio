# knutsynstad.com

The repository for knutsynstad.com. The design portfolio for Knut Synstad. It is built with Next.js 16 (App Router), React 19, TypeScript (strict), and Tailwind CSS 4.

## Structure

```
app/                  → Source code (pages, layouts, components)
app/components/       → Shared UI components
app/projects/<slug>/  → One page.tsx per project (all static)
public/               → Static assets (images, videos, PDFs)
```

Path alias: `@/*` → `./app/*`

## Commands

| Command              | Purpose                        |
| -------------------- | ------------------------------ |
| `npm run dev`        | Start dev server (Turbopack)   |
| `npm run build`      | Production build               |
| `npm run check`      | TypeScript + ESLint + Prettier |
| `npm run lint`       | ESLint only                    |
| `npm run typecheck`  | TypeScript only                |
| `npm run format`     | Prettier check                 |
| `npm run format:fix` | Prettier auto-fix              |

## Deployment

All successful updates to `main` are picked up by Github Actions for publishing to Github Pages.
