"use client"
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { update, getHora, getById } from "@/app/api/citasApip"

export const Actualizar_Cita = () => {


    const [fecha, setFecha] = useState("")
    const [fechaCita, setFechaCita] = useState('')
    const [hora, setHora] = useState([])
    const [horaCita, setHoraCita] = useState('')
    const params = useParams()
    const router = useRouter()

    const handleCitas = async () => {
        const dataCita = {
            fecha_cita: fecha,
            hora_cita: hora
        }
        const citas = await update(params.id, dataCita)

        if (!citas.message) {
            router.push("/dashboard/citas")
        }
    }

    const handleGetById = async () => {
        const hora = await getById(params.id)
        hora.map(item => {
            setHoraCita(item.hora_cita)
            setFechaCita(new Date(item.fecha_cita).toISOString().split("T")[0])
        })
    }

    const handleHoras = async () => {
        const hora = await getHora()
        setHora(hora)
    }

    useEffect(() => {
        handleHoras()
        handleGetById()
    },[])

    return (
        <>
            <h2>Actualizar cita</h2>
            <div>
                <div>
                    <label htmlFor="fecha">Fecha</label>
                    <input type="date" onChange={(e) => setFecha(e.target.value)} id="fecha" value={fechaCita} />
                </div>
                <div>
                    <label htmlFor="hora">Hora</label>
                    <select id="hora" onChange={(e) => setHora(e.target.value)} value={horaCita}>
                        <option value="">seleccione</option>
                        {hora.map(item => (
                            <option key={item.idhora} value={item.hora}>{item.hora}</option>
                        ))}
                    </select>
                </div>
                <button type="button" onClick={() => {
                    handleCitas()
                }}>Enviar</button>
            </div>
        </>
    )
}