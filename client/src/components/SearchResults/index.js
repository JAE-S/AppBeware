import React from "react"; 
import { TableCell, Button, TableHead, TableRow, Tooltip } from '@material-ui/core';
import "../../assets/styling/appStyle.css"

export function Image(props) {
    return (
        <TableCell>
            <img
                alt={props.title}
                src={props.image}
                className="appIcon"
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

export function Shields(props){
    return (
        <Tooltip disableFocusListener title={props.title}>
              <img
                alt={props.title}
                src={props.image}
                style={{ width: 44, height: 44}}
            />
        </Tooltip>
    )
}
export function ShieldsHomepage(props){
    return (
        <Tooltip disableFocusListener title={props.title}>
            <img
                alt={props.title}
                src={props.image}
                style={{ width: 36, height: 36}}
            />
        </Tooltip>
    )
}

export function ViewApp(props){
    return (
        <div align="right" id="container" style={{paddingTop: "10px", paddingRight: "20px"}}>
            <button 
                className="learn-more" 
                size="small"
                onClick={() => props.viewApp(props.appId)}
            >
                <span className="circle">
                    <span className="icon arrow"></span>
                </span>
                <h4>
                    <span className="button-text">View App</span>
                </h4>
            </button>
        </div>
    ) 
}

export function TableHeader(props){
    return (
        <TableHead style={{borderBottom: "2px solid #13BAC7"}}> 
            <TableRow>
                <TableCell> 
                    <h2 align="center">App Icon</h2>
                </TableCell>
                <TableCell> 
                    <h2 align="center">App Name</h2>
                </TableCell>
                <TableCell> 
                    <h2 align="center">Shield Alerts</h2>
                </TableCell>
                <TableCell> 
                    <h2 align="center">View App</h2>
                </TableCell>
            </TableRow> 
        </TableHead> 
    )
}

// export function AddToWatchList(props){
//     return (
//         <TableCell>
//             <Button
//                 onClick={props.handleSaveBtn}
//             >
//                 Add to watch list
//             </Button> 
//         </TableCell>
//     )
// }