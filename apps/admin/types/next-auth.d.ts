import NextAuth from "next-auth";
import { DefaultSession } from "next-auth";
import { TProperty } from "@hamampass/db/types";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      properties: TProperty[];
    } & DefaultSession["user"];
  }
  interface User {
    id: string;
    properties: TProperty[];
  }
}
