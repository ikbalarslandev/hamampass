import NextAuth from "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      propertyId: string;
    } & DefaultSession["user"];
  }
  interface User {
    propertyId: string;
  }
}
