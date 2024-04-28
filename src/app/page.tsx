import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start  px-4 md:px-24 relative">
      <div className="relative w-[300px] h-[300px] md:w-[550px] md:h-[550px] ">
        <img src="/laurels.png" className="absolute inset-0 w-full h-full" style={{ animation: "levitate 16s ease infinite" }}/>
        <img src="/book.png" className="absolute inset-0 w-full h-full" style={{ animation: "levitate 13s ease infinite" }}/>
      </div>
      <h1 className="text-6xl font-extrabold text-white z-10 mt-8">Biblia</h1>
    </main>
  );
}
