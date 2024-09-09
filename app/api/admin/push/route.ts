import { NextRequest, NextResponse } from "next/server";
import { saveSub } from "@/actions/push";

export async function PUT(req: NextRequest) {
  try {
    const properties = await saveSub(req);

    return NextResponse.json(properties);
  } catch (error) {
    return NextResponse.json({ error: "Failed to save subs" }, { status: 500 });
  }
}
