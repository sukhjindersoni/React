import TextAnalyzer from './pages/TextAnalyzer'
import Nav from './components/Nav'
import Home from './pages/Home'
import React ,{useState} from 'react'
import {Routes ,Route} from "react-router-dom"
import Alert from './components/Alert';


function App() {

    const [mode , setMode] = useState('light');
    const [modeText , setModeText] = useState('dark');

    const changeMode =()=>{
        if (mode==='light'){
            setMode('dark');
            setModeText('light');
            document.body.style.backgroundColor = 'black';
            document.getElementById('floatingTextarea').style.backgroundColor = 'black';
            document.getElementById('floatingTextarea').style.color = 'white';
            // showAlert("success" , "Dark mode enabled");
        }
        else{
            setMode('light');
            setModeText('dark');
            document.body.style.backgroundColor = 'white';
            document.getElementById('floatingTextarea').style.backgroundColor = 'white';
            document.getElementById('floatingTextarea').style.color = 'black';
            // showAlert("success" , "Light mode enabled");
    
    
        }
        }

    return (
        <>
        <Nav title="Learning" mode={mode} modeText={modeText}/>
        <div className="form-check form-switch m-3 ">
            <input className="form-check-input" onClick={changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${modeText}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>  
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/analyzer" element={<TextAnalyzer />}/>
        </Routes>   
        </>
    ) 
}

export default App;