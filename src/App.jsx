import { useState } from 'react';
import './App.css';
import Chatbot from './Chatbot';
import './DropArea.jsx'
import DropArea from './DropArea.jsx';
import { Button, defaultTheme, Provider } from '@adobe/react-spectrum';
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
      <Provider theme={defaultTheme}>
        <Button
          variant="accent"
          onPress={() => alert('Hey there!')}
        >
          Hello React Spectrum!
        </Button>
      </Provider>


    </div>


  );
};

export default App;




