import React,{useState} from "react"

export default function TextArea(props)
{
    


    const[text,setText]=useState("")
    const handleUpClick=()=>{
        let up=text.toUpperCase()
        setText(up);
    }
    const handleLoClick=()=>{
        let up=text.toLowerCase()
        setText(up);
    }

    const handleOnChange=(e)=>{
        setText(e.target.value);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    return (

   <div className="container"  style={{color:props.mode==="light"?"black":"white"}}>
   <h1>{props.heading}</h1>
   <div className="mb-3">
        <textarea className="form-control"  id="my-box" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="light"?"white":"#100e31" , color: props.mode==="light"?"black":"white"}}></textarea>
   </div>
   <button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Upper-Case</button>
   <button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lower-Case</button>
   <button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={speak} >Speak</button>
   <button disabled={text.length===0} type="button" className="btn btn-primary mx-2"
  onClick={() =>   navigator.clipboard.writeText(text)}> Copy Text </button>

    <div className="container my-3">
    <p>Char : {text.length}</p>
    
    <p>Words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
    <h1>Preview</h1>
    <p>{text===""?"Write somthing above to get it's preview":text}</p>
   </div>
   </div>

    )
}