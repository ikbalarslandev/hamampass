import { NextRequest, NextResponse } from "next/server";
import { saveSub, sendNotification } from "@/actions/push";

export async function PUT(req: NextRequest) {
  try {
    const subscription = await saveSub(req);

    return NextResponse.json(subscription);
  } catch (error) {
    return NextResponse.json({ error: "Failed to save subs" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const notification = await sendNotification();

    return NextResponse.json(notification);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send Notification" },
      { status: 500 }
    );
  }
}
