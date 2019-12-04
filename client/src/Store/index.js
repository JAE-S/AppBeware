// Import React and Redux
// =========================================================
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'connected-react-router'
// connectRouter, 
import thunk from "redux-thunk";
import history from './history'
import createRootReducer from "./reducers/index";
import { viewAllCategories } from "./Actions/categoryActions";

const enhancers = []
const initialState = {};
const middleware = [thunk];

// We might require (preloadedState) as a parameter and then place it right below initial state
// Necessary for hot reloading???

export default function configureStore() {
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

  // // Hot reloading
  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('./reducers', () => {
  //     store.replaceReducer(createRootReducer(history));
  //   });
  // }
  // return store

}
