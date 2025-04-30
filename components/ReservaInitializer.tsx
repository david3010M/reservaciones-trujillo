"use client";
import { useEffect } from "react";
import useReservaStore from "./reserva/lib/reserva.store";

export default function ReservaInitializer() {
  const initializeReserva = useReservaStore((state) => state.initializeReserva);

  useEffect(() => {
    initializeReserva();
  }, []);

  return null;
}
