import { z } from 'zod'

const representantesSchema = z.object({
    id_usuarios: z.string(),
    nombres: z.string(),
    apellidos: z.string(),
    documento: z.string(),
    contacto: z.string()
})

export function validarRepresentantes(input) {
    return representantesSchema.safeParse(input)
}

export function validarPartialRepresentantes(input) {
    return representantesSchema.partial().safeParse(input)
}
