import React  from "react";

// function Hello(props) {
function Hello({name, color}) {
    
    let style = {
        // background: props.color,
        background: color,
        color: '#fff'
    }

    return (
        <div 
            className="hello"
            style={style} 
            onClick={ function() { alert("헬로 눌림") } }
        >
            {/* Hello {props.name} */}
            Hello {name}

        </div>
    )
}

export default Hello;