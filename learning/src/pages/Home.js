import React from 'react'
import Card from '../components/Card';

export default function Home() {
    return (
        <>
        <h2 className="d-flex justify-content-center mt-5">From 0 to Hero</h2>
        <Card title="Text Analyzer" subtitle="Project 1" info="A Smart tool to help analyze , manipulate your text in a go" linkTo="analyzer"/>
        </>
    )
}
