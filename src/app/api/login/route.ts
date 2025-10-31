import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const backendURL = process.env.BACKEND_URL;
  try {
    const response = await fetch(`${backendURL}/login`);
    return NextResponse.json({ response }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "failed to load data" }, { status: 500 });
  }
}
