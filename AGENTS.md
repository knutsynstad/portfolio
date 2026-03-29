# AGENTS.md

Instructions for AI agents working in this repository.

## Project

Design portfolio for Knut Synstad. Built with Next.js 16 (App Router), React 19, TypeScript (strict), and Tailwind CSS 4.

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

## Conventions

- Server Components by default. Add `"use client"` only when state or browser APIs are needed.
- Use `next/image` for images, `next/link` for internal navigation.
- Tailwind utility classes for styling. No CSS modules, no styled-components.
- Run `npm run check` before considering any change complete.

## Detailed Rules

See `.cursor/rules/` for file-specific guidance on React/Next.js patterns and Tailwind styling.
