import axios from "axios"

const representantesApi = "http://localhost:1234/representantes"

export const getById = async (id) => {
    const representantes = await axios.get(`${representantesApi}/${id}`)
    return representantes.data
}

export const create = async (dataRepresentante) => {
    const representante = await axios.post(`${representantesApi}/`, {
        dataRepresentante
    })
    return representante.data
}

export const update = async (id, dataRepresentate) => {
    const representante = await axios.put(`${representantesApi}/${id}`, {
        dataRepresentate
    })
    return representante.data
}

export const deleteUsuario = async (id) => {
    const representante = await axios.delete(`${representantesApi}/${id}`)
    return representante.data
}