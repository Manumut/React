import css from './Botton.module.css'

const Botton = ({titulo, estilo}) => {
  return (
    <> 
        <button style={estilo}>{titulo}</button>
    </>
  )
}

export default Botton