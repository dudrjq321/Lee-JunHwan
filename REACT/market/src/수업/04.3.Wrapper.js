import React  from "react";

// function Wrapper(props) {
function Wrapper({children}) {
    let c_name = "wrapper";
    let style = {
        background: 'pink',
        color: 'red'
    }

    return (
        <div 
            className={c_name} 
            style={style} 
            onClick={ function() { alert("wrapper 눌림") } }
        >
            wrapper
            {/* {props.children} */}
            {children}

        </div>
    )
}

export default Wrapper;