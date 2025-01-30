import { useState } from 'react'
import './App.css'
import Botton from './components/Botton'
import Card from './components/Card'
import Contacto from './components/Contacto'
import Hijo from './components/Hijo'
import Home from './components/Home'

function App() {

  let persons = {
    name: 'Pedro',
    age: 25
  }

  // .map unico elemento para recorrer un array
  let nums = [1, 2, 3, 4, 5]

  let estilo={
    backgroundColor: 'red',
    color: 'white'
  }

  let datos = [
    {
      id: 0,
      titulo: 'Ayuda',
      img: 'https://randomuser.me/api/portraits/women/13.jpg',
      content: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    },
    {
      id: 1,
      titulo: 'Miedo',
      img: 'https://randomuser.me/api/portraits/women/68.jpg',
      content: 'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM'
    },
    {
      id: 2,
      titulo: 'Furbo',
      img: 'https://randomuser.me/api/portraits/men/93.jpg',
      content: 'SSSSSSSSSSSSIIIIIIIIIIIIIIIIIIIIIIIUUUUUUUUUUUUUUUUUUUUUUUUUUUU'                          
    }
  ]

  
  
  let [contador, setContador] = useState(0);

  // VARIABLES REACTIVAs
  function incrementar(){
    setContador(contador+1);
    console.log(contador);
  }
  function dinc(){
    setContador(contador-1);
  }
  function cambiar(signo){
    if(signo === "+"){
      setContador(contador+1);
    }else{
      setContador(contador-1);
    }
  }


  let [color, setColor] = useState();
  function cambio(c){
    if(c === 'red'){
      console.log(c)
      color = c;
      setColor (color);
      
    }else{
      console.log(c)
      color = c;
      setColor (color);
    }
  }


  return (
    <>
      
      {
        // persons.name
        // nums.map(num => <li key={num}>{num}</li>)
          
        // (function () {
        //   return "hola"
        // })() 
        // SE AUTO EJECUTA LA FUNCION


        
      }
      {/* <Home />
      <Contacto />
      <Botton titulo="Mostrar"/>
      <Botton titulo="Eliminar"/>

      <Botton titulo="Q T DEN"/> */}

      {
        // datos.map(dato =>{
        //   return <Card key={dato.id} titulo={dato.titulo} img={dato.img} content={dato.content}/>
        // })
      }

      {/* <Hijo peso="100kg">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, exercitationem quis temporibus magnam facere tempora laudantium molestias maxime, optio sunt adipisci. Soluta repellat molestias cupiditate incidunt quidem perferendis cumque tempora.</p>
      </Hijo> */}

      {/* <h2>{contador}</h2>
      <button onClick={() => {cambiar("+")}}>+</button> 
      {/* Uso arraw function para evitar el que se ejecute el boton cuando se carga la pagina y se ejecute cuando se haga click en el boton 
      <button onClick={() => {cambiar("-")}}>-</button> */}

      


      <button onClick={() => {cambio("blue")}}>blue</button> 
      <button onClick={() => {cambio("red")}}>red</button> 
      <Hijo cambios={color}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, exercitationem quis temporibus magnam facere tempora laudantium molestias maxime, optio sunt adipisci. Soluta repellat molestias cupiditate incidunt quidem perferendis cumque tempora.</p>
      </Hijo>













    </>

  )
}

export default App
