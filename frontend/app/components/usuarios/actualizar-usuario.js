"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getById,update } from '@/app/api/usuariosApi'

export const Actualizar_Usuario = () => {

    const [tipoDocumento, setTipoDocumento] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [documento, setDocumento] = useState("")
    const [correo, setCorreo] = useState("")
    const [contacto, setContacto] = useState("")
    const [clave, setClave] = useState("")
    const [error, setError] = useState(undefined)
    const router = useRouter()
    const data = JSON.parse(localStorage.getItem('data'))

    const handleGetById = async () => {
        const usuario = await getById(data.id_usuarios)
        console.log(usuario);
        
        if (!usuario.message) {
            usuario.map(item => {
                setNombre(item.nombres)
                setApellido(item.apellidos)
                setTipoDocumento(item.tipo_documento)
                setDocumento(item.documento)
                setCorreo(item.correo)
                setContacto(item.contacto)
                setClave(item.clave)
            })
        } else {
            setError(usuario.message)
        }
    }

    const handleActualizar=async()=>{
        const dataUpdate={
            nombres: nombre,
            apellidos:apellido,
            tipo_documento:tipoDocumento,
            documento:documento,
            correo:correo,
            contacto:contacto,
            clave:clave
        }
        const usuario= await update(data.id_usuarios,dataUpdate)
        if(!usuario.message){
            router.push('/dashboard/usuarios/mi-informacion')
        }else{
            alert("errror al actualizar")
        }

    }

    useEffect(() => {
        handleGetById()
    }, [])

    return (
        <>
            <button type="button" onClick={() => {
                router.push('/dashboard/usuarios/mi-informacion')
            }}>Volver</button>
            <h2>Actualizar Usuario</h2>
            {error===undefined ? (
                <>
                    <div>
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" onChange={(e) => setNombre(e.target.value)} id="nombre" value={nombre} />
                        </div>
                        <div>
                            <label htmlFor="nombre">Apellido</label>
                            <input type="text" onChange={(e) => setApellido(e.target.value)} id="apellido" value={apellido} />
                        </div>
                        <div>
                            <label htmlFor="nombre">Tipo documento</label>
                            <select onChange={(e) => setTipoDocumento(e.target.value)} id="tipo_documento" value={tipoDocumento}>
                                <option value="">Seleccione</option>
                                <option value="TI">TI</option>
                                <option value="CC">CC</option>
                                <option value="CE">CE</option>
                                <option value="PPT">PPT</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="documento">Documento</label>
                            <input type="text" onChange={(e) => setDocumento(e.target.value)} id="documento" value={documento} />
                        </div>
                        <div>
                            <label htmlFor="correo">Correo</label>
                            <input type="text" onChange={(e) => setCorreo(e.target.value)} id="correo" value={correo} />
                        </div>
                        <div>
                            <label htmlFor="contacto">Contacto</label>
                            <input type="text" onChange={(e) => setContacto(e.target.value)} id="contacto" value={contacto} />
                        </div>
                        <div>
                            <label htmlFor="clave">Clave</label>
                            <input type="text" onChange={(e) => setClave(e.target.value)} id="clave" value={clave} />
                        </div>
                        <button type="button" onClick={()=>{
                            handleActualizar()
                        }}>Actualizar</button>
                    </div>
                </>
            ) : (
                <>
                    {error}
                </>
            )}
        </>
    )
}