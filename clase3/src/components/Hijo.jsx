import { useState } from "react";

const Hijo = ({dameLogin}) => {


    const nombre = "Diego"
    function mostrar(){
        dameLogin(nombre);
        
    }
    console.log(mostrar)
  return (
    
    <>
    <h2>Hola</h2>
        <button onClick= {mostrar}>login</button>
    </>
  )
}


export default Hijo