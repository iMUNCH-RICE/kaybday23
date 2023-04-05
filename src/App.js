import './App.css';
import { useState } from 'react';

import TimerCard from './components/TimerCard.jsx';
import QuoteDisplay from './components/QuoteDisplay.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

import audio3 from './assets/zoro_01.mp3';

import photo3 from './assets/pic0.png';
import photo4 from './assets/photo/mommy-pic.jpg';
import photo10 from './assets/photo/v-photo.jpg';

import video0 from './assets/video/evan-vid.m4v';
import video1 from './assets/video/tita-ezcel-vid.m4v';
import video2 from './assets/video/tito-reggie-vid.m4v';
import video5 from './assets/video/jessica-vid.m4v';
import video6 from './assets/video/kay-nico-dance-vid.m4v';
import video7 from './assets/video/danny-vid.m4v';
import video8 from './assets/video/princess-meow-vid.m4v';
import video9 from './assets/video/levi-vid.m4v';
import video10 from './assets/video/purple-v-vid.m4v';

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
      photo: photo3,
      audio: audio3,
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
      quote: "Grad school is annoying and hard but the good thing is you have a dream that you've been working hard to achieve for so long! Not everyone gets to do something that they love that inspires others like what you'll be doing.",
      author: 'Jessica',
      photo: null,
      audio: null,
      video: video5
    },
    {
      id: 6,
      quote: "Dear Kayleen: K fart / f A rt / fart Y / L / E fart / E fart / N ico is very proud of you Good luck Grad Student",
      author: 'Nico',
      photo: null,
      audio: null,
      video: video6
    },
    {
      id: 7,
      quote: "Keep up the hard work! It seems like it was just yesterday with you guys out in the backyard, we even graduated high school, playing paintball, skip rocks in the streets. Have a good time, stay safe, and keep working hard!",
      author: 'Danny',
      photo: null,
      audio: null,
      video: video7
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
      quote: "So, just do the best you can and choose whichever you’ll regret the least.",
      author: "Levi Ackerman",
      photo: null,
      audio: null,
      video: video9
    },
    {
      id: 10,
      quote: "When things get hard, stop for awhile and look back and see how far you’ve come. Don’t forget how rewarding it is. You are the most beautiful flower, more than anyone else in this world.",
      author: "V (Kim Taehyung)",
      photo: photo10,
      audio: null,
      video: video10
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

  const [quote, setQuote] = useState(quoteAuthorMedia[0]['quote']);
  const [author, setAuthor] = useState(quoteAuthorMedia[0]['author']);
  const [photo, setPhoto] = useState(quoteAuthorMedia[0]['photo']);
  const [audio, setAudio] = useState(quoteAuthorMedia[0]['audio']);
  const [video, setVideo] = useState(quoteAuthorMedia[0]['video']);
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