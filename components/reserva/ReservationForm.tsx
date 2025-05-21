"use client";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ReservaRequest} from "./lib/reserva.interface";
import {SUCURSAL} from "@/lib/config";
import useReservaStore from "./lib/reserva.store";
import {format} from "date-fns";
import {TipoHabitacionShowData} from "../tipohabitacion/lib/tipohabitacion.interface";
import useHabitacionStore from "../tipohabitacion/lib/tipohabitacion.store";
import {HabitacionesDisponibleResponse} from "../tipohabitacion/lib/habitacionesdisponible.interface";
import {useEffect} from "react";
import {createReservation} from "./lib/reserva.actions";
import {errorToast, successToast} from "@/lib/core.function";
import {useRouter} from "next/navigation";

const reservationSchema = z.object({
    nrodoc: z.string().min(8, "Número de documento requerido"),
    nombres: z.string().min(1, "Nombres requeridos"),
    apellidoPaterno: z.string().min(1, "Apellido paterno requerido"),
    apellidoMaterno: z.string().min(1, "Apellido materno requerido"),
    email: z.string().email("Email inválido"),
    telefono: z.string().min(6, "Número inválido"),
    address: z.string().optional(),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

interface Props {
    id: string;
    room: TipoHabitacionShowData;
}

export default function ReservationForm({id, room}: Props) {
    const router = useRouter();

    const form = useForm<ReservationFormValues>({
        resolver: zodResolver(reservationSchema),
        defaultValues: {
            nrodoc: "",
            nombres: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            email: "",
            telefono: "",
            address: "",
        },
    });

    const {dateFrom, getNights, people} = useReservaStore();
    const {habitaciones, loadHabitaciones} = useHabitacionStore();

    useEffect(() => {
        loadHabitaciones();
    }, []);

    function obtenerPrimerHabitacionId(
        data: HabitacionesDisponibleResponse
    ): number | undefined {
        const claves = Object.keys(data.data);
        if (claves.length === 0) return undefined;

        const primerDato = data.data[claves[0]];
        return primerDato.habitaciones[0]?.id;
    }

    const onSubmit = async (data: ReservationFormValues) => {
        const precio = Number(room.precio);
        const dateFormatted = format(dateFrom, "yyyy-MM-dd");

        const newReservation: ReservaRequest = {
            sucursal_id: SUCURSAL,
            fechavencimiento: dateFormatted,
            noches: getNights(),
            total: precio * getNights(),
            adelanto: 0,
            preciohabitacion: precio,
            medio_pago_adelanto_id: null,
            nropersonas: people,
            comentario: "Reserva desde la web",
            habitacion_id: obtenerPrimerHabitacionId(habitaciones),
            persona: {
                nombres: data.nombres,
                apellidos: `${data.apellidoPaterno} ${data.apellidoMaterno}`,
                nrodoc: data.nrodoc,
                telefono: data.telefono,
                email: data.email,
                direccion: data.address ?? "-",
            },
        };

        console.log(newReservation);
        await createReservation(newReservation).then((res) => {
            if (res.success) {
                successToast("Reserva creada con éxito");
                form.reset();
                // Redirigir a la página de confirmación
                router.push(
                    `/habitaciones/${dateFormatted}/${res.codigo_reserva}/reservar/confirmacion`
                );
            } else {
                errorToast("Error al crear la reserva", "Por favor intente nuevamente");
            }
        });
    };

    return (
        <div className="col-start-1 row-start-3 md:col-span-3 md:row-span-2 md:col-start-3">
            <div className="bg-white rounded-md">
                <div className="mb-8">
                    <h3 className="text-2xl font-poppins font-bold mb-2">
                        Ingrese Su Información
                    </h3>
                    <p className="text-sm mb-4">
                        Asegúrese de que la información que ya ha escrito en su perfil sea
                        correcta.
                    </p>
                    <Form {...form}>
                        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <FormField
                                    control={form.control}
                                    name="nrodoc"
                                    render={({field}) => (
                                        <FormItem className="col-span-2">
                                            <FormLabel>DNI (Otro Documento)*</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Numero de Documento" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="nombres"
                                    render={({field}) => (
                                        <FormItem className="col-span-2">
                                            <FormLabel>Nombres *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Nombres" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="apellidoPaterno"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Apellido paterno *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Apellido paterno" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="apellidoMaterno"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Apellido materno *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Apellido materno" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="Email" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="telefono"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Número Móvil</FormLabel>
                                            <FormControl>
                                                <div className="flex">
                                                    <div
                                                        className="border border-gray-300 rounded-l-md p-2 bg-gray-50 flex items-center">
                                                        <span className="text-sm">🇵🇪</span>
                                                    </div>
                                                    <Input
                                                        type="tel"
                                                        className="rounded-l-none"
                                                        placeholder="Número de teléfono"
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="address"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Dirección *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Dirección" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="w-full bg-primary text-white py-3 rounded-md font-medium ripple-xl"
                            >
                                {/* <Link href={`/habitaciones/${id}/reservar/confirmacion`}> */}
                                Reservar
                                {/* </Link> */}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}
