"use client";

import Image from "next/image";
import {BASE_URL} from "@/lib/config";
import {Button} from "@/components/ui/button";
import {SalonResponseData} from "@/components/salones/lib/salon.interface";
import Link from "next/link";

interface Props {
    salon: SalonResponseData;
    index: number;
}

export default function SalonItem({salon, index}: Props) {
    return (
        <div
            className={`bg-white relative overflow-hidden shadow-md h-96 ${
                index === 1 || index === 4 ? "md:mt-14" : ""
            }`}
        >
            <Image
                src={`${BASE_URL}/${salon.imagen}`}
                alt={salon.descripcion_corta}
                fill
                className="object-cover"
                onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                }}
            />
            <div
                className={`p-6 h-full flex flex-col justify-end absolute bottom-0 ${
                    index === 1 || index === 4 ? "bg-hotel-gold/70" : "bg-hotel-gray/50 text-white"
                }`}
            >
                <h2 className="text-2xl font-playfair font-bold text-center mb-6">
                    {salon.titulo}
                </h2>
                <p className="text-sm font-poppins mb-4 px-2">
                    {salon.descripcion_corta}
                </p>

                <Link href={`/eventos/${salon.id}`}>
                    <Button className="uppercase tracking-widest rounded-none ripple-lg"
                            variant={index === 1 || index === 4 ? 'secondary' : 'default'}>
                        Más detalles
                    </Button>
                </Link>
            </div>
        </div>
    );
}