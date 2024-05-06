import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="sticky bg-[#09090B] top-0 z-10 w-full border-t border-zinc-800 bg-background">
      <p className="container py-5 text-white text-center text-[15px] leading-loose">
        Hecho por{" "}
        
        <Link
          href="https://francogilli.vercel.app/"
          className="font-semibold hover:underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Franco Gilli
        </Link>
        . Inspirado en{" "}
        <Link
          href="https://www.holybible.dev/"
          className="font-semibold hover:underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Holy Bible
        </Link>
        {"."}
      </p>
    </footer>
  )
}