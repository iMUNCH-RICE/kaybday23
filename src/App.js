import './App.css';
import { useState, useEffect } from 'react';

import TimerCard from './components/TimerCard.jsx'
import QuoteDisplay from './components/QuoteDisplay.jsx'
import pic from './assets/pic0.png'

function App() {
  const [quote, setQuote] = useState("When the world shoves you around, you just gotta stand up and shove back. It’s not like somebody’s gonna save you if you start babbling excuses.")
  const [author, setAuthor] = useState("Roronoa Zoro");
  const [color, setColor] = useState('');

  useEffect(() => {
    setColor(getComputedStyle(document.documentElement).getPropertyValue('--primary-color'));
  }, []);

  console.log(color);

  return (
    <div className="App">
      <div className="bg-filter">
        <img src={pic} alt="" className="char-img" />
        <main className="content">
          <TimerCard color={color} />
          <QuoteDisplay quote={quote} author={author} color={color} />
        </main>
      </div>
    </div>
  );
}

export default App;
