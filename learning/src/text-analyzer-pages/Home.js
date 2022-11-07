import React from "react";
import Card from "../text-analyzer-components/Card";

export default function Home({mode, modeText}) {
    //This is called props destructuring

    return (
        <>
        <div className="container" style={{height:"4rem"}} /*This div is a ex of bad practice used to position the element */></div>
        <h2 className={`d-flex justify-content-center text-${modeText}`} id="home-head" /*style={{marginTop:"100px"}}*/ >
            React
        </h2>

        <Card
            title="Text Analyzer"
            subTitle="Project 1"
            info="A Smart tool to help analyze , manipulate your text in a go"
            linkTo="text-analyzer"
            mode={mode}
        />
        
        </>
    );
}
