import { createMiddleware } from "@hamampass/i18n";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "tr"],

  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(tr|en)/:path*"],
};
