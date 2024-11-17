import {
    create, getAll, getById, update, deleteUsuario, login,servicios,tipoUsuario,
} from './../model/modelUsuarios.js'
import { validarUsuario, validarPartialUsuario } from './../schemas/schemaUsuarios.js'
import { validarServicio, validarPartialServicio } from './../schemas/schemaServicio.js'

export const getAllUsers = async (req, res) => {
    try {
        const usuarios = await getAll();
        res.status(200).json(usuarios.rows);
    } catch (err) {
        res.status(500).json({
            message: {
                info: 'Error al obtener los usuarios',
                error: err
            }
        });
    }
};

export const getByIdUsuarios = async (req, res) => {
    try {
        const usuario = await getById(req.params.id);
        if (usuario.rowCount==0) {
            return res.status(200).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(usuario.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: {
                info: 'Error al obtener los usuarios',
                error: err
            }
        });
    }
};

export const loginUsuario = async (req, res) => {
    try {
        const error = validarPartialUsuario(req.body);
        if (error.error) return res.status(400).json({ messageError: "tipo de dato mal enviado" });
        const usuario = await login(req.body);
        if (usuario.rowCount==0) {
            return res.status(200).json({ messageAlert: 'Usuario no encontrado, clave o clave incorrecta' });
        }
        res.status(200).json(usuario.rows);
    } catch (err) {
        res.status(500).json({
            messageError: {
                info: 'Error al obtener los usuarios',
                error: err
            }
        });
    }
};

export const createUsuario = async (req, res) => {
    try {
        const error = validarUsuario(req.body.usuario);
        const errorS = validarPartialServicio(req.body.servicio)
        if (error.error) return res.status(400).json({ messageErrorUsuario: { info: 'tipo de dato mal enviado', error: error.error } });
        if (req.body.usuario.id_tipo_usuarios === 3) {
            if (errorS.error) return res.status(400).json({ messageErrorServicio: { info: 'tipo de dato mal enviado', error: error.error } });
        }
        const nuevoUsuario = await create(req.body.usuario, req.body.servicio);
        res.status(201).json(nuevoUsuario);
    } catch (err) {
        res.status(500).json({
            message: {
                info: 'Error al crear el usuario o servicio',
                error: err
            }
        });
    }
};

export const updateUsuario = async (req, res) => {
    try {
        const error = validarPartialUsuario(req.body);
        if (error.error) return res.status(400).json({ message: { info: 'tipo de dato mal enviado', error: error.error } });

        const updatedUsuario = await update(req.params.id, req.body);
        if (updatedUsuario.rowCount===0) {
            return res.status(200).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(updatedUsuario.rows);
    } catch (err) {
        res.status(500).json({
            message: {
                info: 'Error al actualizar el usuario',
                error: err
            }
        });
    }
};

export const deleteUsuarioC = async (req, res) => {
    try {
        const deletedusuario = await deleteUsuario(req.params.id);
        if (deletedusuario.rowCount===0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (err) {
        res.status(500).json({
            message: {
                info: 'Error al eliminar el usuario',
                error: err
            }
        });
    }
};

export const getServicios = async (req, res) => {
    try {
        const servicio = await servicios();
        res.status(200).json(servicio.rows);
    } catch (err) {
        res.status(500).json({
            message: {
                info: 'Error al obtener los servicios',
                error: err
            }
        });
    }
};

export const getTipoUsuarios = async (req, res) => {
    try {
        const tipoUsuarios = await tipoUsuario();
        res.status(200).json(tipoUsuarios.rows);
    } catch (err) {
        res.status(500).json({
            message: {
                info: 'Error al obtener los usuarios',
                error: err
            }
        });
    }
};

