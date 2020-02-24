// Import React + Reoters + PropTypes
// =========================================================
  import React, {Component} from "react";
  import { Route, Switch } from 'react-router'
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

// App Routes
// =========================================================
  class App extends Component {
    
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

  export default App; 
