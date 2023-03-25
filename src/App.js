import './App.css';

import TimerCard from './components/TimerCard.jsx'
import QuoteDisplay from './components/QuoteDisplay.jsx'
import pic from './assets/pic0.png'

// function App() {
//   return (
//     <div className="App">
//       <main className="content layout-row">

//         <div className="card layout-row">

//           <div className="clock layout-row">
//             <div className="play-button layout-col">
//             </div>
//             <div className="timer-type layout-col">
//               <div className="time-left layout-row"></div>
//               <div className="type-settings layout-row"></div>
//             </div>
//           </div>

//           <div className="timer-more-settings layout-row">
//             <div className="reset-button layout-col"></div>
//             <div className="break-length layout-col"></div>
//             <div className="session-length layout-col"></div>
//           </div>
//         </div>
//         <div className="quote layout-row">

//         </div>
//       </main>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <div className="bg-filter">
      <img src={pic} alt="" className="char-img" />
      <main className="content">
        <TimerCard />
        <QuoteDisplay />
      </main>
      </div>
    </div>
  );
}

export default App;
