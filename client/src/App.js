
// Import React 
// =========================================================
  import React from "react";
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 


// Import Components
// =========================================================
  import Form from "./components/Form";
  import Nav from "./components/Nav"
  import Wrapper from "./components/Wrapper";

// Import CSS
// =========================================================

// App
// =========================================================
function App() {
  return (
    <Router>
       <Nav /> 
       <Wrapper>
        <Switch>
            <Route exact path="/" component={Form} />
        </Switch>
       </Wrapper>
    </Router>
  )
}

export default App;
