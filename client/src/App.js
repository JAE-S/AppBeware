// Import React + Reoters + PropTypes
// =========================================================
  import React from "react";
  import { Route, Switch } from 'react-router'
  import { ConnectedRouter } from 'connected-react-router'
  import PropTypes from 'prop-types'

// Import Components
// =========================================================
  import SplashPage from "./pages/SplashPage"
  import Homepage from "./pages/Homepage"
  import ProfilePage from "./pages/ProfilePage"
  import CategoryPage from "./pages/CategoryPage"
  import AppPage from "./pages/AppPage"
  // import AlertPage from "./pages/Alert"
  import TermsConditions from "./pages/TermsConditions"
// Import CSS
// =========================================================
  import "./assets/styling/appStyle.css"

  
// App Routes
// =========================================================
    const App = ({ history }) => {
      return ( 
        <ConnectedRouter history={history}>
          <>
            <Switch>
              <Route exact path="/" component={SplashPage} />
              <Route  path="/homepage" component={Homepage} />
              <Route exact path="/categoryPage" component={CategoryPage} />
              <Route exact path="/appPage" component={AppPage} />
              <Route  path="/profilePage" component={ProfilePage} />
              <Route exact path="/termsConditionsPage" component={TermsConditions} />
              </Switch>
          </>
        </ConnectedRouter>
      )
    }

    App.propTypes = {
      history: PropTypes.object,
    }

    export default App;
