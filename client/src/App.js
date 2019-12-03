// Import React and Redux
// =========================================================
  import React, { Component } from "react";
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
  import { Provider } from "react-redux";

  // Import Components
// =========================================================
  import store from "./Store/store";
  import SplashPage from "./pages/SplashPage"
  import Homepage from "./pages/Homepage"
  import ProfilePage from "./pages/ProfilePage"
  import CategoryPage from "./pages/CategoryPage"
  import AppPage from "./pages/AppPage"
  import AlertPage from "./pages/Alert"
  import Disclaimer from "./pages/Disclaimer"
// Import CSS
// =========================================================
  import "./assets/styling/appStyle.css"




// App
// =========================================================
class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
              <Switch>
                  <Route exact path="/" component={SplashPage} />
                  <Route exact path="/homepage" component={Homepage} />
                  <Route exact path="/categoryPage" component={CategoryPage} />
                  <Route exact path="/appPage" component={AppPage} />
                  <Route exact path="/profilePage" component={ProfilePage} />
                  <Route exact path="/alertPage" component={AlertPage} />
                  <Route exact path="/splashpage" component={SplashPage} />
                  <Route exact path="/disclaimer" component={Disclaimer} />
                
              </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
