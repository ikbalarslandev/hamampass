import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getProperty } from "./actions/admin";
import { NextRequest } from "next/server";

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

        const url = new URL("http://localhost:3000/api/admin");
        url.searchParams.set("id", id);
        url.searchParams.set("password", password);

        const req = new NextRequest(url);

        const res = await getProperty(req);

        let data;
        // Check if the response is a Response object and parse it
        if (res instanceof Response) {
          if (!res.ok) {
            throw new Error("Failed to fetch property");
          }
          data = await res.json();
        } else {
          // If it's not a Response, assume it's already parsed
          data = res;
        }

        const property = data?.property;

        if (!property) {
          // No property found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("property not found.");
        }

        // return property object with their profile data
        return property;
      },
    }),
  ],
});
