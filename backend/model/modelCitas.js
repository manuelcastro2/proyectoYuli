import { pool } from './../config/conexion.js'
import { v4 as uuidV4 } from 'uuid'

export const getAll = async () => {
    return await pool.query(`select distinct * from citas, usuarios_servicio, usuarios, servicio where
        citas.id_usuarios_servicio=usuarios_servicio.id_usuarios_servicio and
        citas.id_usuarios=usuarios.id_usuarios 
        and usuarios_servicio.id_servicio=servicio.id_servicio`)
}

export const getByIdPaciente = async (id) => {
    return await pool.query(`SELECT DISTINCT * FROM citas
    JOIN usuarios_servicio ON citas.id_usuarios_servicio = usuarios_servicio.id_usuarios_servicio
    JOIN servicio ON usuarios_servicio.id_servicio = servicio.id_servicio
    WHERE citas.id_usuarios = $1`, [id])
}

export const getByIdPMedico = async (id) => {
    return await pool.query(`SELECT DISTINCT * FROM citas
    JOIN usuarios_servicio ON citas.id_usuarios_servicio = usuarios_servicio.id_usuarios_servicio
    JOIN usuarios ON usuarios.id_usuarios = citas.id_usuarios
    WHERE usuarios_servicio.id_usuarios = $1`, [id])
}

export const create = async (citas) => {
    const uuid = uuidV4();
    return await pool.query(
        `INSERT INTO citas(id_citas, id_usuarios_servicio, id_usuarios, modalidad_cita, afeccion_cita, frecuencia_cita, fecha_cita, hora_cita, estado_cita) 
        VALUES($1, $2, $3,$4 ,$5 ,$6 ,$7 ,$8 ,$9) RETURNING id_citas`,
        [uuid, citas.id_usuarios_servicio, citas.id_usuarios,
            citas.modalidad_cita, citas.afeccion_cita,
            citas.frecuencia_cita, citas.fecha_cita, citas.hora_cita, citas.estado_cita]
    );
};

export const update = async (id, cita) => {
    return await pool.query(`update citas set fecha_cita=$1,hora_cita=$2
        where id_cita=$8`,
        [cita.fecha_cita, cita.hora_cita, id])
}

export const deleteCitas = async (id) => {
    return await pool.query(`delete from citas where id_citas=$1`, [id])
}