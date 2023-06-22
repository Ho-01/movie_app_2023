// App.js
import React from 'react';

function Food({name,picture}){
  return (
    <div>
      <h3>I love {name}</h3>
      <img src={picture}></img>
    </div>
  )
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://i.namu.wiki/i/3u7KQ8jVXWJMJpioMNBo5bFb7NrMd1jUbJrGXy99vSgh57D2w0BHG3RlEnawqyRlfAuTihp37sPnlCKX3IlKNg.webp',
  },
  {
    name: 'Samgyopsal',
    image: 'https://i.namu.wiki/i/SdI6mHzKiWg-yJEqBpWhaACTth0ZSU_qSjhHCnQp5OxqwVl-PRIzql6bkmp1tm0YaHxjDoTbt-nBtiSE4nhqbQ.webp',
  },
  {
    name: 'Bibimbop',
    image: 'https://i.namu.wiki/i/dgjXU86ae29hDSCza-L0GZlFt3T9lRx1Ug9cKtqWSzMzs7Cd0CN2SzyLFEJcHVFviKcxAlIwxcllT9s2sck0RA.jpg',
  },
  {
    name: 'Doncasu',
    image: 'https://i.namu.wiki/i/gMSvGksMaKPdznDSM-QxYwYGN-K1zLqOzOpNSAfOwRlrlx6ZY61kOvHHeAHtk9RWrTnA1nnrPri_XkXSewEkpQ.webp',
  },
  {
    name: 'Kimbop',
    image: 'https://i.namu.wiki/i/Ngx-9jfjJa8ALaKlOX41yydLcNZFL7NNOTk2dxVoNF3qmnYiNXDWIuxptd-EqAeFomLbAiIA6EApFHA36F51v3moLEEKkvx85Jxqi6OrHQc96lbBjEH8tyFW0tY2CL0f9oGjvqiCmbM56iyWyE74cw.webp',
  },
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
