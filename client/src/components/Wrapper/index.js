// Import React
// =========================================================
    import React from "react";
// Import Styles
// =========================================================
    import "./style.css";

// Import Styles
// =========================================================
export default function Wrapper(props) {
    
    return <div className="wrapper" {...props} > 
                {props.children}
            </div>
}
