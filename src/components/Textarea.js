import React, {useState} from 'react'

export default function Textarea(props) {

    const handleUpperCase = () =>{

        let newText = text.toUpperCase();

        setText(newText)
    }

    const handleLowerCase = () =>{

        let newText = text.toLowerCase();

        setText(newText)
    }

    const handleCapitalizeCase = () =>{

        let newText2 = text.slice(1);

        let newText = text.charAt(0).toUpperCase() + newText2.toLowerCase();

        setText(newText)
    }

    const handleOnChange = (event) =>{

        setText(event.target.value)
    }

    const [text,setText] = useState("");
  return (
    <>
        <div className="container">

            <h1 className={`my-3 text-${props.mode === 'light'?'dark':'light'}`} >Enter Your Text</h1>

            <textarea id="form22" placeholder='Enter Your Text Here' value={text} onChange={handleOnChange} className="md-textarea form-control" rows="13"></textarea>

            <button className="btn btn-primary my-2" onClick={handleUpperCase}>Convert To Uppercase</button>
        
            <button className="btn btn-primary mx-2" onClick={handleCapitalizeCase}>Convert To Capitalize</button>

            <button className="btn btn-primary" onClick={handleLowerCase}>Convert To Lowercase</button>
        
        </div>
    </>
  )
}
