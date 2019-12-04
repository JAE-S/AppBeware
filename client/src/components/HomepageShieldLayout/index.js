// Import React
// =========================================================
  import React from 'react';
// Import Custom Components
// =========================================================
    import HoverShieldInfo from "../HoverShieldInfo"  

// Export HomePageShieldLayout function
// =========================================================
    const icon = {
        maxWidth: 100, 
        width: "100%",
        height: "auto",
        padding: "20px 4px 0px 4px"
    }

    const addDots = "../";

    export default function HomePageShieldLayout(props) {
        return (
            <>
              <div style={icon} > 
                <HoverShieldInfo
                  badgeInfo={props.info}
                  badgeName={
                    <img  
                      style={icon} 
                      alt={props.altText} 
                      src={ props.shieldIcon }
                    />} 
                  />
                <h4 align="center">{props.title}</h4>
              </div>
            </>
        )
    } 