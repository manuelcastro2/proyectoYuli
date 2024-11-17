"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getByIdPaciente, getByIdMedico, getAll } from "@/app/api/citasApip";

export const VerCitas = () => {

    const data = JSON.parse(localStorage.getItem('data'))
    const [citas, setCitas] = useState([])

    const handleCitas = async () => {
        if (data.id_tipo_usuarios == 2) {
            const citasA = await getByIdPaciente(data.id_usuarios)
            setCitas(citasA)
        } else if (data.id_tipo_usuarios == 3) {
            const citasA = await getByIdMedico(data.id_usuarios)
            setCitas(citasA)
        } else {
            const citasA = await getAll()
            console.log(citasA);
            setCitas(citasA)
        }


    }

    useEffect(() => {
        handleCitas()
    }, [])

    return (
        <>
            <h2>Citas</h2>
            {citas.map(item => (
                <div key={item.id_citas}>
                    <details>
                        <summary>Cita {item.servicio}</summary>
                        {data.id_tipo_usuarios == 1 ? (
                            <>
                            <p>Nombre:{item.nombres}</p>
                            <p>Apellido:{item.apellidos}</p>
                            <p>Tipo documento:{item.tipo_documento}</p>
                            <p>Documento:{item.documento}</p>
                            </>
                        ) : (
                            <>
                            </>
                        )}
                        <p>Modalidad: {item.modalidad_cita}</p>
                        <p>Frecuencia: {item.frecuencia_cita}</p>
                        <p>Afeccion medica: {item.afeccion_cita}</p>
                        <p>Feha: {item.fecha_cita}</p>
                        <p>Hora: {item.hora_cita}</p>
                        <p>Estado cita: {item.estado_cita}</p>
                        <button type="button">Cancelar</button>
                    </details>
                </div>
            ))}
        </>
    )
}