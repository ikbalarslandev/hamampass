// @hamampass/i18n/lib/mid.js
import createMiddleware from "next-intl/middleware";

// Define the middleware configuration
const i18nMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "tr"],

  // Used when no locale matches
  defaultLocale: "en",
});

export default i18nMiddleware;
