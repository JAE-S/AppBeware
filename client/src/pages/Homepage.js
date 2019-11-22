// Import React 
// =========================================================
    import React from "react";  

// Import Material Ui Components
// =========================================================
    import { Grid, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
// Import Custom Components
// =========================================================
    import SearchAppAnnie from "../components/SearchAppAnnie"
    import Wrapper from "../components/Wrapper"
    import Nav from "../components/Nav"
    import HeaderContainer from "../components/HeaderContainer"
    import CategoryCards from "../components/CategoryCards"
    // import Footer from "../components/Footer"
// Import Media
// =========================================================
    import ABLogo from "../assets/images/AppBeware_icon_shadow.png"
    import CB_icon from "../assets/images/shields/cyberbullying.png";
    import DB_icon from "../assets/images/shields/dangerous_behavior.png";
    import PR_icon from "../assets/images/shields/predator_risk.png";
    import SC_icon from "../assets/images/shields/sexual_content.png";
    import VC_icon from "../assets/images/shields/violent_content.png";


function Homepage() {

    return (
        <>
        <Nav/>
        <HeaderContainer> 
            <Wrapper> 
            <Grid container spacing={8}>
                 <Grid item xs={12} sm={3}>
                 <div>
                    <img alt="AppBeware herologo" src={ABLogo} style={{ width: "110%"}}/>
                </div>
                </Grid>
                
                <Grid item xs={12} sm={9}>
                   <Table> 
                       <TableBody> 
                           <TableRow> 
                               <TableCell style={{maxWidth: "120px"}}>  
                                    <img style={{maxWidth: "120px"}}alt="Predator Risk Icon" src={CB_icon}/>
                                    <div> 
                                        <h4>Predator Risk</h4>
                                    </div> 
                                </TableCell>

                                <TableCell align="center" style={{width: "100px"}}>  
                                    <img style={{maxWidth: "120px"}}alt="Dangerous Behavior Icon" src={DB_icon}/>
                                    <div> 
                                        <h4>Dangerous Behavior</h4>
                                    </div> 
                                </TableCell>

                                <TableCell align="center"  style={{width: "100px"}}>  
                                    <img style={{maxWidth: "120px"}}alt="Violent Content Icon" src={VC_icon}/>
                                    <div> 
                                        <h4>Violent Content</h4>
                                    </div> 
                                </TableCell>

                                <TableCell align="center" style={{width: "100px"}}>  
                                    <img style={{maxWidth: "120px"}}alt="Cyberbullying Icon" src={CB_icon}/>
                                    <div> 
                                        <h4>Cyberbullying</h4>
                                    </div> 
                                </TableCell>

                                <TableCell align="center" style={{width: "100px"}}>  
                                    <img style={{maxWidth: "120px"}}alt="Sexual ContentIcon" src={SC_icon}/>
                                    <div> 
                                        <h4>Sexual Content</h4>
                                    </div> 
                                </TableCell>

                               </TableRow>
                              
                        </TableBody> 
                    </Table>
                 
                 </Grid>
            </Grid>
            
            </Wrapper>
        </HeaderContainer>
        <Wrapper>
            <SearchAppAnnie />
            <Grid container spacing={2}>
                <CategoryCards
                    title="Social Networking"
                />
                    <CategoryCards
                    title="Photos &amp; Videos"
                />
                <CategoryCards
                    title="Kids"
                />
                <CategoryCards
                    title="Entertainment"
                />
                <CategoryCards
                    title="Games"
                />
                <CategoryCards
                    title="View All Apps"
                />
            </Grid>
   
        </Wrapper>
        {/* <Footer/> */}
        </>
    )
}

export default Homepage; 