// Import React 
// =========================================================
    import React from "react";
// Import Styling
// =========================================================
    import "./style.css";

// Export HeaderContainer
// =========================================================
    function HeaderContainer(props) {
        
        return <div className="headerContainer" {...props} > 

                 {props.children}
        
                </div>
    }

    export default HeaderContainer; 