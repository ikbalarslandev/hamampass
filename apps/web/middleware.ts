import i18nMiddleware from "@hamampass/i18n/lib/middleware";

export default i18nMiddleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(tr|en)/:path*"],
};
