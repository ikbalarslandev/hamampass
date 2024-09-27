import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/prisma/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        id: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { id, password } = credentials as {
          id: string;
          password: string;
        };

        const property = await prisma.admin.findUnique({
          where: {
            id,
          },
          include: {
            property: true,
          },
        });

        if (!property || property.password !== password) {
          // If you return null or false then the credentials will be rejected
          throw new Error("property not found.");
        }

        // return property object with their profile data
        return property;
      },
    }),
  ],

  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
});
