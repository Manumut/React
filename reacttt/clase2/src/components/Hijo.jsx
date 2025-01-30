const Hijo = ({ cambios, children}) => {
    
  return (
    <>

    <h1>Peso del hijo: </h1>
    <div style={{background: cambios}}>{children}</div>
    </>
    
    )
}

export default Hijo