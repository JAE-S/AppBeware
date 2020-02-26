// Import React
// =========================================================
    import React, { Component } from "react"; 
    import { connect } from "react-redux"; 
    import {Redirect} from 'react-router-dom';
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
    import { userActions } from '../Store/Actions/auth';

// Export Default Profile Page Function
// =========================================================
    class Profile extends Component {
        
        componentDidMount() {
            this.props.getFullUserInfo();
        }
        
        handleInputchange = event => {
            const {name, value} = event.target;
            this.setState({
            [name]: value
            })
        }
        
    render() {
        return (
            <div>
               {this.props.loggedIn ? ( 
                <> 
                <Nav/>
                <main>
                    <HeaderContainer style={{backgroundColor: "#EAEAEA", borderBottom: "4px solid #F7C533"}}> 
                        <Wrapper align="center" style={{padding: 40}}> 
                            <Grid container
                                direction="row"
                                justify="center"
                                alignItems="center" 
                            >
                                <Grid item xs={12}> 
                             
                                {!this.props.userInfo ? (<p align="center" >Loading...</p>) : ( <img alt={`${this.props.userInfo.name}'s Profile`} 
                                    src={this.props.userInfo.profilePicture}
                                    style={{ height: 200, width: 200, borderRadius: "50%"}}/> )
                                }
                                
                                </Grid>
                                
                                <Grid item xs={12} > 
                                    {!this.props.userInfo ? (`Loading...`) : ( <div align="center" >  <h3>Welcome back {this.props.userInfo.name}</h3></div>) }
                                </Grid>

                            </Grid> 
                        </Wrapper>
                    </HeaderContainer>
                    <Wrapper align="left" style={{padding: 40, maxWidth: "800px"}}> 
                        
                        <UserDetailsPanel
                            ariaControls="UserName"
                            title="Username"
                            currentDetails={!this.props.userInfo ? (`Loading...`) : (this.props.userInfo.name) }
                            edit={"hi"}
                            inputSubmit = {this.handleFormSubmit}
                            name={'name'}
                            description="Enter a new username."
                            onChange={this.handleInputchange}
                        />

                        <UserDetailsPanel 
                            ariaControls="password"
                            title="Password"
                            currentDetails={'********'}
                            edit={"hi"}
                            inputSubmit = {this.handleFormSubmit}
                            name={'password'}
                            description="Enter a new password."
                            onChange={this.handleInputchange}
                        />
                        <UserDetailsPanel
                            ariaControls="email"
                            title="Email"
                            currentDetails={!this.props.userInfo ? (`Loading...`) : (this.props.userInfo.email) }
                            edit={" "}
                            inputSubmit = {this.handleFormSubmit}
                            name={'email'}
                            description="Enter a new email."
                            onChange={this.handleInputchange}
                        />
                        <UserDetailsPanel
                            ariaControls="phone"
                            title="Phone Number"
                            currentDetails={!this.props.userInfo ? (`Loading...`) : (this.props.userInfo.phoneNumber) }
                            edit={"hi"}
                            inputSubmit = {this.handleFormSubmit}
                            name={'phone'}
                            description="Enter a new phone number."
                            onChange={this.handleInputchange}
                        />
                    </Wrapper>

                </main>
                <Footer/>
                </>
                ) : ( <Redirect to='/' /> )
            } 
            </div>
            )}
    }

const mapStateToProps = (state) => ({

    userInfo: state.users.userInfo,
    loggedIn: state.authentication.loggedIn
})

const actionCreators = {
    getFullUserInfo: userActions.getFullUserInfo

};

export default connect(mapStateToProps, actionCreators)(Profile); 