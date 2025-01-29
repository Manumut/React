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
        datos.map(dato =>{
          return <Card key={dato.id} titulo={dato.titulo} img={dato.img} content={dato.content}/>
        })
      }

    </>
  )
}

export default App
