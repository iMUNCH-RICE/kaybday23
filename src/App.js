import './App.css';
import { useState } from 'react';

import TimerCard from './components/TimerCard.jsx';
import QuoteDisplay from './components/QuoteDisplay.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

import samplePic from './assets/pic0.png';
import sampleAudio from './assets/zoro_01.mp3';

function App() {
  const quoteAuthorMedia = [
    {
      id: 0,
      quote: 'Bark! Woof! Arf!',
      author: 'Evan Panlilio',
      media: 'evan-media',
      pic: null,
      audio: null,
      vid: null
    },
    {
      id: 1,
      quote: 'Example Quote 1',
      author: 'Tita Ezcel',
      media: 'example-media-1',
      photo: null,
      audio: null,
      video: null
    },
    {
      id: 2,
      quote: 'Example Quote 2',
      author: 'Tito Reggie',
      media: 'example-media-2',
      photo: null,
      audio: null,
      video: null
    },
    {
      id: 3,
      quote: 'When the world shoves you around, you just gotta stand up and shove back. It’s not like somebody’s gonna save you if you start babbling excuses.',
      author: 'Roronoa Zoro',
      photo: samplePic,
      audio: sampleAudio,
      video: null
    },
    {
      id: 4,
      quote: 'When the world shoves you around, you just gotta stand up and shove back. It’s not like somebody’s gonna save you if you start babbling excuses.',
      author: 'Mommy? I guess LOL',
      photo: samplePic,
      audio: sampleAudio,
      video: null
    },
    {
      id: 5,
      quote: 'When the world shoves you around, you just gotta stand up and shove back. It’s not like somebody’s gonna save you if you start babbling excuses.',
      author: 'Jessica',
      photo: samplePic,
      audio: sampleAudio,
      video: null
    },
    {
      id: 6,
      quote: "You're my inspiration",
      author: 'Nico',
      photo: samplePic,
      audio: sampleAudio,
      video: null
    },
    {
      id: 7,
      quote: 'When the world shoves you around, you just gotta stand up and shove back. It’s not like somebody’s gonna save you if you start babbling excuses.',
      author: 'Danny',
      photo: samplePic,
      audio: sampleAudio,
      video: null
    }
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

  const [quote, setQuote] = useState(quoteAuthorMedia[3]['quote']);
  const [author, setAuthor] = useState(quoteAuthorMedia[3]['author']);
  const [photo, setPhoto] = useState(quoteAuthorMedia[3]['photo']);
  const [audio, setAudio] = useState(quoteAuthorMedia[3]['audio']);
  const [video, setVideo] = useState(quoteAuthorMedia[3]['video']);
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
    setPhoto(selectedQuote.photo);
    setAudio(selectedQuote.audio);
    setVideo(selectedQuote.video);

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
          <QuoteDisplay quote={quote} author={author} photo={photo} audio={audio} video={video} />
          <FontAwesomeIcon icon={faRotate} onClick={generateNewQuoteAuthorMediaColors} size="2xl" className="reroll-button" />
        </main>
      </div>
    </div>
  );
}

export default App;