// Import React
// =========================================================
    import React, { Component } from "react"; 
    import { connect } from "react-redux"; 
// Import Redux Components
// =========================================================
    import { alertActions } from "../../Store/Actions/alertActions";
// Import Material UI components
// =========================================================
    
    class ActiveNotifications extends Component {
        
    componentDidMount() {
        this.props.viewActiveUserAppNotifications();
    }

    render() {
        return (
            
              <>
                {this.props.activeUserAppNotifications.count} 
              </>
        
    
            )
    }
}

    const mapStateToProps = (state) => ({
        activeUserAppNotifications: state.alerts.activeUserAppNotifications,
    })

    const actionCreators = {
        viewActiveUserAppNotifications: alertActions.viewActiveUserAppNotifications
    };

    export default connect(mapStateToProps, actionCreators)(ActiveNotifications); 