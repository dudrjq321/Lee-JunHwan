import React  from "react";

// function Hello(props) {
function Hello({name, color, myCondition}) {
    
    let style = {
        background: color,
        color: '#fff',
        width: '100px'
    }

    return (
        <>
            {myCondition === true ? <div className="hello" style={style} >{name}</div> : null }
        </>
    )
}

export default Hello;