import { z } from 'zod'

const usuariosSchema = z.object({
    id_tipo_usuarios: z.number(),
    nombres: z.string(),
    apellidos: z.string(),
    tipo_documento: z.string(),
    documento: z.string(),
    correo: z.string(),
    contacto: z.string(),
    clave: z.string(),
})

export function validarUsuario(input) {
    return usuariosSchema.safeParse(input)
}

export function validarPartialUsuario(input) {
    return usuariosSchema.partial().safeParse(input)
}
