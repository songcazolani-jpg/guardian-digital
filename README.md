# NDW Financial Services

Marketing website for **NDW Financial Services (Pty) Ltd.** — insurance, advisory, and outsourced contact-centre services for South African businesses and families.

Built with TanStack Start, React 19, Tailwind CSS v4, and deployed to Cloudflare Workers.

## Features

- Multi-page marketing site (Home, About, Services, Affiliates, Associations, FAQ, Blog, Contact)
- Lead capture and newsletter forms with API routes
- SEO metadata, sitemap, and robots.txt
- Responsive layout with Radix UI components
- Cloudflare Workers deployment via `@cloudflare/vite-plugin`

## Tech stack

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router)
- React 19 + TypeScript
- Tailwind CSS v4
- Vite 7
- Cloudflare Workers (Wrangler)

## Getting started

### Prerequisites

- Node.js 22+
- npm or Bun

### Install

```bash
npm install
```

### Environment variables

Copy the example env file and add your keys:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | API key for [Resend](https://resend.com) (contact form & newsletter emails) |

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (port may vary).

### Build

```bash
npm run build
```

### Lint & format

```bash
npm run lint
npm run format
```

## Project structure

```
src/
├── routes/          # File-based routes (pages + API)
├── components/      # Layout, sections, forms, UI
├── config/site.ts   # Site copy, nav, services
├── assets/          # Images and logos
└── styles.css       # Global styles
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## License

Private — NDW Financial Services (Pty) Ltd.
