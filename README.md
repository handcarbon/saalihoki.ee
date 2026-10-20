# Saalihoki.ee Angular

Angular SPA version of the Saalihoki.ee design prototype.

## Development

```bash
npm install
npm start
```

The app runs on `http://localhost:4200/` by default.

## Build

```bash
npm run build
```

The production bundle is written to `dist/saalihoki-ee/browser`.

## Deployment

Pushes to `main` automatically build and deploy the production bundle through
the GitHub Pages workflow in `.github/workflows/deploy-pages.yml`. The workflow
uses the Pages base path supplied by GitHub, so it works both at the repository
URL and with a configured custom domain.
