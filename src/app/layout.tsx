import type { Metadata } from "next";
import { lexend } from "@/assets/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Bank",
  description: "Banking made simple.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
