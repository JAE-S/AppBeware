// Import React 
// =========================================================
  import React from "react";
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
// Import Components
// =========================================================
  import SplashPage from "./pages/SplashPage"
  import Homepage from "./pages/Homepage"

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
          </Switch>
    </Router>
  )
}

export default App;
