// Import React
// =========================================================
    import * as React from "react";
    import { render } from "react-dom";
// Redux Requirementts
// =========================================================
    import { Provider } from 'react-redux'
// Import Components
// =========================================================
    import App from './App'
    import configureStore, { history }  from './store/store'

    
// Configure the store for Redux
// =========================================================
    const store = configureStore()
// Render the application
// =========================================================
    render(
        <Provider store={store}>
            <App history={history} />
        </Provider>,
        document.getElementById("root"),
    );
