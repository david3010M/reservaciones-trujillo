import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function CarouselMiddleWitdh() {
  const images = [
    "/restaurante/carousel/1.jpg",
    "/restaurante/carousel/2.jpg",
    "/restaurante/carousel/3.jpg",
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-screen-2xl mx-auto py-4 md:py-8"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-3/4">
            <div>
              <Card className="rounded-none">
                <CardContent className="flex items-center justify-center p-6 h-[500px] relative">
                  <Image
                    src={image}
                    alt={image}
                    fill
                    className="object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant={"outline"}
        className="!absolute left-4"
      ></CarouselPrevious>
      <CarouselNext
        variant={"outline"}
        className="!absolute right-4"
      ></CarouselNext>
    </Carousel>
  );
}
