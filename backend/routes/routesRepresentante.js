import { Router } from 'express'
import {
    crearRepresentante, deleteRepresentanteC
    , getByIdRepresentante, updateRepresentante
} from './../controller/controllerRepresentante.js'

export const routerRepresentante = () => {
    const routerGeneral = Router()

    routerGeneral.get('/:id', getByIdRepresentante)
    routerGeneral.post('/', crearRepresentante)
    routerGeneral.put('/:id', updateRepresentante)
    routerGeneral.delete('/:id', deleteRepresentanteC)
    return routerGeneral
}