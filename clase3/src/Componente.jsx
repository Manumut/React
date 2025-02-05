import { useEffect } from "react"
import { useState } from "react"

const Componente = () => {
    // console.log("Componente inicializado y montado")
    const [estado, setEstado] =useState(true);
    function cambiarEstado() {
        setEstado(!estado);
    }


    useEffect(() => {
        console.log("Componente montado")
        return () => {
            console.log("Componente desmontado")
        }
    }, [estado])

    useEffect(() => {
        return () => {
            console.log("Componente desmontado")
        }
    }, [])
  return (
    <>
    <h1>Componente</h1>
    <button onClick={cambiarEstado}>Cambiar Estado</button>


    </>
  )
}

export default Componente