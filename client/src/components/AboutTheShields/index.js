// Import React
// =========================================================
    import React from 'react';
// Import Material UI Components
// =========================================================
    import { Table, TableBody, TableRow, TableHead, TableCell } from '@material-ui/core/';
// Import Media
// =========================================================
    import InfoTable from "./InfoTable"
// Import Media
// =========================================================
    import CB_icon from "../../assets/images/shields/cyberbullying.png";
    import DB_icon from "../../assets/images/shields/dangerous_behavior.png";
    import PR_icon from "../../assets/images/shields/predator_risk.png";
    import SC_icon from "../../assets/images/shields/sexual_content.png";
    import VC_icon from "../../assets/images/shields/violent_content.png";

// Export About the Shields function
// =========================================================


export default function AboutTheShields(){
 
    
    return (
        <Table>
            {/* <h1>AppBeware Shields</h1> */}
            <TableBody> 
                <InfoTable
                    shieldIcon={ CB_icon }
                    altTxt="Cyberbullying icon"
                    title="Cyberbulling "
                    description="This is a placeholder for information about the Cyberbulling shield"
                /> 
                 <InfoTable
                    shieldIcon={ DB_icon }
                    altTxt="Dangerous Behavior icon"
                    title="Dangerous Behavior"
                    description="This is a placeholder for information about the Dangerous Behavior shield"
                /> 
                 <InfoTable
                    shieldIcon={ PR_icon }
                    altTxt="Predator Risk icon"
                    title="Predator Risk"
                    description="This is a placeholder for information about the Predator Risk shield"
                /> 
                 <InfoTable
                    shieldIcon={ SC_icon }
                    altTxt="Sexual Content icon"
                    title="Sexual Content"
                    description="This is a placeholder for information about the Sexual Content shield"
                /> 
                 <InfoTable
                    shieldIcon={ VC_icon }
                    altTxt="Violent Content icon"
                    title="Violent Content"
                    description="This is a placeholder for information about the Violent Content shield"
                /> 
            </TableBody>
        </Table>
    )
}
