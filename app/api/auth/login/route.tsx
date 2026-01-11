import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "shamim@gmail.com";
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "bay@2026";

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid email or password",
      },
      { status: 401 }
    );
  }

  const response = NextResponse.json({
    success: true,
    message: "Login successful",
  });

  response.cookies.set("auth_token", "secure_admin_token", {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
