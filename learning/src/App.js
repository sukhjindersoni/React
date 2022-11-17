import Home from './pages/Home'
import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import TextAnalyzer from './pages/TextAnalyzer'
import Nav from './components/Nav'
import News from './components/News'


function App() {

    const [mode, setMode] = useState("");
    const [modeText, setModeText] = useState("");

    const setTheme = (activeTheme) => {
        if (activeTheme === "dark") {
            setModeText("light");
        }
        else if (activeTheme !== 'dark') {
            setModeText("dark")
        }
        setMode(activeTheme);
    };
    //This method is then passed to Nav through setMode prop and it takes a argument of color for theme
    //Multiple state declarations on single event might cause issues as once clicked the page will 
    //rerender but might leave the later states if not declared properly

    return (
        <div className={'min-vh-100 bg-' + mode}>
            <Nav title="Learning" mode={mode} modeText={modeText} setMode={setTheme} />
            <div style={{ paddingTop: "100px" }}>
                <Routes>
                    <Route exact path="/" element={<Home mode={mode} modeText={modeText} />} />
                    <Route exact path="/text-analyzer" element={<TextAnalyzer mode={mode} modeText={modeText} />} />

                    <Route exact path="/NewsWeb" element={<News pageSize="6" category="general"/>} />
                    <Route exact path="/NewsWeb/business" element={<News pageSize="6" category="business"/>} />
                    <Route exact path="/NewsWeb/entertainment" element={<News pageSize="6" category="entertainment"/>} />
                    <Route exact path="/NewsWeb/health" element={<News pageSize="6" category="health"/>} />
                    <Route exact path="/NewsWeb/science" element={<News pageSize="6" category="science"/>} />
                    <Route exact path="/NewsWeb/sports" element={<News pageSize="6" category="sports"/>} />
                    <Route exact path="/NewsWeb/technology" element={<News pageSize="6" category="technology"/>} />
                </Routes>
            </div>
        </div>
        //This div is acting as container for the whole app to change the theme it had to be added because we have yet not covered global states concept
    )
}

export default App