"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getById } from "./../../api/usuariosApi.js"

export const MiInformaciones = () => {

    const data = JSON.parse(localStorage.getItem('data'))
    const [miInformacion, setMiInformacion] = useState([])
    const router=useRouter()

    const handleGetById = async () => {
        const usuario = await getById(data.id_usuarios)
        if (usuario.message) {
            return alert("error updating")
        } else {
            setMiInformacion(usuario)  
        }
    }

    useEffect(() => {
        handleGetById()
    }, [])

    return (
        <>
        <button onClick={()=>{
            router.push("/dashboard")
        }} type="button">Volver</button>
        <h2>MI INFORMACION PERSONAL</h2>
            {miInformacion.map(item=>(
                <div key={item.id_usuarios}>
                <p>Nombre:  {item.nombres}</p>
                <p>Apellido: {item.apellidos}</p>
                <p>Tipo documento: {item.tipo_documento}</p>
                <p>Documento: {item.documento}</p>
                <p>Correo: {item.correo}</p>
                <p>Contacto: {item.contacto}</p>
                <p>Clave: {item.clave}</p>
                </div>
            ))}
            <button type="button" onClick={()=>{
                router.push('/dashboard/usuarios/actualizar-usuario')
            }}>Editar</button>
        </>
    )
}