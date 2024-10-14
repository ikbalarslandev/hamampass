import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

const prismaVercelConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...(config.plugins || []), new PrismaPlugin()];
    }

    return config;
  },
};

export default prismaVercelConfig;
