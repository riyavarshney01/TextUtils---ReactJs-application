import React,{useState} from 'react'

export default function TextForm(props) {
     const handleUpClick = ()=>{
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to uppercase!","success" );
     }
     const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase!","success" );

     }
     const handleClearClick =() =>{
      let newText = '';
      setText(newText);
      props.showAlert("Text cleared","success");
     }

     const handleOnChange = (event)=>{
      setText(event.target.value)
     }
    
     const handleCopy =()=> {
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to clipboard!","success" );

     }
     const handleExtraSpace =() =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Space Remove","success" );

     }
     const speak =()=>{
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
     }
    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the state
    // setText("new text here"); // correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
          <h1 className='my-4'>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my=1" onClick={handleUpClick}>Convert to uppercase</button>
          <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
          <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
          <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove extra Space</button>
          <button disabled={text.length===0} type="submit" className="btn btn-success mx-2 my-2" onClick={speak}>Speak</button>



     </div>
     <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split("").filter((element)=> {return element.length!==0}).length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to Preview!"}</p>
     </div>
     </>
  )
}
