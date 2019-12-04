import React from "react"; 
import { TableCell, Button } from '@material-ui/core';

export function Image(props) {
    return (
        <TableCell>
            <img
                alt={props.title}
                src={props.image}
                style={{ width: 80, height: 80, borderRadius: 16 }}
            />
        </TableCell>
    )
}
export function AppDetails(props){
    return (
        <TableCell>
            <h3>{props.title}</h3> 
        </TableCell>
    )
}

export function Badges(props){
    return (
        <TableCell>
            {props.title}
              {/* <img
                alt={props.title}
                src={props.badgeAlerts}
                style={{ width: 80, height: 80, borderRadius: 16 }}
            /> */}
        </TableCell>
    )
}

// export function Appbadges(props){
//     return (
//         <TableCell>
//             <h3>{props.badges}</h3> 
//         </TableCell>
//     )
// }

export function ViewApp(props){
    return (
        <TableCell>
            <Button
                onClick={props.handleViewApp}
            >
            {props.title}
            </Button> 
            
        </TableCell>
    )
}

export function AddToWatchList(props){
    return (
        <TableCell>
            <Button
                onClick={props.handleSaveBtn}
            >
                Add to watch list
            </Button> 
        </TableCell>
    )
}