// Import React 
// =========================================================
  import React from "react";
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
// Import Components
// =========================================================
  import About from "./pages/About"
  import AppPage from "./pages/AppPage"
  import CategoryPage from "./pages/CategoryPage"
  import Homepage from "./pages/Homepage"
  import ProfilePage from "./pages/ProfilePage"
  import SplashPage from "./pages/SplashPage"
  

// Import CSS
// =========================================================
  import "./App.css"

// App
// =========================================================
function App() {
  return (
    <Router>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/app" component={AppPage} />
            <Route exact path="/category" component={CategoryPage} />
            <Route exact path="/homepage" component={Homepage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/" component={SplashPage} />
          </Switch>
    </Router>
  )
}

export default App;
