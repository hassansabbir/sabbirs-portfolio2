import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sabbir's Portfolio",
  description: "This is the portfolio of Mahmud Hasan Sabbir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
