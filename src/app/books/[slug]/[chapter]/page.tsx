import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bibleBookAbbrevBySlug, bibleBookNameBySlug } from "@/content/bibleBooks";
import { bibleApiGet } from "@/services/fetchBibleApi";
import SelectDropdown from "@/components/selectDropdown";

type Params = {
  slug: string;
  chapter: string;
}

type Verse = {
  number: number;
  text: string;
}

type Book = {
  chapters: number;
}

type Props = {
  params: Params;
}

export function generateMetadata({ params }: Props): Metadata {
  const { slug } = params;
  return {
    title: bibleBookNameBySlug[slug],
  };
}

export default async function Page({ params }: Props) {
  const { slug, chapter } = params;

  const chapterContent = await bibleApiGet<{
    verses: Verse[];
  }>(`verses/rvr/${bibleBookAbbrevBySlug[slug]}/${chapter}`);

  if (!chapterContent) {
    return notFound();
  }

  const bookContent = await bibleApiGet<Book>(`books/${bibleBookAbbrevBySlug[slug]}`);

  if (!bookContent) {
    return notFound();
  }

  const options = [...Array(bookContent.chapters)].map((_, index) => ({
    bookSlug: slug,
    chapterNumber: index + 1,
    // Puedes cambiar la imagen predeterminada si lo deseas
    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
  }));

  return (
    <section className="relative text-white mx-auto mb-20 mt-5 w-full max-w-screen-xl gap-2 space-y-10  lg:px-0">
      {/* <div className="flex flex-row overflow-x-auto mx-auto max-w-screen-md border-b border-zinc-700 top-0 left-0 z-20 gap-2 bg-background py-2">
        {[...Array(bookContent.chapters)].map((_, index) => (
          <Link
            key={index}
            href={`/books/${slug}/${index + 1}`}
            className={`size-10 flex justify-center font-bold items-center rounded-lg px-4 py-2 ${
              Number(chapter) === index + 1 ? 'bg-gradient-to-br from-[#ffffff] to-[#ffefdd] text-black' : 'bg-zinc-800 text-white'
            }`}
          >
            {(index + 1).toString().padStart(2, "0")}
          </Link>
        ))}
        
      </div> */}
      <div className="max-w-screen md:max-w-64 mx-auto">
          <SelectDropdown options={options} selectedChapter={Number(chapter)} />
        </div>
      <div className="mx-auto space-y-5 lg:max-w-screen-md">
        <h1 className="scroll-m-20 text-4xl font-black text-[#3ff7b1] flex justify-center tracking-tight lg:text-5xl">{`${bibleBookNameBySlug[slug]} : ${chapter}`}</h1>
        <div className="space-y-2">
          {chapterContent.verses.map((verse) => (
            <div key={verse.number} className="space-x-2">
              <span className="text-xs font-extrabold text-[#7cffc0]  bg-gradient-to-br from-[#5e5d5dcb] to-[#2d2c2c] py-0.5 px-1.5 rounded-md">
                {verse.number}
              </span>
              <p
                dangerouslySetInnerHTML={{ __html: verse.text }}
                className="inline text-[#ededed] lg:text-lg"
                key={verse.number}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
