import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "../styles/index.scss";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";

const rubikFont = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Estate Bees",
  description: "Properties slider page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${rubikFont.variable}`}>
      <Header />
      <main className={"sections_wrapper"}>
        {children}
      </main>
      <Footer />
    </body>
    </html>
  );
}
