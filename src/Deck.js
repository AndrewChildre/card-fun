// import React, { useState } from 'react';
// import Nav from './Nav';

// const Deck = () => {
// 	const [cardNum, setCardNum] = useState('');
// 	const [cards, setCards] = useState(null);
//     	const handleChange = (e) => {
// 		// e.preventDefault();
     
    
// 	};

// 	const cardData = (e) => {
// 		e.preventDefault();
// 		fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${cardNum}`)
// 			.then((res) => res.json())
// 			.then((data) => {
// 				setCards(data);
// 			});
// 	};

   
// 	return (
// 		<div>
            
//             <div className = 'form-div'>
//                 <h1>Card Shuffle</h1>
// 			<form
// 				className='form-top'
// 				name='cardNum'
//                 onChange={(e) => {
// 			setCardNum(e.target.value);

// 				}}
// 				>
// 				<input id='text-box' type='text' placeholder='How Many' />
// 				<button onClick={cardData}>Deal</button>
                
// 			</form>
           
            
//                     </div>
// 			<div className='card-display'>
// 				{cards &&
// 					cards.cards.map((card, index) => {
// 						return (
// 							<div key={index}>
// 								<img src={card.image} alt='card' srcset='' />
// 							</div>
// 						);
// 					})}
// 			</div>
// 		</div>
// 	);
// };

// export default Deck;
