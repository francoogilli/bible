import Link from "next/link";
import Github from "@/icons/GitHub";
import User from "@/icons/User";
import Book from "@/icons/Book";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#2d2d2d] backdrop-blur-sm">
      <div className="container px-4 flex max-w-[80rem] mx-auto h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/"  rel="noopener" className="justify-center items-center gap-x-2 hidden md:flex">
            <Book className="text-white size-5" />
            <p className="flex items-center font-extrabold space-x-2 text-white">
              Biblia
            </p>
          </Link>
          <div className="flex justify-center items-center gap-x-2">
            <div className="md:hidden flex">
              <Book className="text-[#c9c9c9] hover:text-[#e1e1e1] size-5" />
            </div>
            <Link
              className="flex items-center  space-x-2 font-bold text-[#c9c9c9] hover:text-[#e1e1e1] transition duration-200 "
              href="/books"
            >
              Libros
            </Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-7">
          <Link href="https://github.com/francoogilli/bible" target="_blank" rel="noopener">
            <Github />
          </Link>
          <Link href="https://francogilli.vercel.app/" target="_blank" rel="noopener">
            <User />
          </Link>
        </div>
      </div>
    </header>
  );
}
