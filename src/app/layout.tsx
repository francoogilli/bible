import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biblia",
  description: "La Biblia en Español",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
