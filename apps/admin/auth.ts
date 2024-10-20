import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "@hamampass/db";
import { TProperty } from "@hamampass/db/types";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        id: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { id, password } = credentials as {
          id: string;
          password: string;
        };

        const user = await prisma.admin.findUnique({
          where: {
            id,
          },
          include: {
            properties: {
              include: {
                products: true,
              },
            },
          },
        });

        if (!user || user?.password !== password) {
          throw new Error("Invalid credentials.");
        }

        return {
          id: user.id,
          properties: user.properties as unknown as TProperty[],
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.properties = user.properties;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.properties = token.properties as TProperty[];
      }

      return session;
    },
    async redirect() {
      return "/";
    },
  },
});
