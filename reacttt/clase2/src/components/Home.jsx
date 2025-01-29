import Card from './Card'
import css from './Home.module.css'

const Home = () => {

  return (
    <>
        <div className={css.container}>
          <h1>Home</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste esse tenetur eveniet dolore enim doloremque officia eaque excepturi est.</p>
        </div>
        
        <div className={css.card}>
          <img src="" alt="" />
          <h2>titulo</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae omnis nemo earum saepe molestias magnam quibusdam beatae illo quisquam!</p>
        </div>

        <div className={css.card}>
          <img src="" alt="" />
          <h2>titulo</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae omnis nemo earum saepe molestias magnam quibusdam beatae illo quisquam!</p>
        </div>

        <Card />
    </>
  )
}

export default Home