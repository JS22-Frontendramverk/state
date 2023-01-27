import { useState } from 'react';
import './App.css'

import EnterName from './components/EnterName';

function App() {
  //let counter = 0;
  const [counter, setCounter] = useState(0); // Här använder vi array destructering för att plocka ut variabel och funktion
                                             // 0 i useState skickas in som startvärde för vårt state

  return (
    <div className="App">
      <h1>Räknare</h1>
      <button onClick={ () => { setCounter(counter + 1); }}>
        count is { counter }
      </button>
      <EnterName />
    </div>
  )
}

export default App
