import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Presto-Go | Premium Bar Ordering Platform",
  description:
    "Presto-Go helps guests discover nearby bars, pre-book tables, order instantly, and gives vendors the operating system for modern hospitality."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
