import css from './Card.module.css'
import Botton from './Botton'
const Card = ({titulo,img, children, estilo}) => {

    
  return (
    <div className={css.card}>
        <img src={img} alt={titulo} />
        <h2>{titulo}</h2>
        {children}
        <Botton titulo="Me Gusta" estilo={estilo}/>
    </div>
  )
}

export default Card