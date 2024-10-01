import { NextRequest, NextResponse } from "next/server";
import { saveSub } from "@/actions/push";

export async function PUT(req: NextRequest) {
  try {
    const subscription = await saveSub(req);

    return NextResponse.json(subscription);
  } catch (error) {
    return NextResponse.json({ error: "Failed to save subs" }, { status: 500 });
  }
}
