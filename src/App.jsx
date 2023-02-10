import { useState } from 'react';
// import adobe-logo from './adobe-logo.png';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <img src={'./src/adobe-logo.png'} className="App-logo" alt="logo" />
        <h1 className="App-logo">Adobe ContractBot</h1>
      </header>
    </div>
  );
};

export default App;
