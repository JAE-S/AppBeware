// Import React
// =========================================================
    import React, { Component } from "react"; 
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
    import API from "../Utils/API"
// Export Default Profile Page Function
// =========================================================
    class Profile extends Component {

        state = {
            email: '',
            password: '',
            name: ''
        }
        
        componentDidMount() {
            this.getProfileInfo()
        }

        getProfileInfo() {
            API.userInfo()
            .then(res => {
                console.log(res)
                this.setState({
                    email:res.data.userInfo.username,
                    name: res.data.userInfo.firstName + ' ' + res.data.userInfo.lastName
                })
            })
        }

        render() {
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
                             <img alt={`'s profile photo`} style={{ height: 200, width: 200, borderRadius: "50%"}}/>
                            </Grid>
                            <Grid item xs={12} > 
                                <h3>{}</h3>
                            </Grid>
                        </Grid> 
                    </Wrapper>
                </HeaderContainer>
                <Wrapper align="center" style={{padding: 40}}> 
                    <UserDetailsPanel
                        ariaControls="userName"
                        title={"Name"}
                        currentDetails={this.state.name}
                        edit={"hi"}
                    />
                     <UserDetailsPanel
                        ariaControls="password"
                        title={"Password"}
                        currentDetails={'******'}
                        edit={"hi"}
                    />
                     <UserDetailsPanel
                        ariaControls="email"
                        title={"Email"}
                        currentDetails={this.state.email}
                        edit={" "}
                    />
                     <UserDetailsPanel
                        ariaControls="phone"
                        title={"Phone Number"}
                        currentDetails={'.'}
                        edit={"hi"}
                    />
                </Wrapper>

            </main>
            <Footer/>
            </>
        )
    }
    }


export default Profile ; 