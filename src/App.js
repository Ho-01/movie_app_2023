// App.js
import React from 'react';
import PropTypes from 'prop-types';

function Food({name,picture,rating}){
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>
    </div>
  )
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://i.namu.wiki/i/3u7KQ8jVXWJMJpioMNBo5bFb7NrMd1jUbJrGXy99vSgh57D2w0BHG3RlEnawqyRlfAuTihp37sPnlCKX3IlKNg.webp',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyopsal',
    image: 'https://i.namu.wiki/i/SdI6mHzKiWg-yJEqBpWhaACTth0ZSU_qSjhHCnQp5OxqwVl-PRIzql6bkmp1tm0YaHxjDoTbt-nBtiSE4nhqbQ.webp',
    rating: 5,
  },
  {
    id: 3,
    name: 'Bibimbop',
    image: 'https://i.namu.wiki/i/dgjXU86ae29hDSCza-L0GZlFt3T9lRx1Ug9cKtqWSzMzs7Cd0CN2SzyLFEJcHVFviKcxAlIwxcllT9s2sck0RA.jpg',
    rating: 3.5,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://i.namu.wiki/i/gMSvGksMaKPdznDSM-QxYwYGN-K1zLqOzOpNSAfOwRlrlx6ZY61kOvHHeAHtk9RWrTnA1nnrPri_XkXSewEkpQ.webp',
    rating: 3.5,
  },
  {
    id: 5,
    name: 'Kimbop',
    image: 'https://i.namu.wiki/i/Ngx-9jfjJa8ALaKlOX41yydLcNZFL7NNOTk2dxVoNF3qmnYiNXDWIuxptd-EqAeFomLbAiIA6EApFHA36F51v3moLEEKkvx85Jxqi6OrHQc96lbBjEH8tyFW0tY2CL0f9oGjvqiCmbM56iyWyE74cw.webp',
    rating: 4,
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
