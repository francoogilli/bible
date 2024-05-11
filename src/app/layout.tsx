import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/header";

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
    <html lang="es" >
        <head />
        <body
          className="min-h-screen bg-background  antialiased"
        >
              <SiteHeader/>
            <div className="relative flex min-h-screen max-w-[81rem] px-4 mx-auto flex-col">
              <div className="flex-1">{children}</div>
            </div>          
              <SiteFooter />
        </body>
      </html>
  );
}
