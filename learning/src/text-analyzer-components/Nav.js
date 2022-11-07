    import React from 'react'
    import {Link} from 'react-router-dom';

    export default function Nav({title, mode, modeText, setMode}) { // Destructuring props


    return (
            <nav className={`navbar navbar-expand-lg bg-${mode} position-fixed w-100 `} >
                <div className="container-fluid">
                    <Link className={`navbar-brand text-${modeText}`} to="/" id="abc">{title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>  
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link active text-${modeText}`} aria-current="page" to="/text-analyzer">Text Analyzer</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                        <button className="btn btn-primary mx-2 rounded-circle border border-dark" onClick={()=>{setMode("primary")}} style={{height:"25px" ,width:"20px"}} type="submit"></button>
                        <button className="btn btn-danger mx-2 rounded-circle border border-dark" onClick={()=>{setMode("danger")}} style={{height:"25px" ,width:"20px"}} type="submit"></button>
                        <button className="btn btn-success mx-2 rounded-circle border border-dark" onClick={()=>{setMode("success")}} style={{height:"25px" ,width:"20px"}} type="submit"></button>
                        <button className="btn btn-light mx-2 rounded-circle border border-dark" onClick={()=>{setMode("light")}} style={{height:"25px" ,width:"20px"}} type="submit"></button>
                        <button className="btn btn-dark mx-2 rounded-circle border border-white " onClick={()=>{setMode("dark")}} style={{height:"25px" ,width:"20px"}} type="submit"></button>
                    </div> 
                    </div> 
                </div>
            </nav>
    )
    }
    
