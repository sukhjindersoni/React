import React from 'react'

export default function Alert(props) {
    const textCapital =() =>{
        
    }
    return (
        props.alert && 
        <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
            <div>
                {props.alert.type} : {props.alert.message}
            </div>
        </div>
    )
}
