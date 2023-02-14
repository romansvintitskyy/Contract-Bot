import { useState } from 'react';
import './App.css';
import Chatbot from './Chatbot';
import './DropArea.jsx'
import DropArea from './DropArea.jsx';
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <img src={'./asset/adobe-logo.png'} className="App-logo" alt="logo" />
        <h1 className="App-logo">Adobe ContractBot</h1>
      </header>
      <DropArea />
      <Chatbot />



    </div>


  );
};

export default App;




