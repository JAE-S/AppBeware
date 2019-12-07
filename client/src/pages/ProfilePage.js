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
// Import Media
// =========================================================
    import { userInfo } from '../Store/Actions/authentication';
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
                <Wrapper align="center" style={{padding: 40}}> 
                    <UserDetailsPanel
                        ariaControls="Name"
                        title={"Name"}
                        // currentDetails={this.props.user.userInfo.userInfo.name}
                        edit={"hi"}
                        imputSubmit= {'.'}
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
                        // currentDetails={this.props.user.userInfo.userInfo.email}
                        edit={" "}
                    />
                     <UserDetailsPanel
                        ariaControls="phone"
                        title={"Phone Number"}
                        // currentDetails={this.props.user.userInfo.userInfo.phoneNumber}
                        edit={"hi"}
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
        })(Profile); 