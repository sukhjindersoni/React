import React from 'react'

export default function Alert(props) {
    const capitalize =(word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
        {props.alert && //checks if the value is null or not and operates on and operator if null the other condition wont work
        <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
            <div>
                {capitalize(props.alert.type)} : {props.alert.message}
            </div>
        </div>}
        </div>
        // Duw to these alerts we have CLS in the page Cumulative layout shift which should not be there so in order 
        //to get rid of it we give the alerts a fixed height so even when its not there it occupies its space
    )
}
