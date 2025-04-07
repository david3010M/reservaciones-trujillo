import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[500px]">
      <Image
        src="/heroinicio.png?height=500&width=1200"
        alt="Sunset pier view"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
      <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white">
        <ChevronLeft size={24} />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white">
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-32 right-12 text-white text-right">
        <h1 className="text-4xl font-poppins">Frase Recepciones</h1>
        <h2 className="text-4xl font-poppins">Trujillo</h2>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="flex space-x-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
        </div>
      </div>
    </section>
  );
}
