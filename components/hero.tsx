"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function Hero() {
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const sliders = {
    slider1: {
      image: "/home/carousel/slider1.png",
      alt: "Carousel slide 1",
    },
    slider2: {
      image: "/home/carousel/slider2.png",
      alt: "Carousel slide 2",
    },
    slider3: {
      image: "/home/carousel/slider3.png",
      alt: "Carousel slide 3",
    },
  };

  return (
    <section className="relative min-h-[500px] max-h-[600px]">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="min-h-[500px] max-h-[600px]">
          {Object.values(sliders).map((slider, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <Image
                src={slider.image}
                alt={slider.alt}
                width={1920}
                height={600}
                className="object-cover w-full min-h-[500px] max-h-[600px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant={"secondary"}
          className="!absolute left-4"
        ></CarouselPrevious>
        <CarouselNext
          variant={"secondary"}
          className="!absolute right-4"
        ></CarouselNext>
      </Carousel>
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index + 1
                ? "bg-hotel-gold shadow shadow-hotel-darkBeige border border-1 border-hotel-darkBeige"
                : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
