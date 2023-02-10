import { useState } from 'react';
import './Chatbot.css'

const Chatbot = () => {

  return (
    <div class="chatbot">

      <input type="text" name="message" id="message" autocomplete="off" disabled placeholder="Please wait... loading..." />
      <input class="send-button" type="submit" value=">" />


    </div>
  )
}

export default Chatbot;
