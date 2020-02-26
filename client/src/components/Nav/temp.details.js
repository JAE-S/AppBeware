// Import React
// =========================================================
    import React, { Component } from "react"; 
    import { connect } from "react-redux"; 

// Import Redux Components
// =========================================================
    import { userActions } from '../../Store/Actions/auth';

class userDetails extends Component {
        
    componentDidMount() {
        this.props.getFullUserInfo();
    }
    
    render() {
        return (
            <div style={{margin: "0 auto", width: "100%"}}>
                {!this.props.userInfo ? (<p align="center" >Loading...</p>) : ( 
                <div>
                  <img 
                        alt={`${this.props.userInfo.name}'s Profile`} 
                        src={this.props.userInfo.profilePicture}
                        style={{ height: 50, width: 50, borderRadius: "50%", display: "flex", margin: "0 auto"}}
                    /> 
                <h3 style={{display: "table", margin: "0 auto"}}>{this.props.userInfo.name}</h3>
                </div>)
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

    userInfo: state.users.userInfo,
})

const actionCreators = {
    getFullUserInfo: userActions.getFullUserInfo

};

export default connect(mapStateToProps, actionCreators)(userDetails); 