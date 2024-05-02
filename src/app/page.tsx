import GitHub from "@/icons/GitHub";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start  px-4 md:px-24 relative">
      <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] mt-24 md:mt-0">
        <img src="/Laurel-Tiras.png" className="absolute inset-0 w-full h-full" style={{ animation: "levitate 30s ease infinite" }}/>
        <img src="/Book1.png" className="absolute inset-0 w-full h-full" style={{ animation: "levitate 15s ease infinite" }}/>
        <img src="/Cruz.png" className="absolute inset-0 w-full h-full" style={{ animation: "levitate 12s ease infinite" }}/>
      </div>

      <div className="max-w-3xl text-center">
      <h1 className="text-3xl md:text-5xl font-black text-zinc-100 z-10 mt-2">Free and open source Bible reading app</h1>
      <p className="text-base md:text-lg text-gray-400 font-medium pt-5">Experience the timeless wisdom of God&apos;s written Word
        with a modern, beautiful, and minimalistic design for an easy-to-use experience</p>
      <div className="mt-5 flex justify-center gap-x-4">
        <a href="#" className="bg-[#0073fff2] text-white hover:bg-[#0073ffe3] transition duration-200 flex justify-center items-center px-5 py-2.5 rounded-xl font-bold text-base">Empezar a leer</a>
        <a href="https://github.com/francoogilli/bible" target="_blank" className="bg-zinc-900 hover:bg-zinc-800 transition duration-200 border border-zinc-800 text-zinc-100 flex justify-center items-center gap-x-2.5 px-5 py-2.5 rounded-xl font-semibold text-base"><GitHub />Star on GitHub</a>
      </div>
    </div>
    </main>
  );
}
