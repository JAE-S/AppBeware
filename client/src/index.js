// Import React
// =========================================================
  import React from "react";
  import { render } from "react-dom"

// Redux Requirementts
// =========================================================
  import { Provider } from 'react-redux'
  import { ConnectedRouter } from 'connected-react-router' 
// Import Components
// =========================================================
  import App from './App'
  import configureStore from "./Store"
  import history from "./Store/_helpers/history.js";

// Configure the store for Redux
// =========================================================
  const store = configureStore()  
  
// Render the application
// =========================================================
render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root"),
);
