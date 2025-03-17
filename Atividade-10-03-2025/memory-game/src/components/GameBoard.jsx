import useState from '../components/Card';


function GamaBoard () {

    const Card = [aparecida, aparecida, fatima, fatima, gracas, gracas, guadalupe, guadalupe, lourdes, lourdes, silencio, silencio, apocalipse, apocalipse, carmo, carmo, perpetuo,perpetuo, dores, dores]

//Agora através do id vamos definir posicições númericas para as cartas
    const GamaBoard = () => {
        const initialCard = [

        {id : 1, value: aparecida, matched: false},
        {id : 2, value: aparecida, matched: false},
        {id : 3, value: fatima, matched: false},
        {id : 4, value: fatima, matched: false},
        {id : 5, value: gracas, matched: false},
        {id : 6, value: gracas, matched: false},
        {id : 7, value: guadalupe, matched: false},
        {id : 8, value: guadalupe, matched: false},
        {id : 9, value: lourdes, matched: false},
        {id : 10, value: lourdes, matched: false},
        {id : 11, value: silencio, matched: false},
        {id : 12, value: silencio, matched: false},
        {id : 13, value: apocalipse, matched: false},
        {id : 14, value: apocalipse, matched: false},
        {id : 15, value: carmo, matched: false},
        {id : 16, value: carmo, matched: false},
        {id : 17, value: perpetuo, matched: false},
        {id : 18, value: perpetuo, matched: false},
        {id : 19, value: dores, matched: false},
        {id : 20, value: dores, matched: false},
        
        ]

        const [cards, setCards] = useState(shuffleArray([...initialCard]));
        const [flippedCards, setFlippedCards] = useState([]);

        const handleCardClick = (card) => {
            if (flippedCards.length < 2 && !card.matched && !flippedCards.includes(card)) {
                setFlippedCards([...flippedCards, card]);
                }
        };
    

    const [cards, setCards] = React.useState(null)

    return(

        <div className="game-board">
            {cards.map((card) => (
                <Card
                key={card.id}
                value={card.value}
                isFlipped={flippedCards.includes(card) || card.matched}
                onClick={() => handleCardClick(card)}
                />
            ))}
        </div>
    )
} 

    const Card = ({ value, isFlipped, onClick }) => {
        return(
            <div className="card" onClick={onClick}>
            {isFlipped ? (
                <img src={value} alt="card image" />
            ) : (
                <div className="card-back">?</div>
            )}
            </div>
        );
    };



//Ele esta definindo um estado para armazenar a carta atual.
//setCarta é uma função que atualiza o estado.

    return(
        <>
        <>
        </>
        
        <styles/>
        <div className="App">
            <header className="App-header">
                <h1>Cartas</h1>

                <ul>
                    {cartas.map((carta, index) => (

                        <li key={index}></li>

//Ele esta criando uma lista com as cartas, e para cada carta ele esta criando
//um item da lista.
//key é uma propriedade obrigatória para cada item da lista, ela serve para
//identificar cada item da lista.
                        ))
                            }

                        <div style={{textAlign: 'center', marginTop: '20vh'}}> 
                            <button onClick={() => setCarta(carta[Math.floor(Math.random()*carta.length)])}>Gerar Carta</button>
                            
//Ele esta criando um botão que ao ser clicado, gera uma carta aleatória da lista de cartas.
//Math.floor(Math.random()*carta.length) gera um número aleatório entre 0
//e a quantidade de cartas - 1.

            
            if()

                        </div>
                </ul>
            </header>
        </div>
        </>
        
    )
    
}

export default GameBoard;






