// Import React
// =========================================================
    import React, { Component } from "react"; 
    import { connect } from "react-redux"; 
// Import Material Ui Components
// =========================================================
    import { Grid } from '@material-ui/core';
    import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';  
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
    import { userInfo, updateEmail, updateName, updatePassword, updatePhone } from '../Store/Actions/authentication';
import API from "../utils/API";
// Export Default Profile Page Function
// =========================================================
    class Profile extends Component {

        state = {
            name: '',
            password: '',
            email: '', 
            phone: ''
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

        
  handleInputchange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
      event.preventDefault();
      
  }

        
        render(props) {
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
                        title={"Name"}
                        currentDetails={this.props.user.name}
                        edit={"hi"}
                        inputSubmit= {this.props.updateName}
                        name={'name'}
                        onChange={this.handleInputchange}
                    />

                     <UserDetailsPanel 
                        ariaControls="password"
                        title={<h3>Password</h3>}
                        currentDetails={'******'}
                        edit={"hi"}
                        inputSubmit= {this.props.updatePassword}
                        name={'password'}
                        onChange={this.handleInputchange}
                    />
                     <UserDetailsPanel
                        ariaControls="email"
                        title={"Email"}
                        currentDetails={this.props.user.email}
                        edit={" "}
                        inputSubmit= {this.props.updateEmail}
                        name={'email'}
                        onChange={this.handleInputchange}
                    />
                     <UserDetailsPanel
                        ariaControls="phone"
                        title={"Phone Number"}
                        currentDetails={this.props.user.phoneNumber}
                        edit={"hi"}
                        inputSubmit = {this.handleFormSubmit}
                        name={'phone'}
                        onChange={this.handleInputchange}
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