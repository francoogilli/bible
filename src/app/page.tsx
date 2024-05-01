import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start  px-4 md:px-24 relative">
      <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] ">
        <Image src="/Laurel-Tiras.png" alt="Laurel Tiras" width={450} height={450} className="absolute inset-0" style={{ animation: "levitate 30s ease infinite" }}/>
        <Image src="/Book1.png" alt="Book 1" width={450} height={450} className="absolute inset-0" style={{ animation: "levitate 15s ease infinite" }}/>
        <Image src="/Cruz.png" alt="Cruz" width={450} height={450} className="absolute inset-0" style={{ animation: "levitate 12s ease infinite" }}/>
      </div>

      <div className="max-w-3xl text-center">
        <h1 className="text-3xl md:text-5xl font-black text-zinc-100 z-10 mt-8">Free and open source Bible reading app</h1>
        <p className="text-base md:text-lg text-gray-400 font-medium pt-5">Experience the timeless wisdom of God's written Word
          with a modern, beautiful, and minimalistic design for an easy-to-use experience</p>
      </div>
    </main>
  );
}
