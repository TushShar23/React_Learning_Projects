import { useState,useEffect } from 'react'
import "./WordCounter.css"


const WordCounter = () => {
  const [textArea,setTextArea] = useState("");
  const [charCount,setCharCount] = useState(0);
  const [sentenceCount,setSentenceCount] = useState(0);
  
  console.log(textArea)

  const deleteContent = ()=>{
    setTextArea("")
  }

  useEffect(()=>{
    const charArr = textArea.trim().split("")
    setCharCount(charArr.length)
    let senCount = textArea.replace(/\b([A-Z]\.)+/g,"")
                   .split(/[.!?]+/).filter((s)=>(s.trim().length > 0))
    // its a regex(REGULAR EXPRESSION,which denotes that replace all the patterns like U.S.A with "" + = repeat ,g = globally, and then split the whole string into an array using [!.?]mtlb jaha ye dikhe waha pe split kardo and then filter kardo woh strings jinki length > 0 hai )
    
    setSentenceCount(senCount.length)

    },[textArea])




  return (


    <div className='main_Container'>
        <div className="left">
            <textarea className='text-input' id="myinput" placeholder='Type or paste your text here...' rows={6} value={textArea} onChange={(e)=>{setTextArea(e.target.value)}}/>

            <button id='delete' onClick={deleteContent}>Delete</button>
            
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