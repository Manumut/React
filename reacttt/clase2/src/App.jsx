import './App.css'
import Botton from './components/Botton'
import Card from './components/Card'
import Contacto from './components/Contacto'
import Home from './components/Home'

function App() {

  let persons = {
    name: 'Pedro',
    age: 25
  }

  // .map unico elemento para recorrer un array
  let nums = [1, 2, 3, 4, 5]

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
      <Home />
      <Contacto />
      <Botton titulo="Mostrar"/>
      <Botton titulo="Eliminar"/>

      <Botton titulo="Q T DEN"/>

      <Card />

    </>
  )
}

export default App
