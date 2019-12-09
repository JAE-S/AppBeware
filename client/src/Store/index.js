// Import React and Redux
// =========================================================
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'connected-react-router'
// connectRouter, 
import thunk from "redux-thunk";
import history from './history'
import createRootReducer from "./Reducers";
import { viewAllCategories } from "./Actions/categoryActions";

const enhancers = []
const initialState = {};
const middleware = [thunk];

// We might require (preloadedState) as a parameter and then place it right below initial state
// Necessary for hot reloading???

export default function configureStore() {
  if (window.navigator.userAgent.includes('Chrome')) {
    const store = createStore(
      createRootReducer(history),
      initialState,
      compose(
        applyMiddleware(
          routerMiddleware(history),
          ...middleware
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    )
    return store;

  } else {
    const store = createStore(
      createRootReducer(history),
      initialState,
      compose(
        applyMiddleware(
          routerMiddleware(history),
          ...middleware
        ),
      )
    );
    
    return store;
  }

}
