import { z } from 'zod'

const citasSchema = z.object({
    id_usuarios_servicio: z.number(),
    id_usuarios: z.string(),
    modalidad_cita: z.string(),
    afeccion_cita: z.string(),
    frecuencia_cita: z.string(),
    fecha_cita: z.date(),
    hora_cita: z.string(),
    estado_cita: z.string()
})

export function validarCitas(input) {
    return citasSchema.safeParse({
        id_usuarios_servicio: input.id_usuarios_servicio,
        id_usuarios: input.id_usuarios,
        modalidad_cita: input.modalidad_cita,
        afeccion_cita: input.afeccion_cita,
        frecuencia_cita: input.frecuencia_cita,
        fecha_cita: new Date(input.fecha_cita),
        hora_cita: input.hora_cita,
        estado_cita: input.estado_cita
    })
}

export function validarPartialCitas(input) {
    return citasSchema.partial().safeParse({
        id_usuarios_servicio: input.id_usuarios_servicio,
        id_usuarios: input.id_usuarios,
        modalidad_cita: input.modalidad_cita,
        afeccion_cita: input.afeccion_cita,
        frecuencia_cita: input.frecuencia_cita,
        fecha_cita: new Date(input.fecha_cita),
        hora_cita: input.hora_cita,
        estado_cita: input.estado_cita
    })
}
