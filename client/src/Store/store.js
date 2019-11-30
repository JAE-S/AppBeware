// Import React and Redux
// =========================================================
import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from "redux-thunk";
import { createBrowserHistory } from 'history'
import createRootReducer from "./reducers/index";

export const history = createBrowserHistory()

// const initialState = {};

// const enhancers = []

// const middleware = [
//     thunk,
//     routerMiddleware(history)
//   ]

// const store = createStore(
//     rootReducer, 
//     initialState, 
//     compose(
//         applyMiddleware(...middleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

// // export default store;

// if (process.env.NODE_ENV === 'development') {
//     const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  
//     if (typeof devToolsExtension === 'function') {
//       enhancers.push(devToolsExtension())
//     }
//   }
  
//   const composedEnhancers = compose(
//     applyMiddleware(...middleware),
//     ...enhancers
//   )
  
// //   const store = createStore(
// //     connectRouter(history)(rootReducer),
// //     initialState,
// //     composedEnhancers
// //   )
  
//   export default store;

export default function configureStore(preloadedState) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(
      createRootReducer(history),
      preloadedState,
      composeEnhancer(
        applyMiddleware(
          routerMiddleware(history),
        ),
      ),
    )
  
    // Hot reloading
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducers', () => {
        store.replaceReducer(createRootReducer(history));
      });
    }
  
    return store
  }