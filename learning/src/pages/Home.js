import React from "react";
import Card from "../components/Card";

export default function Home({ mode, modeText }) {
    //This is called props destructuring

    return (
        <div className="page-center">
            <h2 className={`d-flex justify-content-center text-${modeText}`} id="home-head" /*style={{marginTop:"100px"}}*/ >
                React
            </h2>

            <div className="d-flex flex=column flex-wrap">
                <Card
                    title="Text Analyzer"
                    subTitle="Project 1"
                    info="A Smart tool to help analyze , manipulate your text in a go"
                    linkTo="text-analyzer"
                    mode={mode}
                />

                <Card
                    title="News Web"
                    subTitle="Project 2"
                    info="A short and quick brief of news all around the world"
                    linkTo="newsweb"
                    mode={mode}
                />

            </div>

        </div>
    );
}
