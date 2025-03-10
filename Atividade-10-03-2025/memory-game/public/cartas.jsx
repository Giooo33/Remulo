import styles from './Sobre.module.css'
import aparecida from './imagens/aparecida.jpg'
import fatima from './imagens/fatima.jpg'
import gracas from './imagens/gracas.jpg'
import guadalupe from './imagens/guadalupe.jpg'
import lourdes from './imagens/lourdes.jpg'
import silencio from './imagens/silencio.jpg'
import apocalipse from './imagens/apocalipse.jpg'
import carmo from './imagens/carmo.jpg'
import perpetuo from './imagens/perpetuo.jpg'
import dores from './imagens/dores.jpg'


function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" width="260" height="360" className={styles.avatar} />

                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span> Giovana Dutra</span> <br />
                    <strong>Dev Full Stack</strong> </p>

                    <p>Trabalho com desenvolvimento Web desde 2000.</p>

                    <p>Sou apaixonado por transformar ideias em realidade digital.</p>

                    <p>Especializado em criação de aplicações dinâmicas e intuitivas, <br />
                    com foco na experiência do usuário.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={aparecida} alt="Nossa Senhora Aparecida" />
                    <img src={fatima} alt="Nossa Senhora de Fátima" />
                    <img src={gracas} alt="Nossa Senhora das Graças" />
                    <img src={guadalupe} alt="Nossa Senhora de Guadalupe" />
                    <img src={lourdes} alt="Nossa Senhora de Lourdes" />
                    <img src={silencio} alt="Nossa Senhora do Silêncio" />
                    <img src={apocalipse} alt="Nossa Senhora do Apocalipse" />
                    <img src={carmo} alt="Nossa Senhora do Carmo" />
                    <img src={perpetuo} alt="Nossa Senhora do Perpétuo Socorro" />
                    <img src={dores} alt="Nossa Senhora das Dores" />

                </div>
            </div>

        </section>
    )
}

export default Sobre
