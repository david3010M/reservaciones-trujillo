import Title from "@/components/title";

const sections = [
  <>
    Es <strong>OBLIGATORIO</strong> presentar el documento de identidad para el
    registro del huésped(es) en el HOTEL; caso contrario, no se podrá permitir
    el acceso a habitación alguna.
  </>,
  "El HOTEL se reserva el derecho de admisión, basado en las condiciones del solicitante. (Estado de ebriedad, violencia, o cualquier otra que atente contra la tranquilidad y/o seguridad de los huéspedes).",
  "Ningún menor de edad podrá ingresar a las instalaciones del HOTEL, si no es en compañía de sus padres y/o tutores debidamente acreditados. ",
  "La hora del Check In es a las 12:00 horas mientras que el Check Out es a las 12:00 horas.",
  "Si el huésped desea ingresar a la habitación antes del Check in, podrá optar por el servicio de Early-Check In, el mismo que permite hospedarse mediante un recargo de 25% del costo normal, a partir de las 06:00 horas. Si el huésped desea hospedarse antes de las 06:00 horas, se considerará como un día de estadía adicional y estará sujeto al check out de las 12:00 horas del mismo día.",
  "Si el huésped desea retirarse de la habitación después de la hora del Check out (12:00 horas), podrá optar por el servicio de Late-Check out, el mismo que permite mediante un recargo de 50% del costo normal, hacer uso de las habitaciones hasta las 18:00 horas. Después de las 18:00 horas, se considerará como un día adicional de hospedaje. Cualquier opción por la que opte el huésped deberá ser comunicada con la debida anticipación. Caso contrario se asumirá que el huésped acepta la tarifa de un día adicional.",
  "Solo aquellas personas registradas como huéspedes podrán tener acceso a las habitaciones del HOTEL, en el caso de que algún huésped desee recibir visitas solo lo podrá hacer en el hall del primer nivel.",
  "EL HOTEL, no se hace responsable por los objetos de valor o bienes de los huéspedes durante su estadía; asimismo no está permitida la custodia del equipaje. Esta disposición se aplica incluso en los casos en que los huéspedes culminen su estadía contratada y no retiren su equipaje.",
  "Una vez llegada la hora del Check Out y en el caso que el huésped no haya manifestado su deseo de renovar su plazo de estadía y abonar la tarifa pertinente, éste deberá retirar sus pertinencias antes de las 12:00 del día, en caso contrario, se cargará automáticamente a su cuenta la tarifa del Late-Check out. En el supuesto de existir resistencia a desocupar las habitaciones o cancelar los montos correspondientes, los empleados, comunicarán de forma inmediata a las autoridades policiales y presentarán la respectiva denuncia.",
  "El HOTEL, brinda gustosamente su cochera gratuita para los vehículos de los huéspedes; sin embargo, no se hace responsable del mismo, ni de sus accesorios u objetos de valor que pudieran dejar dentro de ellos.",
  "El Huésped es responsable de los daños y perjuicios que ocasione al mobiliario, Infraestructura y/o Equipos del Hotel.",
  "En el supuesto de que el huésped, no esté conforme con el servicio de cuartelería deberá reportarlo de forma inmediata al counter para darle la solución pertinente, pues caso contrario no se aceptará reclamaciones posteriores, pues estas situaciones no generarán compensación alguna.",
  "La calidad del servicio de TV (Televisión por Cable GRATUITO), Wi-Fi (INTERNET GRATUITO) estará sujeto a las condiciones técnicas del proveedor. En ese sentido El Hotel se exonera de la responsabilidad de cualquier deficiencia en el servicio del proveedor.",
  "Todos los huéspedes deberán respetar la tranquilidad de los demás, por lo tanto, la generación de escándalos o ruidos molestos están totalmente prohibidos y de producirse, será potestad del HOTEL retirar al huésped y sus pertenencias de forma inmediata y sin reembolso alguno. Asimismo, aquel huésped que incurra en esos actos, quedará vetado de hospedarse de forma permanentemente.",
  "Está prohibido el ingreso de animales (domésticos o de corral) a las instalaciones del HOTEL.",
  "Está prohibido ingresar al HOTEL armas de fuego, explosivos, inflamables, y/o cualquier sustancia declarada ilícita o peligrosa.",
  "Queda terminantemente prohibido fumar dentro de las instalaciones del HOTEL, de acuerdo a la LEY N° 29517 y Ordenanza Municipal N° 480. El incumplimiento de este punto justificará el retiro del huésped sin reembolso alguno.",
  "EL HOTEL no se hace responsable por lesiones, daños, y/o muerte de los huéspedes, ya sea por situaciones fortuitas o por conductas autodestructivas. Así tampoco, por acciones de terceros (Homicidio y/o agresiones).",
  "Está prohibido el uso de artefactos electrodomésticos dentro de las habitaciones del HOTEL.",
  "Las llaves de las habitaciones deben ser entregadas a Recepción del Hotel, cada vez que el Huésped salga de las instalaciones.",
  "Todos los objetos personales no perecibles, olvidados por nuestros huéspedes, permanecerán bajo custodia del Hotel durante 15 días; durante ese plazo ni el Hotel, ni sus trabajadores tendrán responsabilidad alguna sobre el deterioro que estos pudieran tener. Vencido el plazo se procederá a retirar de las instalaciones del Hotel dichas pertenencias.",
  "Todos los objetos personales perecibles olvidados por nuestros huéspedes serán desechados de forma inmediata en atención a las normas de sanidad vigentes.",
  "En caso desee consumir bebidas alcohólicas adquiridas fuera del Hotel, tendrá que realizar el pago por descorche.",
];

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      {/* Title */}
      <Title
        title="Términos y Condiciones"
        description="Conoce los términos y condiciones de nuestro hotel para garantizar una estadía segura y placentera."
      />
      <div className="max-w-screen-lg mx-auto p-6 space-y-6 py-12">
        <div className="pr-2">
          <ol className="list-decimal list-inside space-y-4 text-justify text-sm leading-6 text-muted-foreground">
            {sections.map((section, index) => (
              <li key={index} className="mb-2">
                {section}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
