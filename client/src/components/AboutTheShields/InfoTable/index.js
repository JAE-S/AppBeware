// Import React
// =========================================================
    import React from 'react';
// Import Material UI Components
// =========================================================
    import { TableRow, TableCell } from '@material-ui/core/';
// Export About the Shields function
// =========================================================
    const icon = { 
        width: "100%",
        height: "auto"
    }

export default function infoTable(props) {
    return (
        <TableRow> 

            <TableCell > 
              <img  style={icon} alt={props.altTxt} src={ props.shieldIcon}/>
            </TableCell>

            <TableCell> 
               <h3>{props.title}</h3>
               <p>{props.description}</p> 
            </TableCell>

        </TableRow>
    )
}