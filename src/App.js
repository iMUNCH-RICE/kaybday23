import './App.css';

function App() {
  return (
    <div className="App">
      <main className="content">
        <div className="card">
          <div className="clock">

            <div className="play-button">
            </div>
            <div className="timer-type">
              <div className="time-left"></div>
              <div className="type-settings"></div>
            </div>
          </div>
          <div className="timer-more-settings">
            <div className="reset-button"></div>
            <div className="break-length"></div>
            <div className="session-length"></div>
          </div>
        </div>
        <div className="quote">

        </div>
      </main>
    </div>
  );
}

export default App;
