import {
    create, deleteRepresentante, getById, update
} from './../model/modelRepresentante.js'
import { validarPartialRepresentantes, validarRepresentantes } from './../schemas/schemaRepresentantes.js'

export const getByIdRepresentante = async (req, res) => {
    try {
        const usuario = await getById(req.params.id);
        if (usuario.rowCount === 0) {
            return res.status(404).json({ message: 'no tiene representante' });
        }
        res.status(200).json(usuario.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: {
                info: 'Error al obtener el representante',
                error: err
            }
        });
    }
};

export const crearRepresentante = async (req, res) => {
    try {
        const error = validarRepresentantes(req.body);
        if (error.error) return res.status(400).json({ message: { info: 'tipo de dato mal enviado', error: error.error } });
        const nuevoUsuario = await create(req.body);
        res.status(201).json(nuevoUsuario.rows);
    } catch (err) {
        res.status(500).json({ message: { info: 'Error al crear el representante', error: err } });
    }
};

export const updateRepresentante = async (req, res) => {
    try {
        const error = validarPartialRepresentantes(req.body);
        if (error.error) return res.status(400).json({ message: { info: 'tipo de dato mal enviado', error: error.error } });

        const updatedUsuario = await update(req.params.id, req.body);
        if (updatedUsuario.rowCount===0) {
            return res.status(404).json({ message: 'representante no encontrado' });
        }
        res.status(200).json(updatedUsuario.rows);
    } catch (err) {
        res.status(500).json({ message: { info: 'Error al actualizar el representante', error: err } });
    }
};

export const deleteRepresentanteC = async (req, res) => {
    try {
        const deletedUsuario = await deleteRepresentante(req.params.id);
        if (deletedUsuario.rowCount===0) {
            return res.status(404).json({ message: 'Representante no encontrado' });
        }
        res.status(200).json({ message: 'Reperesentante eliminado' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: { info: 'Error al eliminar el representante', error: err } });
    }
};




