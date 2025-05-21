import Title from "@/components/title";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {getSalones} from "@/components/salones/lib/salon.actions";
import {BASE_URL} from "@/lib/config";
import SalonItem from "@/components/salones/SalonItem";


export default async function EventosPage() {

    const data = await getSalones();
    const salones = data?.data;

    if (!salones) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-playfair mb-4">
                        Salones no encontrados
                    </h1>
                </div>
            </div>
        );
    }


    return (
        <main className="min-h-screen">
            {/* Eventos Header */}
            <Title
                title="Salones de Eventos"
                description="Contamos con salones modernos y equipados para la realización de eventos sociales y corporativos, garantizando un servicio impecable y una experiencia inolvidable."
            />

            {/* Eventos Grid */}
            <section className="py-16">
                <div className="max-w-screen-lg mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {salones.map((salon, index) => (
                            <SalonItem
                                key={index}
                                salon={salon}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
