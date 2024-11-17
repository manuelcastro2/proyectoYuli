"use client"
import { useState, useEffect } from "react"
import { create } from "@/app/api/citasApip"
import { getServicios } from "@/app/api/usuariosApi"

export const Agendar_Cita = () => {

    const [modalidad, setModalidad] = useState("")
    const [afeccion, setAfeccion] = useState("")
    const [frecuencia, setFrecuencia] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [servicios, setServicios] = useState([])
    const data = JSON.parse(localStorage.getItem('data'))

    const handleAgendarCita = async () => {
        const dataCita = {
            id_usuarios: data.id_usuarios,
            modalidad_cita: modalidad,
            afeccion_cita: afeccion,
            frecuencia_cita: frecuencia,
            fecha_cita: fecha,
            hora_cita: hora,
            estado_cita: "pendiente"
        }
        const cita = await create(dataCita)
        if (!cita.message.info) {
            alert("cita creada exitosamente")
        } else {
            alert("error al crear la cita")
        }
    }

    const handleServicios = async () => {
        const servicio = await getServicios()
        if (servicio) {
            setServicios(servicio)
        }
    }

    useEffect(() => {
        handleServicios()
    }, [])

    return (
        <>
            <h2>Agendar cita</h2>
            <div>
                <div>
                    <label htmlFor="modalidad">Modalidad</label>
                    <input type="text" onChange={(e) => setModalidad(e.target.value)} id="modalidad" value={modalidad} />
                </div>
                <div>
                    <label htmlFor="afeccion">Afeccion</label>
                    <input type="text" onChange={(e) => setAfeccion(e.target.value)} id="afeccion" value={afeccion} />
                </div>
                <div>
                    <label htmlFor="frecuencia">Frecuencia</label>
                    <select id="frecuencia" onChange={(e) => setFrecuencia(e.target.value)} defaultChecked={frecuencia}>
                        <option value="">seleccione</option>
                        <option value="Primera vez">Primera vez</option>
                        <option value="Control">Control</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="servicio">Servicio</label>
                    <select id="servicio" onChange={(e) => setServicios(e.target.value)}>
                        <option value="">seleccione</option>
                        {servicios.map(item => (
                            <option key={item.id_servicio} value={item.id_servicio}>{item.servicio}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="fecha">Fecha</label>
                    <input type="date" onChange={(e) => setFecha(e.target.value)} id="fecha" value={fecha} />
                </div>
                <div>
                    <label htmlFor="hora">Hora</label>
                    <select id="hora" onChange={(e) => setHora(e.target.value)} defaultChecked={hora}>
                        <option value="">seleccione</option>
                    </select>
                </div>
                <button type="button" onClick={() => {
                    handleAgendarCita()
                }}>Enviar</button>
            </div>
        </>
    )
}