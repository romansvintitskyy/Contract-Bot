import React, { useState, useEffect } from 'react';
import './Chatbot.css'
import { Provider, useProvider, Button, defaultTheme, Text, TextArea, Flex, SearchField, Switch } from '@adobe/react-spectrum';
import QIcon from '@spectrum-icons/workflow/Question'

const Chatbot = () => {

  let [currentText, setCurrentText] = React.useState('');
  let [submittedText, setSubmittedText] = React.useState('Here is the answer');

  let [TermEnabled, setTerm] = React.useState(false);
  let [ClauseEnabled, setClause] = React.useState(false);
  let [QAEnabled, setQA] = React.useState(false);

  

  

  return (
    <div class="chatbot">
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
          value={submittedText}
          width="480px"
          height="200px"
          />

          <SearchField
          onClear={() => setCurrentText('')}
          onChange={setCurrentText}
          onSubmit={setSubmittedText}
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
