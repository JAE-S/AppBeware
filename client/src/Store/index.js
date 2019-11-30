// Import React and Redux
// =========================================================
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'connected-react-router'
// connectRouter, 
// import thunk from "redux-thunk";
import history from './history'
import createRootReducer from "./Reducers";

const initialState = {};

export default function configureStore(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    createRootReducer(history),
    initialState, 
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history),
      ),
    ),
  )

  // // Hot reloading
  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('./reducers', () => {
  //     store.replaceReducer(createRootReducer(history));
  //   });
  // }

  return store
}
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

