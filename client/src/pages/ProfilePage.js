// Import React
// =========================================================
    import React, { Component } from "react"; 
    import { connect } from "react-redux"; 
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
// Import Redux Components
// =========================================================
    import { userInfo, updateEmail, updateName, updatePassword, updatePhone } from '../Store/Actions/authentication';

// Export Default Profile Page Function
// =========================================================
    class Profile extends Component {

        state = {

        }
        
        componentDidMount() {
            console.log("mounted")
            this.props.userInfo();
        }

        // getProfileInfo() {
        //     API.userInfo()
        //     .then(res => {
        //         console.log(res)
        //         this.setState({
        //             email:res.data.userInfo.email,
        //             name: res.data.userInfo.name,
        //             phoneNumber: res.data.userInfo.phoneNumber
        //         })
        //     })
        // }
        
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
                    <Wrapper align="left" style={{padding: 40}}> 
                        <h2>Your Profile </h2>

                        <UserDetailsPanel
                            ariaControls="Name"
                            title={<h3>Name</h3>}
                            currentDetails={this.props.user.isloggedin}
                            edit={"hi"}
                            inputSubmit= {this.props.updateName}
                        />

                        <UserDetailsPanel 
                            ariaControls="password"
                            title={<h3>Password</h3>}
                            currentDetails={'******'}
                            edit={"hi"}
                            inputSubmit= {this.props.updatePassword}
                        />
                        <UserDetailsPanel
                            ariaControls="email"
                            title={<h3>Email</h3>}
                            currentDetails= {this.props.email}
                            edit={" "}
                            inputSubmit= {this.props.updateEmail}
                        />
                        <UserDetailsPanel
                            ariaControls="phone"
                            title={<h3>Phone Number</h3>}
                            currentDetails={this.props.phoneNumber}
                            edit={"hi"}
                            inputSubmit = {this.props.updatePhone}
                        />
                    </Wrapper>

                </main>
                <Footer/>
                </>
            )
        }
    }

    const mapStateToProps = state => ({
        user: state.user.userInfo
    })

    export default connect(mapStateToProps, 
        {
            userInfo
        }
    )(Profile); 