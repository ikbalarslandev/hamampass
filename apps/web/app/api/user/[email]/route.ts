import { NextRequest, NextResponse } from "next/server";
import { getUserByEmail } from "@/actions/user";

export async function GET(req: NextRequest) {
  try {
    const user = await getUserByEmail(req);

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
