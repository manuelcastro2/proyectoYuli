import { Router } from 'express'
import {
    createUsuario,getServicios,
    deleteUsuarioC, getAllUsers,getTipoUsuarios,
    getByIdUsuarios, loginUsuario, updateUsuario
} from './../controller/controllerUsuarios.js'

export const routerUsuarios = () => {
    const routerGeneral = Router()

    routerGeneral.get('/', getAllUsers)
    routerGeneral.get('/servicios', getServicios)
    routerGeneral.get('/tipousuarios', getTipoUsuarios)
    routerGeneral.get('/:id', getByIdUsuarios)
    routerGeneral.post('/', createUsuario)
    routerGeneral.post('/login', loginUsuario)
    routerGeneral.put('/:id', updateUsuario)
    routerGeneral.delete('/:id', deleteUsuarioC)
    return routerGeneral
}