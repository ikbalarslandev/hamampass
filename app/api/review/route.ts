import { NextRequest, NextResponse } from "next/server";
import { isExist } from "@/actions/review";

export async function GET(req: NextRequest) {
  try {
    const IsExists = await isExist(req);

    return NextResponse.json(IsExists);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}
