export { default } from "@hamampass/i18n/lib/middleware";

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(tr|en)/:path*"],
};
