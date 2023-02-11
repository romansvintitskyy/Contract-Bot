import React, { useState, useEffect } from 'react';
import './Chatbot.css'
import { Provider, useProvider, Button, defaultTheme, Text, TextArea, Flex, SearchField, Switch } from '@adobe/react-spectrum';
import QIcon from '@spectrum-icons/workflow/Question'
import {Configuration, OpenAIApi} from "openai"


const Chatbot = () => {

  let [currentText, setCurrentText] = React.useState('');
  let [chatAnswer, setChatAnswer] = React.useState('How can I help you?');

  let [TermEnabled, setTerm] = React.useState(false);
  let [ClauseEnabled, setClause] = React.useState(false);
  let [QAEnabled, setQA] = React.useState(false);

  //const configuration = new Configuration({
  //  apiKey: import.meta.env.OPENAI_API_KEY,
  //});

  //const openai = new OpenAIApi(configuration);
  //console.log(import.meta.env.VITE_Open_AI_Key)
  
  const generateText = async () =>{
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(import.meta.env.VITE_Open_AI_Key)
      },
      body: JSON.stringify({
        'prompt': currentText,
        'temperature': 0.7,
        'max_tokens': 15,
        'top_p': 1,
        'frequency_penalty': 0,
        'presence_penalty': 0.5,
        'stop': ["\"\"\""],
      })
    };
    fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', requestOptions)
        .then(response => response.json())
        .then(data => {
          //console.log(data.choices[0].text);
          setChatAnswer(data.choices[0].text);
      }).catch(err => {
        console.log("Ran out of tokens for today! Try tomorrow!");
      });
  }
  

  return (
    <div className="chatbot">
      <Provider theme={defaultTheme}>
        <Flex 
        direction="column"
        position="absolute"
        top="200px"
        left="800px"
        gap="size-200"
        >
          
          <Switch
          isSelected={TermEnabled}
          onChange={setTerm}>
          Highlight Key Terms
          </Switch>

          <Switch
          isSelected={ClauseEnabled}
          onChange={setClause}>
          Highlight Key Clauses
          </Switch>

          <Switch
          isSelected={QAEnabled}
          onChange={setQA}>
          Q&A
          </Switch>


          
          <TextArea
          label="Answer"
          value={chatAnswer}
          width="480px"
          height="200px"
          />

          <SearchField
          onClear={() => setCurrentText('')}
          onChange={setCurrentText}
          onSubmit={generateText}
          label="Question"
          icon={<QIcon/>}
          value={currentText}
          width="480px"
          height="100px"
          />
        </Flex>
      </Provider>

    </div>
  )
}

export default Chatbot;
