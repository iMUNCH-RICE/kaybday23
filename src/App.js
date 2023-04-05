import './App.css';
import { useState } from 'react';

import TimerCard from './components/TimerCard.jsx';
import QuoteDisplay from './components/QuoteDisplay.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

import samplePic from './assets/pic0.png';
import sampleAudio from './assets/zoro_01.mp3';

import video0 from './assets/video/evan-vid.m4v';
import video1 from './assets/video/tita-ezcel-vid.m4v';
import video2 from './assets/video/tito-reggie-vid.m4v';
// import video5 from './assets/video/kay-cartoon-vid.m4v';
import video6 from './assets/video/kay-nico-dance-vid.m4v';
import video8 from './assets/video/princess-meow-vid.m4v';
import video9 from './assets/video/levi-vid.m4v';

import photo4 from './assets/photo/mommy-pic.jpg';

function App() {
  const quoteAuthorMedia = [
    {
      id: 0,
      quote: "Bark! Woof! Arf! (LET'S GOOOOOOO!!!)",
      author: 'Evan',
      photo: null,
      audio: null,
      video: video0
    },
    {
      id: 1,
      quote: "We wish you all the best in your life...happiness and success. See you soon, we love you!",
      author: 'Tita Ezcel',
      photo: null,
      audio: null,
      video: video1
    },
    {
      id: 2,
      quote: "I wish you all the best, and always take care of yourself. We love you! <3 <3",
      author: 'Tito Reggie',
      photo: null,
      audio: null,
      video: video2
    },
    {
      id: 3,
      quote: "When the world shoves you around, you just gotta stand up and shove back. It’s not like somebody’s gonna save you if you start babbling excuses.",
      author: 'Roronoa Zoro',
      photo: samplePic,
      audio: sampleAudio,
      video: null
    },
    {
      id: 4,
      quote: "Take a step back, inhale and laugh. Remember who you are and why you're here. You're never given anything in this world that you can't handle. Be strong, be flexible, love yourself, and love others.",
      author: 'Mommy? I guess LOL',
      photo: photo4,
      audio: null,
      video: null
    },
    {
      id: 5,
      quote:  "I am so lucky to have you as my sister!",
      author: 'Jessica',
      photo: null,
      audio: null,
      video: null
    },
    {
      id: 6,
      quote: "Dear Kayleen: K Fart / f A rt / fart Y / L / E fart / E fart / N ico is very proud of you Good luck Grad Student",
      author: 'Nico',
      photo: null,
      audio: null,
      video: video6
    },
    {
      id: 7,
      quote: "You are the coolest person ever!",
      author: 'Danny',
      photo: null,
      audio: null,
      video: null
    },
    {
      id: 8,
      quote: "Meow (Meow)",
      author: "Princess",
      photo: null,
      audio: null,
      video: video8
    },
    {
      id: 9,
      quote: "So, Just Do The Best You Can And Choose Whichever You’ll Regret The Least.",
      author: "Levi Ackerman",
      photo: null,
      audio: null,
      video: video9
    }
  ];

  const primarySecondaryColorPairs = [
    ['#FF5E5E', '#FFB2B2'],
    ['#9C70C2', '#CFA5E6'],
    ['#F95F5F', '#FFB2B2'],
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