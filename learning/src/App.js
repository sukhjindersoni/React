import Home from './text-analyzer-pages/Home'
import React ,{useState} from 'react'
import {Routes ,Route} from "react-router-dom"
import TextAnalyzer from './text-analyzer-pages/TextAnalyzer'
import Nav from './text-analyzer-components/Nav'


function App() {

    const [mode, setMode] = useState("");
    const [modeText, setModeText] = useState("");

    const setTheme = (activeTheme) => {
        if (activeTheme === "dark") {
            setModeText("light");
        }
        else if(activeTheme!=='dark'){
            setModeText("dark")
        }
        setMode(activeTheme);
    };
//This method is then passed to Nav through setMode prop and it takes a argument of color for theme
//Multiple state declarations on single event might cause issues as once clicked the page will 
//rerender but might leave the later states if not declared properly

    return (
        <>
        <Nav title="Learning" mode={mode} modeText={modeText} setMode={setTheme}/>
        <div className={`bg-${mode} min-vh-100`} style={{paddingTop:"3.5rem"}}>
            <Routes>
                <Route path="/" element={<Home mode={mode} modeText={modeText}/>}/>
                <Route path="/text-analyzer" element={<TextAnalyzer mode={mode} modeText={modeText}/>}/>
            </Routes>
        </div>
        </>
        //This div is acting as container for the whole app to change the theme it had to be added because we have yet not covered global states concept
    ) 
}

export default App