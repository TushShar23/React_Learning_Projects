import React, { useState } from 'react'


const WordCounter = () => {
  const [textArea,setTextArea] = useState("");
  const [charCount,setCharCount] = useState(0);
  const [sentenceCount,setSentenceCount] = useState(0);
  
  
  return (
    <div className='main_Container'>
        <div className="left">
            <textarea className='text-input' id="myinput" placeholder='Type or paste your text here...' rows={6}  ></textarea>

            <button id='delete' className='button-65'>Delete</button>
        </div>

        <div className="right">
            <div className="header">
                <h1>Results</h1>
            </div>

            <div className="count">
                <div className="chars">
                    <p><strong>Characters : {charCount}</strong></p>
                </div>
                <div className="sentences">
                    <p><strong>Sentences : {sentenceCount}</strong></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WordCounter