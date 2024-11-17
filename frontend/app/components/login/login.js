'use client'
import { useState } from 'react'
import { login } from './../../api/usuariosApi.js'
import { useRouter } from 'next/navigation.js'

export const Login = () => {

    const [documento, setDocumento] = useState('')
    const [clave, setClave] = useState('')
    const router = useRouter()

    const handleSubmit = async () => {
        const sesion = await login(documento, clave)
        if (sesion.messageAlert) {
            alert(sesion.messageAlert)
        } else {
            sesion.map((item) => {
                localStorage.setItem("data", JSON.stringify({
                    apellidos: item.apellidos,
                    clave: item.clave,
                    contacto: item.contacto,
                    correo: item.correo,
                    documento: item.documento,
                    id_tipo_usuarios: item.id_tipo_usuarios,
                    id_usuarios: item.id_usuarios,
                    nombres: item.nombres,
                    tipo_documento: item.tipo_documento,
                }))
            })


            router.push('/dashboard')
        }
    }

    const handleRegistrar = () => {
        router.push('/registrar-usuario')
    }

    return (
        <>
            <h2>Login</h2>
            <div>
                <label htmlFor="documento">Documento</label>
                <input type="text" id="documento" onChange={(e) => setDocumento(e.target.value)} value={documento} />
                <label htmlFor="clave">Clave</label>
                <input type="password" id="clave" onChange={(e) => setClave(e.target.value)} value={clave} />
                <button type="button" onClick={handleSubmit}>Enviar</button>
                <p>¿No tienes cuenta?, aqui</p>
                <button type="button" onClick={handleRegistrar}>Registrar</button>
            </div>
        </>
    )
}