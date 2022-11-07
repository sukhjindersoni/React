import React from 'react'
import {Link} from 'react-router-dom'

export default function Card(props) {
    return (
        <div className="card m-5" id="card" style={{width: "18rem", minHeight: "12rem"}}>
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title" id="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted" id="card-subtitle">{props.subTitle}</h6>
                </div>
                <p className="card-text" id ="card-text">{props.info}</p>
                <Link to={`/${props.linkTo}`} className="btn btn-secondary m-2 border border-all card-link">Check Out</Link>
            </div>
        </div>
    )
}
