import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  const url = req.nextUrl;

  try {
    const filePath = path.join(process.cwd(), "data", `header.json`);
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Помилка зчитування JSON:", error);
    return NextResponse.json(
      { error: "Не вдалося завантажити дані", message: error.message },
      { status: 500 },
    );
  }
}
