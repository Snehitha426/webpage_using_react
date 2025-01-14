import React,{useState} from 'react' //hooks

export default function TextForm(props) {
    const handleUpClick =()=>{
        //console.log("Upper case was clicked"+text);
        let newText=text.toUpperCase(text)
        setText(newText)
    }
    const handleOnChange =(event)=>
    {
        //console.log("Onchange");
        setText(event.target.value);
    }
    const [text,setText] =useState('Enter text here');  
   //text="new text"; //wrong way to change the state
   //setText("new text"); //correct way to change the state
    return (
        <>
    <div className="container">
        <h1>{props.head} </h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
    </div>
    <div className="container">
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
