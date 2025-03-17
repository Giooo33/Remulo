import imagens from '../../public/imagens';

function Card() {
    return (
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
    )
}

export default Card

