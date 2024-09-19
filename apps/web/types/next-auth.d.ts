import NextAuth from "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      nationality: string;
      age_range: number;
      gender: number;
      reviews: TReview[];
    } & DefaultSession["user"];
  }
}
