import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import minhaFoto from './avatar.jpeg'

function Home() {
  <section className={styles.home}>
      <div className={styles.apresentacao}>
          <p>
              Olá, sou <br />
              <span>Giovana Dutra </span> <br />
              Dev Full Stack
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre mim
          </Link>
      </div>
      <figure>
          <img className={styles.img_home} src={minhaFoto} alt="avatar.jpeg" />

      </figure>
  </section>

    return (
       <>
  <section className="container">
    <div className="apresentacao">
        <p>
            Olá, sou <br />
            <span>Giovana Dutra</span> <br />
            Dev Full Stack
        </p>
        <Link to="/sobre" className="btn btn-red">
            Saiba mais sobre mim
        </Link>
    </div>
    <figure>
        <img className="img-home" src="/developer-red.svg" alt="Imagem de Home" />
    </figure>
  </section>
        </>
    )
}
export default Home 