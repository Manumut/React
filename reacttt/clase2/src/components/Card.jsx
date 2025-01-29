import css from './Card.module.css'
import Botton from './Botton'
const Card = ({titulo,img,content}) => {

    
  return (
    <div className={css.card}>
        <img src={img} alt={titulo} />
        <h2>{titulo}</h2>
        <p>{content}</p>
        <Botton titulo="Me Gusta" />
    </div>
  )
}

export default Card