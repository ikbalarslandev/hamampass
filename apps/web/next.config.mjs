import createNextIntlPlugin from "next-intl/plugin";
import withPrisma from "@hamampass/db/prisma";

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
};

export default withNextIntl(withPrisma(nextConfig));
