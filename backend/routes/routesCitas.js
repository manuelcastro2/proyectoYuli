import { Router } from 'express'
import {
    createCita, deleteCitaC, getAllCitas, getByIdCitasMedico, getByIdCitasPaciente, updateCita,getAllHoraC,getByIdCitas
} from './../controller/controllerCitas.js'

export const routerCitas = () => {
    const routerGeneral = Router()

    routerGeneral.get('/', getAllCitas)
    routerGeneral.get('/paciente/:id', getByIdCitasPaciente)
    routerGeneral.get('/cita/:id', getByIdCitas)
    routerGeneral.get('/medico/:id', getByIdCitasMedico)
    routerGeneral.get('/hora',getAllHoraC)
    routerGeneral.post('/', createCita)
    routerGeneral.put('/:id', updateCita)
    routerGeneral.delete('/:id', deleteCitaC)
    return routerGeneral
}