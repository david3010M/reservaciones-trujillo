import Link from "next/link";

export default function HabitacionNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-playfair mb-4">
          Habitación no encontrada
        </h1>
        <Link href="/habitaciones" className="text-primary hover:underline">
          Volver a habitaciones
        </Link>
      </div>
    </div>
  );
}
