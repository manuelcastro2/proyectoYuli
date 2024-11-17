import {
    create, deleteCitas, getAll, getByIdPMedico, getByIdPaciente, update
} from './../model/modelCitas.js'
import { validarCitas, validarPartialCitas } from './../schemas/schemaCitas.js'

export const getAllCitas = async (req, res) => {
    try {
        const usuarios = await getAll();
        res.status(200).json(usuarios.rows);
    } catch (err) {
        res.status(500).json({
            message: {
                info: 'Error al obtener las citas',
                error: err
            }
        });
    }
};

export const getByIdCitasPaciente = async (req, res) => {
    try {
        const usuario = await getByIdPaciente(req.params.id);
        if (usuario.rowCount===0) {
            return res.status(404).json({ message: 'cita no encontrada' });
        }
        res.status(200).json(usuario.rows);
    } catch (err) {
        res.status(500).json({
            message: {
                info: 'Error al obtener las citas',
                error: err
            }
        });
    }
};

export const getByIdCitasMedico = async (req, res) => {
    try {
        const usuario = await getByIdPMedico(req.params.id);
        if (usuario.rowCount===0) {
            return res.status(404).json({ message: 'cita no encontrada' });
        }
        res.status(200).json(usuario.rows);
    } catch (err) {
        res.status(500).json({
            message: {
                info: 'Error al obtener las citas',
                error: err
            }
        });
    }
};

export const createCita = async (req, res) => {
    try {
        const error = validarCitas(req.body);
        if (error.error) return res.status(400).json({ messageError: { info: 'tipo de dato mal enviado', error: error.error } });
        const nuevoUsuario = await create(req.body);
        res.status(201).json(nuevoUsuario.rows);
    } catch (err) {
        res.status(200).json({
            message: {
                info: 'Error al crear la cita',
                error: err
            }
        });
    }
};

export const updateCita = async (req, res) => {
    try {
        const error = validarPartialCitas(req.body);
        if (error.error) return res.status(400).json({ message: { info: 'tipo de dato mal enviado', error: error.error } });

        const updatedUsuario = await update(req.params.id, req.body);
        if (updatedUsuario.rowCount===0) {
            return res.status(404).json({ message: 'cita no encontrada' });
        }
        res.status(200).json(updatedUsuario.rows);
    } catch (err) {
        res.status(500).json({
            message: {
                info: 'Error al actualizar la cita',
                error: err
            }
        });
    }
};

export const deleteCitaC = async (req, res) => {
    try {
        const deletedusuario = await deleteCitas(req.params.id);
        if (deletedusuario.rowCount === 0) {
            return res.status(404).json({ message: 'Cita no encontrada' });
        }
        res.status(200).json({ message: 'Cita eliminado' });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: {
                info: 'Error al eliminar la cita',
                error: err
            }
        });
    }
};




