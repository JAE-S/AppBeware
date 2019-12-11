// Import React + Reoters + PropTypes
// =========================================================
import React, {Component} from "react";
import { Route, Switch } from 'react-router'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';

// Import Components
// =========================================================  
import SplashPage from "./pages/SplashPage"
import Homepage from "./pages/Homepage"
import ProfilePage from "./pages/ProfilePage"
import CategoryPage from "./pages/CategoryPage"
import AppPage from "./pages/AppPage"
import Disclaimer from "./pages/Disclaimer"
// Import CSS
// =========================================================
import "./assets/styling/appStyle.css"
import { userInfo} from './Store/Actions/authentication';


// App Routes
// =========================================================
  class App extends Component {
    
    componentDidMount() {
      console.log("mounted main")
      this.props.userInfo();   
  }
    render(){
        return ( 
            <>
              <Switch>
                <Route exact path="/" component={SplashPage} />
                <Route  path="/homepage" component={Homepage} />
                <Route exact path="/categoryPage" component={CategoryPage} />
                <Route exact path="/appPage" component={AppPage} />
                <Route  path="/profilePage" component={ProfilePage} />
                <Route exact path="/disclaimer" component={Disclaimer} />
                </Switch>
            </>
        )
    }
  }

  const mapStateToProps = state => ({
    user: state.user.userInfo,
    isloggedIn: state.user.isloggedIn
})

export default connect(mapStateToProps, 
    {
        userInfo
    }
)(App);