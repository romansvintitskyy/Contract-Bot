import { useState } from 'react';
import './DropArea.css'

const DropArea = () => {

  return (
    <div id="drop-area">
      <form className="my-form">
        <input type="file" id="fileElem" multiple accept="image/*" onChange="handleFiles(this.files)" />
        <label className="drop-button" htmlFor="fileElem">Drop your contract here!</label>
      </form>
    </div>
  )
}

export default DropArea;