import createNextIntlPlugin from "next-intl/plugin";
import prismaVercelConfig from "@hamampass/db/prisma";

// Create the withNextIntl plugin
const withNextIntl = createNextIntlPlugin();

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

// Apply withNextIntl and export the final config
export default withNextIntl(nextConfig);
