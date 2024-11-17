import { z } from 'zod'

const servicioSchema = z.object({
    id_usuarios: z.string(),
    id_servicio: z.number()
})

export function validarServicio(input) {
    return servicioSchema.safeParse(input)
}

export function validarPartialServicio(input) {
    return servicioSchema.partial().safeParse(input)
}
