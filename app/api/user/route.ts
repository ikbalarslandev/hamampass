import { NextRequest, NextResponse } from "next/server";
import { createUser } from "@/actions/user";

export async function POST(req: NextRequest) {
  try {
    const user = await createUser(req);

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
