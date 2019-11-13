import React from "react";
import "./style.css";

function MinionPhoto(props) {
    return (
    
        <img 
            className="minionProfile" 
            alt={props.name} 
            src={props.image}
            onClick={props.handleBtnClick}
            // onClick= {() => props.suffleMinions(props.id)}
        />
    
    )
}

export default MinionPhoto; 