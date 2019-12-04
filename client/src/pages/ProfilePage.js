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
    import Footer from "../components/Footer"
    import HeaderContainer from "../components/HeaderContainer"
    import UserDetailsPanel from "../components/UserDetailsPanels"
// Import Styles
// =========================================================
    import "../assets/styling/appStyle.css"
// Import Media
// =========================================================
    import Tony_Smith from "../assets/images/test_profiles/Tony_Smith.png";

    const test_profiles = [

        { image: Tony_Smith,
          fullName: "Tony Smith",
          username: "Tony S.",
          password: "*****", 
          email: "tonysmith@gmail.com",
          phone: "123-456-7890"
        }
      ];

   

// Export Default Profile Page Function
// =========================================================
    export default function Profile() {

        return (
            <>
            <Nav/>
            <main>
                <HeaderContainer> 
                    <Wrapper align="center" style={{padding: 40}}> 
                       <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center" >
                            <Grid item xs={12}> 
                             <img alt={`${test_profiles[0].fullName}'s profile photo`}src={test_profiles[0].image} style={{ height: 200, width: 200, borderRadius: "50%"}}/>
                            </Grid>
                            <Grid item xs={12} > 
                                <h3>{test_profiles[0].fullName}</h3>
                            </Grid>
                        </Grid> 
                    </Wrapper>
                </HeaderContainer>
                <Wrapper align="center" style={{padding: 40}}> 
                    <UserDetailsPanel
                        ariaControls="userName"
                        title={"Username"}
                        currentDetails={test_profiles[0].username}
                        edit={"hi"}
                    />
                     <UserDetailsPanel
                        ariaControls="password"
                        title={"Password"}
                        currentDetails={test_profiles[0].password}
                        edit={"hi"}
                    />
                     <UserDetailsPanel
                        ariaControls="email"
                        title={"Email"}
                        currentDetails={test_profiles[0].email}
                        edit={" "}
                    />
                     <UserDetailsPanel
                        ariaControls="phone"
                        title={"Phone Number"}
                        currentDetails={test_profiles[0].phone}
                        edit={"hi"}
                    />
                </Wrapper>

            </main>
            <Footer/>
            </>
        )
    }



