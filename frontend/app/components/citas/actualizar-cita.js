"use client"
import { useState } from "react"

export const Actualizar_Cita = () => {


    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")

    return (
        <>
            <h2>Actualizar cita</h2>
            <div>
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
                <button type="button">Enviar</button>
            </div>
        </>
    )
}