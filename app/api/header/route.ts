import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "header.json");
    const jsonData = await fs.promises.readFile(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Помилка зчитування JSON:", error);
    return NextResponse.json(
      { error: "Не вдалося завантажити дані", message: error.message },
      { status: 500 }
    );
  }
}
