import Link from "next/link"
import { librosBiblia } from "@/content/bibleBooks"


export const metadata = {
  title: "Books",
}

export default function BooksPage() {
  return (
    <section className="container text-white my-10 h-full w-full space-y-10">
      <div className="space-y-5">
        <h1 className="scroll-m-20 flex justify-center text-2xl font-bold ">
          Old testament
        </h1>
        <div className="mx-auto grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7">
          {librosBiblia.antiguoTestamento.map((book) => (
            <Link
              key={book.slug}
              href={`/books/${book.slug}/1`}
              className="bg-zinc-800 font-medium flex justify-center rounded-lg hover:bg-zinc-800/80 h-10 py-2 px-4"
              >
              {book.nombre}
            </Link>
          ))}
        </div>
      </div>
      <div className="space-y-5">
        <h1 className="scroll-m-20 flex justify-center text-2xl font-bold ">
          New testament
        </h1>
        <div className="mx-auto grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7">
          {librosBiblia.nuevoTestamento.map((book) => (
            <Link
              key={book.slug}
              href={`/books/${book.slug}/1`}
              className="bg-zinc-800 font-medium flex justify-center rounded-lg hover:bg-zinc-800/80 h-10 py-2 px-4"
              >
              {book.nombre}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}