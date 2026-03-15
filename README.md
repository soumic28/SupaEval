## SupaEval Landing Page

This repo contains the SupaEval marketing site built with Next.js, plus a local Strapi CMS project under `strapi/my-strapi-project`.

## Setup

1. Install dependencies for the Next.js app:

```bash
npm install
```

2. Create a local environment file:

```bash
cp .env.example .env.local
```

3. Start the landing page:

```bash
npm run dev
```

The app runs at `http://localhost:3000`.

## Optional: Run Strapi locally

If you want CMS-backed content locally, install and run the Strapi app separately:

```bash
cd strapi/my-strapi-project
npm install
npm run dev
```

Strapi runs at `http://localhost:1337/admin`.

## Useful Scripts

- `npm run dev` or `npm run dev:web`: start the Next.js app
- `npm run dev:cms`: start the Strapi app from the repo root
- `npm run build`: production build for Next.js
- `npm run lint`: lint the Next.js app

## Environment

Copy `.env.example` to `.env.local` and update as needed:

```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_API_TOKEN=
```

The API token is optional unless your Strapi instance requires authenticated API access.
