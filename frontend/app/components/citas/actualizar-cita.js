"use client"
import { useState } from "react"
import { useParams,useRouter } from "next/navigation"
import { update } from "@/app/api/citasApip"

export const Actualizar_Cita = () => {


    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const params = useParams()
    const router=useRouter()


    const handleCitas = async () => {
        const dataCita = {
            fecha_cita: fecha,
            hora_cita: hora
        }
        const citas = await update(params.id,dataCita)

        if(!citas.message){
            router.push("/dashboard/citas")
        }
    }

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
                <button type="button" onClick={()=>{
                    handleCitas()
                }}>Enviar</button>
            </div>
        </>
    )
}