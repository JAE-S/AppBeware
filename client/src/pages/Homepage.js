import React from "react"; 

import SearchAppAnnie from "../components/SearchAppAnnie"
import Wrapper from "../components/Wrapper"
import Nav from "../components/Nav"
// import Footer from "../components/Footer"

function Homepage() {

    return (
        <>
        <Nav/>
        <Wrapper>
  
            <SearchAppAnnie />
   
        </Wrapper>
        {/* <Footer/> */}
        </>
    )
}

export default Homepage; 