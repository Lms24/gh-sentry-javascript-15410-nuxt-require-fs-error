import * as Sentry from "@sentry/nuxt";

Sentry.init({
  dsn: "https://bdd901f0f86462a904ae51a6a001e0fd@o447951.ingest.us.sentry.io/4508052400570368",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: true,
});
