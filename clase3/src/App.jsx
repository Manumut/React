import { useState } from "react";
import Card from "./components/Card"
import Hijo from "./components/Hijo";


function App() {
  
  // const user = {
  //   nombre:"Diego",
  //   edad:"22"
  // }

  const [estado, setEstado] = useState(true)
  
  function cambiar() {
      setEstado(!estado);
  }

  const [nombre, setNombre] = useState("");

  let login = (nombre) => {
    setNombre(nombre);
  }

  

  return (
    <>
    {/* <Card  users={user} /> */}
    {
    /* {<Card estado = {estado} /> } */}
    {/* <button onClick={cambiar}>{estado ? "Desactivar" : "Activar"}</button> */}

    <h2>Hola usuario </h2>
    <Hijo dameLogin={login} />

    </>
  )
}

export default App
