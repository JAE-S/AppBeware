// Import React 
// =========================================================
    import React from "react";  

// Import Material Ui Components
// =========================================================
    import { Grid, Table, TableBody, TableRow } from '@material-ui/core';
// Import Custom Components
// =========================================================
    import SearchAppAnnie from "../components/SearchAppAnnie"
    import Wrapper from "../components/Wrapper"
    import Nav from "../components/Nav"
    import HeaderContainer from "../components/HeaderContainer"
    import HomepageTabNav from "../components/HomepageTabNav"
    // import CategoryCards from "../components/CategoryCards"
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
                                shieldIcon={ PR_icon }
                                altTxt="Predator Risk icon"
                                title="Predator Risk"
                                info="Apps that expose children to predators through solicitation, sharing personal information, encouragement to meet in person, intent to engage in sexual activity, stalking or harm."
                           />
                             <ShieldLayout 
                                shieldIcon={ DB_icon }
                                altTxt="Dangerous Behavior icon"
                                title="Dangerous Behavior"
                                info="Apps that promote self harm, suicide, eating disorders, choking games, dangerous challenges or other acts where serious injury or death may result."
                           />
                            <ShieldLayout 
                                shieldIcon={ CB_icon }
                                altTxt="Cyberbullying icon"
                                title="Cyberbulling "
                                info="Harassment in the comments and parody videos being created to humiliate and tease some users, particularly users with disabilities. Bullying people from different religious or ethnic backgrounds, blackmail, extortion, public humiliation or harassment."
                           />
                            <ShieldLayout 
                                shieldIcon={ VC_icon }
                                altTxt="Violent Content icon"
                                title="Violent Content"
                                info="Apps that depict or facilitate gratuitous violence or other dangerous activities against people or animals.  These include threats, gun violence, terroism, use, sale or depictions of explosives or firearms."
                           />
                             <ShieldLayout 
                                shieldIcon={ SC_icon }
                                altTxt="Sexual Content icon"
                                title="Sexual Content"
                                info="Apps that contain or promote sexual content, such as nudity, pornography, or any content or services intended to be sexually gratifying."
                           />
                               </TableRow>
                              
                        </TableBody> 
                    </Table>
                 
                 </Grid>
            </Grid>
            
            </Wrapper>
        </HeaderContainer>
   
            <SearchAppAnnie />
        <Wrapper>
            <HomepageTabNav/>
   
        </Wrapper>
        {/* <Footer/> */}
        </>
    )
}

export default Homepage; 