import React, { useState } from 'react'

export default function Textform(props) {

    const [text, setText] = useState('')
    const [copyText, setCopyText] = useState('Copy Text')

    let onchange = (event) => {
        setText(event.target.value)
    }
    
    let convertUp = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to uppercase', 'Success')
    }
    
    let convertLow = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to lowercase', 'Success')
    }
    
    let convertClear = () => {
        setText('')
        props.showAlert('Cleared Text', 'Success')
    }
    
    let convertCopy = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value)

        setCopyText('copied')
        props.showAlert('Copied text to clipboard', 'Success')

    }
    
    let RemExSp = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert('Removed extra space', 'Success')
    }
    
    return (
        <>
            <div className="mb-3 my-3" style={props.mode1}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="mybox" rows="8" value={text} onChange={onchange} style={props.mode1}></textarea>
                <button className='btn btn-primary my-4' onClick={convertUp}>Convert To Uppercase</button>
                <button className='btn btn-primary mx-4 my-4' onClick={convertLow}>Convert To Lowercase</button>
                <button className='btn btn-primary mx-1 my-4' onClick={convertClear}>Clear Text</button>
                <button className='btn btn-primary mx-4 my-4' onClick={convertCopy}>{copyText}</button>
                <button className='btn btn-primary mx-1 my-4' onClick={RemExSp}>Remove Extra Spaces</button>
            </div>
            <div className="container" style={props.mode1}>
                <h2>Your Text Summary</h2>
                <p>{text.split(' ').length} words and {text.length} characetrs</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter text for preview'}</p>
            </div>
        </>
    )
}