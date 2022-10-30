import React ,{useState} from 'react'
import Alert from '../components/Alert'
import '../css/TextAnalyzer.css'

function TextAnalyzer() {

  const style={height : '200px'};
  const [text , setText]= useState("");
  const [mode , setMode] = useState('light');
  const [modeText , setModeText] = useState('dark');
  const [alert, setAlert] = useState(null); 

  

  const showAlert = (type ,message)=>{
    setAlert({
      type: type,
      message : message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const handleChange = (event)=>{
    setText(event.target.value)
  }

  const toUppercase =()=>{
    let newText = text.toUpperCase(text);
    setText(newText);
    showAlert("success" , "Converted to Upper case")
  }

  const toLowercase =()=>{
    let newText = text.toLowerCase(text);
    setText(newText);
    showAlert("success" , "Converted to Lower case")

  }

    const copyText =(copy)=>{
      navigator.clipboard.writeText(copy);
      // showAlert("success" , "Copied to clipboard")

    }

  const clearText =()=>{
    setText("");  
    showAlert("success" , "Text Cleared");  
  }

  const countWords=()=>{
    return text.trim().length ? text.trim().split(" ").length : 0;
  }

  const changeMode =()=>{
    if (mode==='light'){
        setMode('dark');
        setModeText('light');
        document.body.style.backgroundColor = 'black';
        document.getElementById('floatingTextarea').style.backgroundColor = 'black';
        document.getElementById('floatingTextarea').style.color = 'white';
        showAlert("success" , "Dark mode enabled");
    }
    else{
        setMode('light');
        setModeText('dark');
        document.body.style.backgroundColor = 'white';
        document.getElementById('floatingTextarea').style.backgroundColor = 'white';
        document.getElementById('floatingTextarea').style.color = 'black';
        showAlert("success" , "Light mode enabled");


    }
    }

    const modePurple = ()=>{
      document.body.style.backgroundColor = '#400080';
      document.getElementById('floatingTextarea').style.backgroundColor = '#400080';
      document.getElementById('floatingTextarea').style.color = 'white';
    }
    const modeBlue = ()=>{
      document.body.style.backgroundColor = '#15133C';
      document.getElementById('floatingTextarea').style.backgroundColor = '#15133C';
      document.getElementById('floatingTextarea').style.color = 'white';    
    }
    const modeBrown = ()=>{
      document.body.style.backgroundColor = '#594545';
      document.getElementById('floatingTextarea').style.backgroundColor = '#594545';
      document.getElementById('floatingTextarea').style.color = 'white';   
    }


  return (
    <>  
    
    <Alert alert={alert}/>
    <div className="form-check form-switch m-3 ">
      <input className="form-check-input" onClick={changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      <label className={`form-check-label text-${modeText}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>  
    <div className="btn-group custom-center" role="group" aria-label="Basic mixed styles example">
        <button type="button" className="btn btn-primary" onClick={modePurple}>Purple</button>
        <button type="button" className="btn btn-primary"  onClick={modeBlue}>Blue</button>
        <button type="button" className="btn btn-primary"  onClick={modeBrown }>Brown</button>
    </div>

    <h2 className={`mt-5 text-center text-${modeText}`}>Enter the text to analyze below</h2>
    <div className="mt-4 col-8 m-auto">
      <textarea className="form-control"  onChange = {handleChange} value={text}  id="floatingTextarea" style={style} />
    </div>

    <div className="text-center m-3">
        <button type="button" className="btn btn-primary m-2" onClick={toUppercase}>To Uppercase</button>
        <button type="button" className="btn btn-primary m-2" onClick={toLowercase}>To Lowercase</button>
        <button type="button" className="btn btn-primary m-2" onClick={copyText(text)}>Copy Text</button>
        <button type="button" className="btn btn-primary m-2" onClick={clearText}>Clear Text</button>
    </div>

    <div className={`text-center m-3 text-${modeText}`}>
      <h3>Your Text Summary</h3>
      <p>{countWords()} words {text.length} characters</p>
    </div>

    </>
  );
}

export default TextAnalyzer;
