import axios from "axios"

const citasApi = "http://localhost:1234/citas"

export const getAll = async () => {
    const citas = await axios.get(`${citasApi}/`)
    return citas.data
}

export const getByIdPaciente = async (id) => {
    const citas = await axios.get(`${citasApi}/paciente/${id}`)
    return citas.data
}
export const getByIdMedico = async (id) => {
    const citas = await axios.get(`${citasApi}/medico/${id}`)
    return citas.data
}

export const create = async (dataCitas) => {
    const citas = await axios.post(`${citasApi}/`, {
        dataCitas
    })
    return citas.data
}

export const update = async (id, dataCitas) => {
    const citas = await axios.put(`${citasApi}/${id}`, {
        dataCitas
    })
    return citas.data
}

export const deleteCitas = async (id) => {
    const citas = await axios.delete(`${citasApi}/${id}`)
    return citas.data
}