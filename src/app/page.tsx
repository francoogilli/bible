import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-24 relative">
      <div className="relative w-[550px] h-[550px] mx-auto">
        <img src="/laurels.png" className="absolute inset-0 w-full h-full" style={{ animation: "levitate 16s ease infinite" }}/>
        <img src="/book.png" className="absolute inset-0 w-full h-full" style={{ animation: "levitate 13s ease infinite" }}/>
      </div>
      <h1 className="text-6xl font-extrabold text-white z-10 mt-8">Biblia</h1>
    </main>
  );
}
