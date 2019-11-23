// Import React
// =========================================================
import React from 'react';
// Import Material UI Components
// =========================================================
    import { TableCell } from '@material-ui/core/';

    import HoverBadgeInfo from "../HoverBadgeInfo"
    
// Export About the Shields function
// =========================================================
    const icon = {
        width: 80, 
        height: "auto"
    }

export default function HomePageShieldLayout(props) {
    return (

            <TableCell style={icon} > 
              <HoverBadgeInfo 
                badgeInfo={props.info}
                badgeName={<img  
                style={icon} 
                alt={props.altTxt} 
                src={ props.shieldIcon}/>} />
              <h3>{props.title}</h3>
            </TableCell>
    )
}