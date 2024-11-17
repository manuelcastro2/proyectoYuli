import axios from "axios"

const userApi = "http://localhost:1234/usuarios"

export const getAll = async () => {
    const usuario = await axios.get(`${userApi}/`)
    return usuario.data
}

export const getById = async (id) => {
    const usuario = await axios.get(`${userApi}/${id}`)
    return usuario.data
}

export const login = async (documento, clave) => {
    const usuario = await axios.post(`${userApi}/login`, {
        documento: documento,
        clave: clave
    })
    return usuario.data
}

export const create = async (dataUsuario, id_servicio) => {
    const usuario = await axios.post(`${userApi}/`, {
        usuario: {
            dataUsuario
        }, servicio: {
            id_servicio: id_servicio
        }
    })
    return usuario.data
}

export const update = async (id, dataUsuario) => {
    const usuario = await axios.put(`${userApi}/${id}`, {
        dataUsuario
    })
    return usuario.data
}

export const deleteUsuario = async (id) => {
    const usuario= await axios.delete(`${userApi}/${id}`)
    return usuario.data
}

export const getServicios = async () => {
    const usuario = await axios.get(`${userApi}/servicios`)
    return usuario.data
}

export const getTipoUsuarios = async () => {
    const usuario = await axios.get(`${userApi}/tipousuarios`)
    return usuario.data
}