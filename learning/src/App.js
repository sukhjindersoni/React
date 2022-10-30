import TextAnalyzer from './pages/TextAnalyzer'
import Nav from './components/Nav'
import Home from './pages/Home'
import React ,{useState} from 'react'
import {Routes ,Route} from "react-router-dom"


function App() {

    const [mode , setMode] = useState('light');
    const [modeText , setModeText] = useState('dark');

    return (
        <>
        <Nav title="Learning" mode={mode} modeText={modeText}/> 
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/analyzer" element={<TextAnalyzer />}/>
        </Routes>   
        </>
    ) 
}

export default App