import { useState } from "react";
import Card from "./components/Card"
import Hijo from "./components/Hijo";
import Componente from "./Componente";
import { use } from "react";


function App() {
  
  // const user = {
  //   nombre:"Diego",
  //   edad:"22"
  // }

  // const [estado, setEstado] = useState(true)
  
  // function cambiar() {
  //     setEstado(!estado);
  // }

  // const [nombre, setNombre] = useState("");

  // let login = (nombre) => {
  //   setNombre(nombre);
  // }

  const [estado, setEstado] = useState(true);
  function ocultarMostrar() {    
    setEstado(!estado);

  }
  

  return (
    <>
    {/* <Card  users={user} /> */}
    {
    /* {<Card estado = {estado} /> } */}
    {/* <button onClick={cambiar}>{estado ? "Desactivar" : "Activar"}</button> */}

    {/* <h2>Hola usuario: {nombre} </h2>
    <Hijo dameLogin={login} /> */}

    <button onClick={ocultarMostrar}>{estado ? "Ocultar" : "Mostrar"}</button>
    {estado && <Componente />}

    </>
  )
}

export default App
