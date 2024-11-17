"use client"
import { useEffect, useState } from "react"
import { getAll } from "@/app/api/usuariosApi"

export const Ver_usuarios = () => {

    const [usuarios, setUsuarios] = useState([])

    const handleUsuarios = async () => {
        const usuarios = await getAll()
        setUsuarios(usuarios)
    }

    useEffect(() => {
        handleUsuarios()
    }, [])

    return (
        <>
            {usuarios.map(item => (
                <details key={item.id_usuarios}>
                    <summary>{item.nombres}</summary>
                    <p>Tipo usuario: {item.tipo}</p>
                    <p>Apellidos: {item.apellidos}</p>
                    <p>Tipo documento: {item.tipo_documento}</p>
                    <p>Documento: {item.documento}</p>
                    <p>Correo: {item.correo}</p>
                    <p>Contacto: {item.contacto}</p>
                    <p>Clave: {item.clave}</p>
                    <button type="button">Editar</button>
                </details>
            ))}
        </>
    )
}