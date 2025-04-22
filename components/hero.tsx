import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Hero() {
  return (
    <section className="relative h-[600px]">
      <Carousel className="w-full h-full">
        <CarouselContent className="h-[600px]">
          <CarouselItem className="w-full h-full relative">
            <div className="relative w-full h-full">
              <Image
                src={`/home/carousel/slider1.png`}
                alt={`Carousel slide 1`}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
          </CarouselItem>
          <CarouselItem className="w-full h-full relative">
            <div className="relative w-full h-full">
              <Image
                src={`/home/carousel/slider1.png`}
                alt={`Carousel slide 1`}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious>
          <ChevronLeft className="text-white" />
        </CarouselPrevious>
        <CarouselNext>
          <ChevronRight className="text-white" />
        </CarouselNext>
      </Carousel>
    </section>
  );
}
