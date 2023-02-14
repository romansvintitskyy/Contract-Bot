import React, { useState, useEffect } from 'react';
import './DropArea.css'



const DropArea = () => {

  let [URL, setURL] = React.useState('');

  function changeHandler(event){
    const file = document.getElementById('fileElem').files[0];
    console.log(file.name)
  }
  

  return (
    <div id="drop-area">
      <form className="my-form">
        <input type="file" id="fileElem" accept=".txt, .doc, .docx" onChange={changeHandler} />
        <label className="drop-button" htmlFor="fileElem">Drop your contract here! {URL}!</label>
      </form>
    </div>
  )
}

export default DropArea;