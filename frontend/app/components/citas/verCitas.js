"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getByIdPaciente, getByIdMedico, getAll, deleteCitas } from "@/app/api/citasApip";

export const VerCitas = () => {

    const data = JSON.parse(localStorage.getItem('data'))
    const [citas, setCitas] = useState([])
    const router = useRouter()

    const handleCitas = async () => {
        if (data.id_tipo_usuarios == 2) {
            const citasA = await getByIdPaciente(data.id_usuarios)
            setCitas(citasA)
            console.log(citasA);

        } else if (data.id_tipo_usuarios == 3) {
            const citasA = await getByIdMedico(data.id_usuarios)
            setCitas(citasA)
        } else {
            const citasA = await getAll()
            console.log(citasA);
            setCitas(citasA)
        }
    }

    const handleCancelar = async (id) => {
        const citas = await deleteCitas(id)
        if (!citas.message) {
            handleCitas()
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
                        {data.id_tipo_usuarios == 1 || data.id_tipo_usuarios == 3 ? (
                            <>
                                <p>Nombre: {item.nombres}</p>
                                <p>Apellido: {item.apellidos}</p>
                                <p>Tipo documento: {item.tipo_documento}</p>
                                <p>Documento: {item.documento}</p>
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
                        {data.id_tipo_usuarios == 2 || data.id_tipo_usuarios == 1 ? (
                            <>
                                <button type="button" onClick={() => {
                                    router.push(`/dashboard/citas/actualizar-citas/${item.id_citas}`)
                                }}>Editar</button>
                                <button type="button" onClick={() => {
                                    handleCancelar(item.id_citas)
                                }}>Cancelar</button>
                            </>
                        ) : (
                            <>
                            </>
                        )}
                    </details>
                </div>
            ))}
        </>
    )
}