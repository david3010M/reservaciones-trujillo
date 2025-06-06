"use client";

interface StepIndicatorProps {
  currentStep: string;
}

const steps = [
  {
    id: "buscar",
    label: "Búsqueda",
    description: "Selecciona tu tipo de habitación favorita",
  },
  {
    id: "reserva",
    label: "Reservar",
    description: "Completa los detalles de tu reserva",
  },
  {
    id: "confirmacion",
    label: "Confirmación",
    description: "Recibe la confirmación de tu reserva",
  },
];

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  const currentIndex = steps.findIndex((step) => step.id === currentStep);

  return (
    <div className="w-full mx-auto">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-3 left-0 w-full h-0.5 bg-gray-200 z-0">
          <div
            className="h-full bg-gray-400 transition-all duration-500 ease-in-out"
            style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {/* Steps */}
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = index < currentIndex;
          const isClickable = index <= currentIndex;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center relative z-10"
            >
              <button
                type="button"
                disabled={!isClickable}
                className={`
                  size-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 relative
                  ${
                    isActive
                      ? "bg-gray-400 border-gray-400 text-white shadow-lg scale-110"
                      : isCompleted
                      ? "bg-gray-400 border-gray-400 text-white"
                      : "bg-white border-gray-300 text-gray-400"
                  }
                  ${isClickable ? "cursor-default" : "cursor-not-allowed"}
                `}
              >
                {/* Punto central */}
                <div
                  className={`size-2.5 rounded-full ${
                    isActive || isCompleted ? "bg-white" : "bg-gray-400"
                  }`}
                />
              </button>

              <div className="mt-3 text-center">
                <div
                  className={`text-sm ${
                    isActive || isCompleted
                      ? "font-semibold text-gray-600"
                      : "text-gray-400"
                  }`}
                >
                  {step.label}
                </div>
                <div className="text-xs text-gray-400 mt-1 max-w-64 w-full">
                  {step.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
