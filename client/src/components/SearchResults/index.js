import React from "react"; 
import { TableCell, Button } from '@material-ui/core';

export function Image(props) {
    return (
        <TableCell>
            <img
                alt={props.title}
                src={props.image}
            />
        </TableCell>
    )
}

export function AppDetails(props){
    return (
        <TableCell>
            Facebook
            <h3>{props.title}</h3> 
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
                onClick={props.handleSaveBtn}
            >
                view app 
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