# Nuxt Minimal Starter

## Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm build
```

## Reproduction

Everything affects **dev mode** in `pnpm`.

Trying nightly from this PR: https://github.com/nuxt/nuxt/pull/30922

- No nightly available for v3.16 (run: https://github.com/nuxt/nuxt/actions/runs/13219343255/job/36902669922)
- `nuxt-nightly@4.0.0-28986773.72d524b2` (run: https://github.com/nuxt/nuxt/actions/runs/13245849432/job/36984010347)

### Nuxt 3.15.4

Getting this error at startup:

```
ERROR  [nuxt] [request error] [unhandled] [500] Cannot find module '/[...]/gh-sentry-javascript-15410-nuxt-require-fs-error/node_modules/.pnpm/@opentelemetry+resources@1.30.1_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/execAsync' imported from /[...]/gh-sentry-javascript-15410-nuxt-require-fs-error/node_modules/.pnpm/@opentelemetry+resources@1.30.1_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-darwin.js
```

Changing the import `import { execAsync } from './execAsync';` in `getMachineId-darwin.js` to `import { execAsync } from './execAsync.js';` (adding the file extension), it works.

### Nuxt nuxt-nightly@3.16.0-29001470.86c960c6

Latest nightly when listing them with: `pnpm view nuxt-nightly versions`

Server is stuck here (also without having Sentry installed):

```
ℹ Running with compatibility version 3                                                                                                                                                                                                                                                          nuxt 12:10:32 PM
ℹ Re-optimizing dependencies because lockfile has changed                                                                                                                                                                                                                                            12:10:32 PM
✔ Vite client built in 25ms                                                                                                                                                                                                                                                                          12:10:32 PM
✔ Vite server built in 135ms                                                                                                                                                                                                                                                                         12:10:32 PM
✔ Nuxt Nitro server built in 603 ms                                                                                                                                                                                                                                                            nitro 12:10:33 PM
ℹ Vite client warmed up in 1ms                                                                                                                                                                                                                                                                       12:10:33 PM
ℹ Vite server warmed up in 1653ms    
```

Getting 503 Service Unavailable in browser.

### Nuxt nuxt-nightly@4.0.0-28986773.72d524b2

-> everything works out of the box
