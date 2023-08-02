import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default function handler(request: NextRequest) {
  return NextResponse.json(
    {
      request: {
        nextUrl: request.nextUrl
      },
      context: request
    },
    { status: 200 }
  );
};
