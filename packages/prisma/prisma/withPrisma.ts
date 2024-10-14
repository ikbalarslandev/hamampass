import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";
import { NextConfig } from "next";

const withPrisma = (nextConfig: NextConfig = {}): NextConfig => {
  return {
    ...nextConfig,
    webpack: (config, options) => {
      const { isServer } = options;

      if (isServer) {
        config.plugins = [...(config.plugins || []), new PrismaPlugin()];
      }

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
};

export default withPrisma;
