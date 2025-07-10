import fs from "fs";
import path from "path";

export const fetchData = async (apiPage: string) => {
  // await delay(300);
  // try {
  //   const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}api/${apiPage}`)
  //     .then((res) => res.json())
  //     .catch((err) => console.log(err));
  //   return response;
  // } catch (error: any) {
  //   console.log(error.message);
  // }
  try {
    const filePath = path.join(process.cwd(), "data", `${apiPage}.json`);
    const jsonData = await fs.promises.readFile(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    return data;
  } catch (error: any) {
    console.error("Помилка читання файлу:", error.message);
    return null;
  }
};