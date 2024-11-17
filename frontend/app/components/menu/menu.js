"use client"
import { useRouter } from 'next/navigation'
export const Menu = () => {
    const data = JSON.parse(localStorage.getItem('data'))
    const router = useRouter()
    const handleInicio = () => {
        router.push('/dashboard')
    }
    const handleUsuarios = () => {
        router.push('/dashboard/usuarios')
    }
    const handleMiInformacion = () => {
        router.push('/dashboard/usuarios/mi-informacion')
    }
    const handleCitas = () => {
        router.push('/dashboard/citas')
    }
    const handleAgendarCitas = () => {
        router.push('/dashboard/citas/agendar-citas')
    }
    const handleSalir = () => {
        router.push('/')
    }



    return (
        <>
            <h4>Menu</h4>
            <div>
                <button type="button" onClick={handleInicio}>Inicio</button>
                <button type="button" onClick={handleCitas}>Citas</button>
                {Number(data.id_tipo_usuarios) === 1 ? (
                    <>
                        <button type="button" onClick={handleUsuarios}>Usuarios</button>
                    </>
                ) : (
                    <>
                        <button type="button" onClick={handleMiInformacion}>Mi informacion</button>
                        {Number(data.id_tipo_usuarios) === 2 ? (
                            <button type="button" onClick={handleAgendarCitas}>Agendar citas</button>
                        ) : (
                            <>
                            </>
                        )}
                    </>
                )}
                <button type="button" onClick={handleSalir}>Salir</button>
            </div>
        </>
    )
}