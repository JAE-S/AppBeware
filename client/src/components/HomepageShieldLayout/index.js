// Import React
// =========================================================
  import React from 'react';
// Import Material UI Components
// =========================================================
    import { TableCell } from '@material-ui/core/';
// Import Custom Components
// =========================================================
    import HoverShieldInfo from "../HoverShieldInfo"
    
// Export HomePageShieldLayout function
// =========================================================
    const icon = {
        width: 80, 
        height: "auto"
    }

    export default function HomePageShieldLayout(props) {
        return (

                <TableCell style={icon} > 
                  <HoverShieldInfo
                    badgeInfo={props.info}
                    badgeName={
                      <img  
                        style={icon} 
                        alt={props.altTxt} 
                        src={props.shieldIcon}
                      />} 
                    />
                  <h3>{props.title}</h3>
                </TableCell>
        )
    } 