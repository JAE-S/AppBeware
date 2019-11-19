import React from "react";
import "./style.css";


function Wrapper(props) {
    
    const wrapper = {
        padding: 20
    }

    return <main style={ wrapper } {...props} > 
    {props.children}
    </main>
}

export default Wrapper; 