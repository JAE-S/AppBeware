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
                    description="Harassment in the comments and parody videos being created to humiliate and tease some users, particularly users with disabilities. Bullying people from different religious or ethnic backgrounds, blackmail, extortion, public humiliation or harassment."
                /> 
                 <InfoTable
                    shieldIcon={ DB_icon }
                    altTxt="Dangerous Behavior icon"
                    title="Dangerous Behavior"
                    description="Apps that promote self harm, suicide, eating disorders, choking games, dangerous challenges or other acts where serious injury or death may result."
                /> 
                 <InfoTable
                    shieldIcon={ PR_icon }
                    altTxt="Predator Risk icon"
                    title="Predator Risk"
                    description="Apps that expose children to predators through solicitation, sharing personal information, encouragement to meet in person, intent to engage in sexual activity, stalking or harm. "
                /> 
                 <InfoTable
                    shieldIcon={ SC_icon }
                    altTxt="Sexual Content icon"
                    title="Sexual Content"
                    description="Apps that contain or promote sexual content, such as nudity, pornography, or any content or services intended to be sexually gratifying."
                /> 
                 <InfoTable
                    shieldIcon={ VC_icon }
                    altTxt="Violent Content icon"
                    title="Violent Content"
                    description="Apps that depict or facilitate gratuitous violence or other dangerous activities against people or animals.  These include threats, gun violence, terroism, use, sale or depictions of explosives or firearms."
                /> 
            </TableBody>
        </Table>
    )
}
