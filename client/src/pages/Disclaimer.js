// Import React
// =========================================================
    import React from "react"; 
// Import Material Ui Components
// =========================================================
    // import { Grid } from '@material-ui/core';
// Import Components
// =========================================================
    import Nav from "../components/Nav"
    import Wrapper from "../components/Wrapper"
    import Footer from "../components/Footer"
// Import Styles
// =========================================================
    import "../assets/styling/appStyle.css"

// Export Default Terms & Conditions Page Function
// =========================================================
    export default function TermsConditions() {

        return (
            <>
            <Nav/>
            <main>
                <Wrapper align="center" style={{paddingTop: 80}}> 
                    
                <h3>This is the terms &amp; Conditions page </h3>
                
                </Wrapper>
            </main>
            <Footer/>
            </>
        )
    }
