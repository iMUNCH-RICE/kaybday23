import './App.css';
import zoroPic from "./pic0.png"

function App() {
  return (
    <div className="App">
      <main className="main">
        <div className="quote-container">
          <h3 className="quote">When the world shoves you around, you just gotta stand up and shove back. It’s not like somebody’s gonna save you if you start babbling excuses.</h3>
          <p className="author">Roronoa Zoro</p>
        </div>
        <div className="card">
          <div className="timer-container">
            <div className="timer">
              <div className="clock">
                <h1 className="timer-type">Session</h1>
                <p className="time-left">25:00</p>
                <button className="btn-refresh">@</button>
              </div>
            </div>
            <div className="settings-container">
              <div className="break-length-container">
                <h2 className="break-length-title">Break Length</h2>
                <button className="btn-increment">-</button>
                <input value="05:00" />
                <button className="btn-increment">+</button>
              </div>
              <div className="session-length-container">
                <h2 className="session-length-title">Session Length</h2>
                <button className="btn-increment">-</button>
                <input value="25:00" />
                <button className="btn-increment">+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="play-pause-btn-group">
          {/* <button className="btn-pause">||</button> */}
          <button className="btn-play">V</button>
        </div>
        <div className="character-image-container">
          <img src={zoroPic} />
        </div>
      </main >
    </div>
  );
}

export default App;
