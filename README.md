# Teenager Party frontend

Next.js application for the Teenager Party letters, using JavaScript, React,
the App Router, Tailwind CSS, and ESLint. The Strapi backend lives separately in
`../../backend/teenager-party-cms`; API integration will be added in a later step.

## Local development

Use Node.js 20.9 or newer. With nvm installed:

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Edit `src/app/page.js` to update the home page and `src/app/layout.js` for shared
layout and metadata. The `@/*` import alias points to `src/*`.

## Checks and production

```bash
npm run lint
npm run build
npm start
```

`npm start` serves the production build after `npm run build`.
