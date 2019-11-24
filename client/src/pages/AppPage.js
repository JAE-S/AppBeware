// Import React
// =========================================================
import React from "react"; 
// Import Material Ui Components
// =========================================================
    import { Grid } from '@material-ui/core';
// Import Components
// =========================================================
    import Nav from "../components/Nav"
    import Wrapper from "../components/Wrapper"
    import HeaderContainer from "../components/HeaderContainer"

// Export Default App Page Function
// =========================================================
    export default function Alert() {

        return (
            <>
            <Nav/>
            <HeaderContainer> 
                <Wrapper align="center" style={{paddingTop: 80}}> 

                <h3>This is an App page</h3>
                
                </Wrapper>
            </HeaderContainer>
            {/* <Footer/> */}
            </>
        )
    }
