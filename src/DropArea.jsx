import { useState } from 'react';
import './DropArea.css'

const DropArea = () =>{

    return(
    <div id="drop-area">
      <form class="my-form">
        <input type="file" id="fileElem" multiple accept="image/*" onchange="handleFiles(this.files)" />
        <label class="drop-button" for="fileElem">Drop your contract here!</label>
      </form>
      </div>
      )
}

export default DropArea;