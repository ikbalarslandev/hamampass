import createNextIntlPlugin from "next-intl/plugin";
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

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
  webpack: (config, { isServer }) => {
    // Add the PrismaPlugin for server-side builds
    if (isServer) {
      config.plugins = [...(config.plugins || []), new PrismaPlugin()];
    }

    // If there are any custom webpack modifications, return the updated config
    return config;
  },
};

// Apply withNextIntl and export the final config
export default withNextIntl(nextConfig);
