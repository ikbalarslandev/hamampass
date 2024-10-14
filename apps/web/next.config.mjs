import withNextIntl from "@hamampass/i18n/lib/plugin.js";
import prismaVercelConfig from "@hamampass/db/prisma/index.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "purepng.com",
      "external-content.duckduckgo.com",
      "duckduckgo.com",
      "www.tooistanbul.com",
      "lh3.googleusercontent.com",
      "flagsoftheworld.info",
      "utfs.io",
    ],
  },
  ...prismaVercelConfig,
};

export default withNextIntl(nextConfig);
