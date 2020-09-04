import React from "react";
const Values = ({data}) => {
    
    return (
        data.map((t,i) => {
            return (<p key={i}>{t}</p>)
        })
    )
}

export default Values;