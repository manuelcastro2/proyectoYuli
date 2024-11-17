import { pool } from './../config/conexion.js'
import { v4 as uuidV4 } from 'uuid'

export const getById = async (id) => {
    return await pool.query('select distinct * from representantes where id_usuarios=$1', [id])
}

export const create = async (representantes) => {
    const uuid = uuidV4();
    return await pool.query(
        `INSERT INTO representantes(id_representante, id_usuarios, nombres, apellidos, documento, contacto)
         VALUES($1, $2, $3,$4 ,$5 ,$6) RETURNING id_representante`,
        [uuid, representantes.id_usuarios,
        representantes.nombres, representantes.apellidos, representantes.documento, representantes.contacto]
    );
};

export const update = async (id, representantes) => {
    return await pool.query(`update representantes set nombres=$1,
        apellidos=$2,documento=$3,contacto=$4 where id_representante=$5 RETURNING id_representante`,
        [representantes.nombres, representantes.apellidos,
        representantes.documento,representantes.contacto, id])
}

export const deleteRepresentante = async (id) => {
    return await pool.query(`delete from representantes where id_representante=$1`, [id])
}