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
    // import HoverBadgeInfo from "../components/HoverBadgeInfo"
    import ShieldLayout from "../components/HomepageShieldLayout"
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
                           <ShieldLayout 
                                shieldIcon={ CB_icon }
                                altTxt="Cyberbullying icon"
                                title="Cyberbulling "
                                info="Don't cyberbully me!"
                           />
                            <ShieldLayout 
                                shieldIcon={ PR_icon }
                                altTxt="Predator Risk icon"
                                title="Predator Risk"
                                info="Why are you a predator Risk?"
                           />
                             <ShieldLayout 
                                shieldIcon={ DB_icon }
                                altTxt="Dangerous Behavior icon"
                                title="Dangerous Behavior"
                                info="Take the pod challenge, it will turn your mouth blue!"
                           />
                              <ShieldLayout 
                                shieldIcon={ VC_icon }
                                altTxt="Violent Content icon"
                                title="Violent Content"
                                info="This is violent content."
                           />
                             <ShieldLayout 
                                shieldIcon={ SC_icon }
                                altTxt="Sexual Content icon"
                                title="Sexual Content"
                                info="Sexual content?"
                           />
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
                    catId={1}
                />
                    <CategoryCards
                    title="Photos &amp; Videos"
                    catId={2}
                />
                <CategoryCards
                    title="Lifestyle"
                    catId={3}
                />
                <CategoryCards
                    title="Entertainment"
                    catId={4}
                />
                <CategoryCards
                    title="Games"
                    catId={5}
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