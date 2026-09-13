import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3VAR — Intelligent Hiring",
  description: "AI-powered video interviews and recruitment assessment.",
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