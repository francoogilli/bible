import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  bibleBookAbbrevBySlug,
  bibleBookNameBySlug,
} from "@/content/bibleBooks"
import { bibleApiGet } from "@/services/fetchBibleApi"




type Props = {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const { slug } = params
  return {
    title: bibleBookNameBySlug[slug],
  }
}

interface Verse {
  number: number
  text: string
}

interface Book {
  chapters: number
}

export default async function Page({ params }) {
  const { slug, chapter } = params as { slug: string; chapter: string }

  const chapterContent = await bibleApiGet<{
    verses: Verse[]
  }>(`verses/rvr/${bibleBookAbbrevBySlug[slug]}/${chapter}}`)

  if (!chapterContent) {
    return notFound()
  }

  const bookContent = await bibleApiGet<Book>(
    `books/${bibleBookAbbrevBySlug[slug]}`
  )

  if (!bookContent) {
    return notFound()
  }

  return (
    <section className="relative text-white mx-auto mb-20 mt-5 w-full max-w-screen-xl gap-2 space-y-10  lg:px-0">
        <div className="flex flex-row overflow-x-auto mx-auto max-w-screen-md border-b border-zinc-700 top-0 left-0 z-20 gap-2 bg-background py-2">
    {[...Array(bookContent.chapters)].map((_, index) => (
      <Link
        key={index}
        href={`/books/${slug}/${index + 1}`}
        className={`bg-zinc-800 size-10 flex justify-center font-bold items-center rounded-md px-4  py-2 ${
          Number(chapter) === index + 1 ? 'bg-white text-black' : ''
        }`}
      >
        {(index + 1).toString().padStart(2, "0")}
      </Link>
    ))}
  </div>
      <div className="mx-auto space-y-5 lg:max-w-screen-md">
        <h1 className="scroll-m-20 text-4xl font-extrabold flex justify-center tracking-tight lg:text-5xl">{`${bibleBookNameBySlug[slug]}, Capítulo ${chapter}`}</h1>
        <div className="space-y-2">
          {chapterContent.verses.map((verse) => (
            <div key={verse.number} className="space-x-2">
              <span className="text-xs font-bold text-foreground">
                {verse.number}
              </span>
              <p
                dangerouslySetInnerHTML={{ __html: verse.text }}
                className="inline lg:text-lg"
                key={verse.number}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}