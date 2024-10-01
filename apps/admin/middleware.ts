import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = await auth();
  const user = session?.user;

  if (!user && pathname !== "/login" && !pathname.startsWith("/api")) {
    console.log("Redirecting to /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (user && pathname === "/login") {
    console.log("Redirecting to /");
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
