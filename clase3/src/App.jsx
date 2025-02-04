import Card from "./components/Card"


function App() {
  const users = [{
    nombre:"Diego",
    edad:"22"
  }
  ]

  return (
    <>
    <Card users={users}/>

    
    
    </>
  )
}

export default App
