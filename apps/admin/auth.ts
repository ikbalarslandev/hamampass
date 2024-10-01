import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/prisma/db";

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
        });

        if (!user || user.password !== password) {
          throw new Error("Invalid credentials.");
        }

        return {
          propertyId: user.propertyId,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.propertyId = user.propertyId;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.propertyId = token.propertyId as string;
      }

      return session;
    },
    async redirect() {
      return "/";
    },
  },
});
