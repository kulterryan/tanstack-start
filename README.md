# TanStack Start Demo with shadcn/ui

This is a demo project showcasing the use of [TanStack Start](https://tanstack.com/start) with [shadcn/ui](https://ui.shadcn.com/) components. It demonstrates a modern React application structure, routing, and a rich set of accessible UI primitives.

## Deployment

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/eKZ46C?referralCode=Y4mYdQ)

## Features

- ⚡️ Built with [TanStack Start](https://tanstack.com/start) for file-based routing and SSR.
- 🎨 UI powered by [shadcn/ui](https://ui.shadcn.com/) components.
- 🧩 Modular component structure for easy customization.
- 🛠️ TypeScript, PostCSS, and modern tooling.
- 📦 Package management with pnpm.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22+ recommended)
- [pnpm](https://pnpm.io/) (install with `npm i -g pnpm`)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build

```bash
pnpm run build
```

## Project Structure

```
app/
  components/
    ui/           # shadcn/ui components
  hooks/          # Custom React hooks
  lib/            # Utility functions
  routes/         # Route files (file-based routing)
  styles/         # Global and component styles
```

## Customization

- Add or modify UI components in `app/components/ui/`.
- Define new routes in `app/routes/`.
- Update global styles in `app/styles/app.css`.

## Resources

- [TanStack Start Documentation](https://tanstack.com/start/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)

## License

MIT

---

Made with ❤️ using TanStack Start and shadcn/ui.
