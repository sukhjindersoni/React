    import React from 'react'
    import {Link} from 'react-router-dom';

    export default function Nav(props) {

    return (
            <nav className={`navbar navbar-expand-lg bg-${props.mode}`} >
                <div className="container-fluid">
                    <Link className={`navbar-brand text-${props.modeText}`} to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <Link className={`nav-link text-${props.modeText}`} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link active text-${props.modeText}`} aria-current="page" to="/analyzer">Text Analyzer</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
    }
    
