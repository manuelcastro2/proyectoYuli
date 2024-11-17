import { pool } from './../config/conexion.js'
import { createHash } from 'node:crypto'
import { v4 as uuidV4 } from 'uuid'

export const getAll = async () => {
    return await pool.query(`SELECT DISTINCT *
        FROM usuarios,tipo_usuarios
        where usuarios.id_tipo_usuarios = tipo_usuarios.id_tipo_usuarios`);
}

export const getById = async (id) => {
    return await pool.query('select distinct * from usuarios where id_usuarios=$1', [id])
}

export const login = async (usuario) => {
    const hash = createHash('sha256')
    const claveHash = hash.update(usuario.clave).digest('hex')
    return await pool.query('select distinct * from usuarios where documento=$1 and clave=$2', [usuario.documento, claveHash])
}

export const create = async (usuario, servicio) => {
    try {
        const uuid = uuidV4();
        const hash = createHash('sha256')
        const claveHash = hash.update(usuario.clave).digest('hex')
        const usuarios = await pool.query(
            `INSERT INTO usuarios(id_usuarios, id_tipo_usuarios, nombres, 
            apellidos, tipo_documento, documento, correo, contacto, clave) 
            VALUES($1, $2, $3,$4 ,$5 ,$6 ,$7 ,$8 ,$9) RETURNING id_usuarios`,
            [uuid, usuario.id_tipo_usuarios, usuario.nombres,
                usuario.apellidos, usuario.tipo_documento, usuario.documento,
                usuario.correo, usuario.contacto, claveHash]
        );

        if (Number(usuario.id_tipo_usuarios) === 3) {
            const usuarios_servicio = await pool.query(`INSERT INTO usuarios_servicio (id_usuarios, id_servicio) VALUES ($1,$2) returning id_usuarios_servicio`,
                [uuid, servicio.id_servicio])
            return { servicio: usuarios_servicio.rows, usuario: usuarios.rows }
        } else {
            return usuarios.rows
        }
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        throw new Error("Error en la creación del usuario");
    }
};

export const update = async (id, usuario) => {
    const hash = createHash('sha256')
    return await pool.query(`update usuarios set nombres=$1,
        apellidos=$2,tipo_documento=$3,documento=$4,correo=$5,
        contacto=$6,clave=$7
        where id_usuarios=$8 returning id_usuarios`,
        [usuario.nombres, usuario.apellidos,
        usuario.tipo_documento, usuario.documento,
        usuario.correo, usuario.contacto, hash.update(usuario.clave).digest('hex'), id])
}

export const deleteUsuario = async (id) => {
    return await pool.query(`delete from usuarios where id_usuarios=$1`, [id])
}

export const servicios = async () => {
    return pool.query(`SELECT * FROM servicio`)
}

export const tipoUsuario = async () => {
    return pool.query(`SELECT * FROM tipo_usuarios`)
}