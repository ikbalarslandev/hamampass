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
          propertyId: user.propertyId, // Ensure property.id exists
        };
      },
    }),
  ],

  // cookies: {
  //   sessionToken: {
  //     name: `__Secure-next-auth.session-token`,
  //     options: {
  //       httpOnly: true,
  //       secure: process.env.NODE_ENV === "production",
  //       sameSite: "lax",
  //       path: "/",
  //     },
  //   },
  // },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.propertyId = user.propertyId;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.propertyId = token.propertyId as string; // Set propertyId in the session
      }

      return session;
    },
    async redirect() {
      return "/";
    },
  },
});
