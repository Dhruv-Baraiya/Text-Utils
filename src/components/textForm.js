import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUPClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLOClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleAltClick = () => {
        let result = text;
        let newText = '';
        for(let i = 0; i < text.length; i++){
            if ( i % 2 === 0){
                newText += result[i].toUpperCase();
            }else{
                newText += result[i].toLowerCase();
            }
        }
        setText(newText);
        props.showAlert("Converted to Alternativecase","success");
    }
    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared","success");
    }
    const handleONchange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2 >{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode === 'light'?'white':'grey', color:props.mode === 'dark'?'white':'black'}} value={text} onChange={handleONchange} id="text" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" disabled={text.length===0}  onClick={handleUPClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" disabled={text.length===0} onClick={handleLOClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" disabled={text.length===0} onClick={handleAltClick}>Convert to Alternativecase</button>
            <button className="btn btn-primary mx-1" disabled={text.length===0} onClick={handleClear}>Clear</button>
        </div>
        <div className="container my-2" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Summary</h2>
            <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
            <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length===0?"Enter something to preview":text}</p>
        </div>
        </>
    )
}
