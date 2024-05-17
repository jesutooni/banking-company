import type { Metadata } from "next";
import { lexend } from "@/assets/fonts";
import "./globals.css";
import TheHeader from "@/components/layouts/TheHeader";
import TheFooter from "@/components/layouts/TheFooter";

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
      <body className={lexend.className}>
        <TheHeader />
        <main>{children}</main>
        <TheFooter />
      </body>
    </html>
  );
}
