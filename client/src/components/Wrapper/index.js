import React from "react";
import "./style.css";


function Wrapper(props) {
    

    return <main className="wrapper" {...props} > 
    {props.children}
    </main>
}

export default Wrapper; 