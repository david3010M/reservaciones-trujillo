"use client";
import {useEffect} from "react";
import useReservaStore from "./reserva/lib/reserva.store";
import useReservaSalonStore from "@/components/salones/lib/reservaSalon.store";

export default function ReservaInitializer() {
    const initializeReserva = useReservaStore((state) => state.initializeReserva);
    const initializeReservaSalon = useReservaSalonStore((state) => state.initializeReserva);

    useEffect(() => {
        initializeReserva();
        initializeReservaSalon();
    }, []);

    return null;
}
