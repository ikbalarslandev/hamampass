import createNextIntlPlugin from "@hamampass/i18n/lib/plugin.js";
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

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
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }
    return config;
  },
};

export default withNextIntl(nextConfig);
