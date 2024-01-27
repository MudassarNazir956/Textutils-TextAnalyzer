import React, { useState } from 'react'

export default function Textform(props) {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log(handleOnChange);
    
  }

  const handleUPclick = () => {
    let Uptext = text.toUpperCase();
    setText(Uptext);
    console.log("Button clicked");
    props.showAlert(' Converted to UpperCase' , 'success')
  }

  const handleLWclick = () => {
    let Lwtext = text.toLowerCase();
    setText(Lwtext);
    console.log("Button clicked");
    props.showAlert(' Converted to LowerCase' , 'success')
  }

  const handleCLclick = () => {
    let CLtext = "";
    setText(CLtext);
    console.log("Button clicked");
    props.showAlert(' Text Cleared' , 'danger')
  }

  const DownloadTXTfile = () => {
    const element = document.createElement('a');
    const file = new Blob([text], {
      type: 'text/plain'
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
    props.showAlert(' File Downloaded' , 'success')
  }

  const handle1stWclick = () => {
    let newText = text.toLowerCase().split(' ');
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].substring(1);
    }
    setText(newText.join(' '));
    props.showAlert(' 1st letter Capitalized' , 'success')
  }

  const handlecopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(' Copied Successfully' , 'success')
  }

  const removeExspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert(' Extra Spaces Removed' , 'success')
  }

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white':'black'}} >
      <h2 className='mb-2'>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#13466e':'white' , color: props.mode==='dark'? 'white':'black'}}  id="myBox" rows="6"></textarea>
        <button disabled={text.length===0} className="btn btn-primary m-1 my-1" onClick={handleUPclick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-secondary m-1 my-1" onClick={handleLWclick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-success m-1 my-1" onClick={handle1stWclick}>1st Letter Capatalize</button>
        <button disabled={text.length===0} className="btn btn-info m-1 my-1" onClick={handlecopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-dark m-1 my-1" onClick={removeExspace}>Remove ExtraSpaces</button>
        <button disabled={text.length===0} className="btn btn-warning m-1 my-1" onClick={handleCLclick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-danger m-1 my-1" onClick={DownloadTXTfile}>Download File</button>
      </div>
      <div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
        <h2>{props.summary}</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words & {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}  Minutes requires to read this file.</p>
        <h2>{props.preview}</h2>
        <p>{text.length>0?text:'Nothing to Preview'}</p>
      </div>
      </div>
    </>
  )
}
  // Ternary Operator
  // props.mode=== light ?  'dark' : 'light';
  // agr props.mode light hy toh dark krdo / agr light ni ha to light krdo
