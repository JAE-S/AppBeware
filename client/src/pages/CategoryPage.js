import React from "react"; 
import Wrapper from "../components/Wrapper"
import Nav from "../components/Nav"
import HeaderContainer from "../components/HeaderContainer"
import ABLogo from "../assets/images/AppBeware_icon_shadow.png"
import { Grid, Table, TableBody, TableCell, TableRow } from '@material-ui/core';

function CategoryPage() {

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
              
                 </Grid>
            </Grid>
            
            </Wrapper>
        </HeaderContainer>
          Category Page
        {/* <Footer/> */}
        </>
    )
}

export default CategoryPage; 