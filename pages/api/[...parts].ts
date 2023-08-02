import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest) {
  return NextResponse.json(
    {
      parts: req.nextUrl.searchParams.getAll("parts"),
    },
    { status: 200 }
  );
};
