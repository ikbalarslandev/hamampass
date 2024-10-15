import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { request } from "@hamampass/services";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async session({ session }) {
      try {
        const res = await request({
          type: "get",
          endpoint: `user/${session.user.email}`,
        });
        const data = await res.data;
        const user = session.user;
        if (data) {
          user.id = data.id;
          user.nationality = data.nationality;
          user.age_range = data.age_range;
          user.gender = data.gender;
        }
        session.user = user;
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
      return session;
    },
  },
});
