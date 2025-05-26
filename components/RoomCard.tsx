"use client";

import { BASE_URL } from "@/lib/config";
import Image from "next/image";
import useReservaStore from "./reserva/lib/reserva.store";
import Link from "next/link";
import { format } from "date-fns";

export default function RenderRoomCard({
  id,
  title,
  description,
  imageSrc,
}: {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}) {
  const { dateFrom } = useReservaStore();

  const dateFormatted = format(dateFrom, "yyyy-MM-dd");

  return (
    <div className="rounded-md overflow-hidden border border-gray-200 group">
      <Link href={`/habitaciones/${dateFormatted}/${id}`}>
        <div className="relative h-80">
          <Image
            src={`${BASE_URL}/${imageSrc}`}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
          <div className="p-2 absolute bottom-0 w-full">
            <div className="p-2 bg-white/70 rounded-lg w-full">
              <h3 className="text-xl font-playfair mb-1">{title}</h3>
              <p className="text-xs">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
