import React, {useState} from 'react';



const Deck = () => {
    const [cardNum, setCardNum] = useState('');
    const [cards, setCards] = useState(null);

    const cardData = (e) => {
        e.preventDefault();
        fetch(
					`https://deckofcardsapi.com/api/deck/new/draw/?count=${cardNum}`
				)
                .then(res => res.json())
                .then(data => {setCards(data)
                console.log(data);});
               

    }
    const handleChange = (e) => {
        e.preventDefault();
        setCardNum(e.target.value)
    }

    return (
        <div>
            <form name='cardNum' onChange={(e) => {handleChange(e)}}>
                <input type="text" placeholder='How Many' />
                <button onClick={cardData}>X</button>

            </form>
           
            <div className='card-display'>

                {cards && cards.cards.map((card, index) => {
                   
                    return (
                        <div key={index}>
                            <img src={card.image} alt="card" srcset="" />
                           
                        </div>
                    )
                    
                })}
               
            
            </div>
        </div>
    );
};

export default Deck;