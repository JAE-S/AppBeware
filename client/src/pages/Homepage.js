import React from "react"; 

import SearchAppAnnie from "../components/SearchAppAnnie"
import Wrapper from "../components/Wrapper"
import Nav from "../components/Nav"
import HeaderContainer from "../components/HeaderContainer"
import ABLogo from "../assets/images/AppBeware_icon_shadow.png"
import { Grid, Table, TableBody, TableCell, TableRow } from '@material-ui/core';

// import Footer from "../components/Footer"

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

                               <TableCell style={{width: "100px"}}>  
                                    <div  style={{ backgroundColor: "#FC4A1A", height: "100px", width: "100px", borderRadius: "50%", border: "2px solid white"}}> 
                                    <h1 align="center"  style={{ color: "white", paddingTop: "10px"}} >PR</h1>
                                    </div>
                                    <div> 
                                     <h4>Predator Risk</h4>
                                    </div> 
                                </TableCell>

                                <TableCell align="center" style={{width: "100px"}}>  
                                    <div  style={{  backgroundColor: "#FC4A1A", height: "100px", width: "100px", borderRadius: "50%", border: "2px solid white"}}> 
                                    <h1 align="center"  style={{ color: "white", paddingTop: "10px"}} >DB</h1>
                                    </div>
                                    <div> 
                                    <h4>Dangerous Behavior</h4>
                                    </div> 
                                </TableCell>

                                <TableCell align="center"  style={{width: "100px"}}>  
                                    <div  style={{  backgroundColor: "#FC4A1A", height: "100px", width: "100px", borderRadius: "50%", border: "2px solid white"}}> 
                                    <h1 align="center"  style={{ color: "white", paddingTop: "10px"}} >V</h1>
                                    </div>
                                    <div> 
                                    <h4>Violence</h4>
                                    </div> 
                                </TableCell>

                                <TableCell align="center" style={{width: "100px"}}>  
                                    <div  style={{  backgroundColor: "#FC4A1A", height: "100px", width: "100px", borderRadius: "50%", border: "2px solid white"}}> 
                                    <h1 align="center"  style={{ color: "white", paddingTop: "10px"}} >CB</h1>
                                    </div>
                                    <div> 
                                    <h4>Cyberbullying</h4>
                                    </div> 
                                </TableCell>

                                <TableCell align="center" style={{width: "100px"}}>  
                                    <div  style={{  backgroundColor: "#FC4A1A", height: "100px", width: "100px", borderRadius: "50%", border: "2px solid white"}}> 
                                    <h1 align="center"  style={{ color: "white", paddingTop: "10px"}} >SC</h1>
                                    </div>
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
   
        </Wrapper>
        {/* <Footer/> */}
        </>
    )
}

export default Homepage; 