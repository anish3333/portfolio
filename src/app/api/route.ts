import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ message: "Server is Healty" });
}

// need to configure next.config.mjs