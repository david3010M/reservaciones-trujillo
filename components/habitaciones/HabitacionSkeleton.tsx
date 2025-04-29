import { Users } from "lucide-react";

export default function HabitacionSkeleton() {
  return (
    <div className="border-2 border-hotel-beige overflow-hidden bg-white animate-pulse">
      <div className="relative h-48 bg-gray-200"></div>
      <div className="p-6">
        <h3 className="text-xl font-lato tracking-wider text-hotel-darkGray mb-2 bg-gray-200 h-6 w-1/2"></h3>
        <div className="flex items-center mb-4 text-sm text-gray-500">
          <Users className="h-4 w-4 mr-1" />
          <span className="bg-gray-200 h-4 w-1/4"></span>
        </div>
        <p className="text-sm mb-6 bg-gray-200 h-4 w-full"></p>
        <div className="block w-full border border-hotel-gold text-hotel-gold py-2 px-4 rounded-md hover:bg-hotel-gold hover:text-white transition-colors mb-6 text-center">
          RESERVAR AHORA
        </div>
      </div>
    </div>
  );
}
