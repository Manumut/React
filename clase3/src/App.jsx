import { useState } from "react";
import Card from "./components/Card"


function App() {
  
  // const user = {
  //   nombre:"Diego",
  //   edad:"22"
  // }

  const [estado, setEstado] = useState(true)
  
  function cambiar() {
      setEstado(!estado);
  }

  return (
    <>
    {/* <Card  users={user} /> */}
    {
    /* {<Card estado = {estado} /> } */}
    {/* <button onClick={cambiar}>{estado ? "Desactivar" : "Activar"}</button> */}

    <h2>Hola usuario </h2>
    <button onClick >login</button>

    </>
  )
}

export default App
