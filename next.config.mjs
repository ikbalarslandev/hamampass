import createNextIntlPlugin from "next-intl/plugin";

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

export default withNextIntl(nextConfig);
