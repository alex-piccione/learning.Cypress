# Learning Cypress

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Get Started

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Cypress

[![.github/workflows/cypress.yml](https://github.com/alex-piccione/learning.Cypress/actions/workflows/cypress.yml/badge.svg)](https://github.com/alex-piccione/learning.Cypress/actions/workflows/cypress.yml)

### Setup

```yarn add cypress --dev``` will install the cypress package.  
```node_modules/.bin/cypress open``` will create the _cypress_ folder and the _cypress.json_ file.  
You can add these comamnds to the _scripts_ section of _package.json_:
```json
  "test:ui:open": "cypress open",
  "test:ui:run": "cypress run"
```
To make it works within TypeScript you need to add the folllowing to the _tsconfig.json_ file:  
```json
  "compilerOptions": {
    "types": ["cypress"]
  },
```

### Run tests

See the scripts in _package.json_ to run Cypress with or withiut UI.

### Learned
+ Setup Cypress and use TypeScript
+ Navigate Cypress history and info
+ use the .get with complex querySelector
+ use loop and multiple _it()_ in it (cypress run everything in async)
+ add test of component

#### To learn
- use Gherkin language

## Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
