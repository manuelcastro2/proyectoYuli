import { Router } from 'express'
import {
    createCita, deleteCitaC, getAllCitas, getByIdCitasMedico, getByIdCitasPaciente, updateCita
} from './../controller/controllerCitas.js'

export const routerCitas = () => {
    const routerGeneral = Router()

    routerGeneral.get('/', getAllCitas)
    routerGeneral.get('/paciente/:id', getByIdCitasPaciente)
    routerGeneral.get('/medico/:id', getByIdCitasMedico)
    routerGeneral.post('/', createCita)
    routerGeneral.put('/:id', updateCita)
    routerGeneral.delete('/:id', deleteCitaC)
    return routerGeneral
}