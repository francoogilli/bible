import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/footer";

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
          <div className="flex justify-center items-center max-w-[80.5rem] mx-auto">
            {children}
          </div>
          <SiteFooter />
      </body>
    </html>
  );
}
