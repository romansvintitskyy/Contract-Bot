import React, { useState, useEffect } from 'react';
import './DropArea.css'



const DropArea = () => {

  let [URL, setURL] = React.useState('');
  let [content, setContent] = React.useState('');
  function changeHandler(event) {
    const file = document.getElementById('fileElem').files[0];
    console.log(file.name);
    const reader = new FileReader();

    reader.onload = (evt) => {
      setContent(evt.target.result);
      console.log({ content });
      console.log(typeof (content));
      // if (content != '') {
      //   document.getElementById("").style.display = "none";
      // }
    };

    reader.readAsText(file);
    console.log('End of changeHandler');
  }



  return (
    <div id="drop-area">
      <form className="my-form">
        <input type="file" id="fileElem" accept=".txt, .doc, .docx" onChange={changeHandler} />
        <label className="drop-button" htmlFor="fileElem">Drop your contract here!{URL}</label>
      </form>
      <p>{content}</p>

    </div>
  )
}

export default DropArea;