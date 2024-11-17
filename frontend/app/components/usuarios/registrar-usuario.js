"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { create, getServicios, getTipoUsuarios } from './../../api/usuariosApi.js'

export const Registrar_Usuario = () => {

    const [servicio, setServicio] = useState([])
    const [tipoUsuario, setTipoUsuario] = useState([])
    const [mostrarServicio, setMostrarServicio] = useState(false)

    const [selectServicio, setSelectServcio] = useState("")
    const [tipo, setTipo] = useState(0)
    const [tipoDocumento, setTipoDocumento] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [documento, setDocumento] = useState("")
    const [correo, setCorreo] = useState("")
    const [contacto, setContacto] = useState("")
    const [clave, setClave] = useState("")
    const router = useRouter()

    const handleServicio = async () => {
        const servicios = await getServicios()
        setServicio(servicios)
    }

    const handleTipoUsuario = async () => {
        const tipoUsuarios = await getTipoUsuarios()
        setTipoUsuario(tipoUsuarios)
    }

    useEffect(() => {
        handleServicio()
        handleTipoUsuario()
        console.log(mostrarServicio);

    }, [])

    const handleSalir = () => {
        router.push('/')
    }

    const handleSumit = async () => {
        const dataUsuario = {
            usuario: {
                id_tipo_usuario: tipo,
                tipo_documento: tipoDocumento,
                nombres: nombre,
                apellidos: apellido,
                documento: documento,
                correo: correo,
                contato: contacto,
                clave: clave
            },
            servicio: {
                id_servicio: selectServicio
            }
        }
        console.log(dataUsuario);
        const usuarios = await create(dataUsuario)
        if (usuarios) {
            alert('Usuario creado correctamente')
        }
    }

    const handleTipoSelect = (e) => {
        setTipo(e)
        if (Number(e) === 3) {
            setMostrarServicio(true)
        }else{
            setMostrarServicio(false)
        }
        
    }

    return (
        <>
            <button type="button" onClick={handleSalir}>Salir</button>
            <h2>Registro</h2>
            <div>
                <h3>Datos</h3>
                <div>
                    <label htmlFor="tipo_usuario">Tipo usuario</label>
                    <select onChange={(e) => handleTipoSelect(e.target.value)} id='tipo_usuario'>
                        <option value="">Seleccione</option>
                        {tipoUsuario.map((item) => (
                            <option key={item.id_tipo_usuarios} value={item.id_tipo_usuarios}>{item.tipo}</option>
                        ))}
                    </select>
                </div>
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
                    <select onChange={(e) => setTipoDocumento(e.target.value)} id="tipo_documento" defaultChecked={tipoDocumento}>
                        <option value="">Seleccione</option>
                        <option value="T.I.">T.I.</option>
                        <option value="C.C.">C.C.</option>
                        <option value="C.E.">C.E.</option>
                        <option value="P.P.T.">P.P.T.</option>
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
                {mostrarServicio ? (
                    <>
                        <h3>Servicio</h3>
                        <div>
                            <select onChange={(e) => setSelectServcio(e.target.value)}>
                                <option value="">seleccione</option>
                                {servicio.map((item) => (
                                    <option key={item.id_servicio} value={item.id_servicio}>{item.servicio}</option>
                                ))}
                            </select>
                        </div>
                    </>
                ) : (<></>)}
                <button type="button" onClick={handleSumit}>Registrar</button>
            </div>
        </>
    )
}