// Import React 
// =========================================================
  import React from "react";
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
// Import Components
// =========================================================
  import SplashPage from "./pages/SplashPage"
  import Homepage from "./pages/Homepage"
  import ProfilePage from "./pages/ProfilePage"
  import CategoryPage from "./pages/CategoryPage"
  import AppPage from "./pages/AppPage"
  import AlertPage from "./pages/Alert"
  import TermsConditions from "./pages/TermsConditions"
// Import CSS
// =========================================================
  import "./App.css"

// App
// =========================================================
function App() {
  return (
    <Router>
          <Switch>
              <Route exact path="/" component={SplashPage} />
              <Route exact path="/homepage" component={Homepage} />
              <Route exact path="/categoryPage" component={CategoryPage} />
              <Route exact path="/appPage" component={AppPage} />
              <Route exact path="/profilePage" component={ProfilePage} />
              <Route exact path="/alertPage" component={AlertPage} />
              <Route exact path="/termsConditionsPage" component={TermsConditions} />
            
          </Switch>
    </Router>
  )
}

export default App;
