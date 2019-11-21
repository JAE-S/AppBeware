import React from "react";
import "./style.css";


function HeaderContainer(props) {
    

    return <div className="headerContainer" {...props} > 

        {props.children}
    
    </div>
}

export default HeaderContainer; 