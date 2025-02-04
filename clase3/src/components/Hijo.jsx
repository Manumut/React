import { useState } from "react";

const Hijo = (props) => {

    const [user, setUser] = useState("Diego");

    // let {nombre} = props;

    function mostrar(){
        setUser(user);
        
    }
    console.log(mostrar)
  return (
    
    <>
    <h2>Hola</h2>
        <button onClick= {mostrar}>login</button>
        <h2>{user}</h2>
    </>
  )
}


export default Hijo