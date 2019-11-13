 // Import React 
// =========================================================
import React from "react";
// import { BrowserRouter as Route, Switch }
//  from "react-router-dom"; 

 // Components
// =========================================================
import { Modal, Button, Container } from 'react-materialize';
// import Nav from "./components/Nav";

 // Components
// =========================================================
// import About from "./pages/About";


function App() {
  const trigger = <Button style={{ display: "block", margin: "0 auto", backgroundColor: "red"}}>CLICK ME</Button>;

  return (
    <div>
      <Container 
          className="valign-wrapper" 
          style={{height: "100vh" }}
      >
          <Modal className="center-align" header="AppBeware" trigger={trigger}>
              <p>...coming soon!</p>
          </Modal>
      </Container>
           
      {/* <Nav /> */}
      {/* <Router> */}
        {/* <Switch>  */}
          {/* <Route exact path="/" component={About}/> */}
    
        {/* </Switch> */}
      {/* </Router> */}
    </div>
  );
}

export default App;