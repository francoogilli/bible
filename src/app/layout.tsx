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
      <head>
        {/* Aquí van las etiquetas meta, link, etc. */}
      </head>
      <body>
        <div className="absolute top-0 z-[-2] h-screen w-full bg-[#001015] bg-[radial-gradient(ellipse_42%_68%_at_50%_-20%,rgba(216,195,135,0.3),rgba(255,255,255,0))] md:bg-[radial-gradient(ellipse_12%_70%_at_50%_-20%,rgba(216,195,135,0.3),rgba(255,255,255,0))]"></div>
        {children}
      </body>
    </html>
  );
}
