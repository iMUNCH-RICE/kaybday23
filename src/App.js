import './App.css';
import { useState } from 'react';

import TimerCard from './components/TimerCard.jsx';
import QuoteDisplay from './components/QuoteDisplay.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

function App() {
  const quoteAuthorMedia = [
    {
      id: 0,
      quote: 'Bark! Woof! Arf!',
      author: 'Evan Panlilio',
      media: 'evan-media'
    },
    {
      id: 1,
      quote: 'Example Quote 1',
      author: 'Author 1',
      media: 'example-media-1',
    },
    {
      id: 2,
      quote: 'Example Quote 2',
      author: 'Author 2',
      media: 'example-media-2',
    },
  ];

  const primarySecondaryColorPairs = [
    ['#FF5E5E', '#FFB2B2'],
    ['#9C70C2', '#CFA5E6'],
    ['#F95F5F', '#FFB2B2'],
    ['#f5985e', '#FFE5D9'],
    ['#35769C', '#8FCBEE'],
    ['#8B73E6', '#BAAFF5'],
    ['#FF7EA8', '#FFB2D9']
  ];

  const [quote, setQuote] = useState(quoteAuthorMedia[0]['quote']);
  const [author, setAuthor] = useState(quoteAuthorMedia[0]['author']);
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const [previousQuoteIndex, setPreviousQuoteIndex] = useState(null);
  const [previousColorIndex, setPreviousColorIndex] = useState(null);

  const getRandomIndex = (previousIndex, maxIndex) => {
    let index = previousIndex;
    while (index === previousIndex) {
      index = Math.floor(Math.random() * maxIndex);
    }
    return index;
  };

  const generateNewQuoteAuthorMediaColors = () => {
    // Select a random quote object from the list
    const randomQuoteIndex = getRandomIndex(previousQuoteIndex, quoteAuthorMedia.length);
    setPreviousQuoteIndex(randomQuoteIndex);
    const selectedQuote = quoteAuthorMedia[randomQuoteIndex];

    // Set the quote and author states
    setQuote(selectedQuote.quote);
    setAuthor(selectedQuote.author);

    // Select a random color pair from the list
    const randomColorIndex = getRandomIndex(previousColorIndex, primarySecondaryColorPairs.length);
    setPreviousColorIndex(randomColorIndex);
    const selectedColorPair = primarySecondaryColorPairs[randomColorIndex];
    const newPrimaryColor = selectedColorPair[0];
    const newSecondaryColor = selectedColorPair[1];

    // Set primary and secondary color states
    setPrimaryColor(newPrimaryColor);
    setSecondaryColor(newSecondaryColor);

    // Update the CSS variables directly, without using useEffect
    document.documentElement.style.setProperty('--primary-color', newPrimaryColor);
    document.documentElement.style.setProperty('--secondary-color', newSecondaryColor);
  };

  return (
    <div className="App">
      <div className="bg-filter">
        <main className="content">
          <TimerCard />
          <QuoteDisplay quote={quote} author={author} />
          <FontAwesomeIcon icon={faRotate} onClick={generateNewQuoteAuthorMediaColors} size="2xl" style={{ color: "var(--primary-color)", overflow: "hidden", marginBlock: "2rem" }} />
          {/* <button onClick={generateNewQuoteAuthorMediaColors}>Generate New Quote, Author, and Colors</button> */}
        </main>
      </div>
    </div>
  );
}

export default App;