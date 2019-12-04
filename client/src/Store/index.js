// Import React and Redux
// =========================================================
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'connected-react-router'
// connectRouter, 
import thunk from "redux-thunk";
import history from './history'
import createRootReducer from "./reducers/index";
import { viewAllCategories } from "./Actions/categoryActions";

// const enhancers = []
// const initialState = {};
// const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}










// const composedEnhancers = compose(
//   applyMiddleware(...middleware),
//   ...enhancers
// )

// export default function configureStore(preloadedState) {
//   const store = createStore(
//     createRootReducer(history),
//     initialState, 
//     preloadedState,
//     composedEnhancers,
//   )

  // // Hot reloading
  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('./reducers', () => {
  //     store.replaceReducer(createRootReducer(history));
  //   });
  // }
  // return store

// }
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

//===============================
// Ethan's attempt
//===============================
// const CATS_REQUESTED = 'CATS_REQUESTED';
// const CATS_RECIEVED = 'CATS_RECEIVED';
// const CATS_FAILED = 'CATS_FAILED';

// const initialState = {data: [], status: ""};

// function viewAllCategories() {
//   return function(dispatch) {
//     dispatch({
//       type: CATS_REQUESTED
//     });
//   }

//   fetch(viewAllCategories)
//   .then( response => response.json())
//   .then( data => dispatch({
//     type: CATS_RECIEVED,
//     payload: data
//   }))
//   .catch(error => dispatch({
//     type: CATS_FAILED,
//     payload: error
//   }))
// }


// function categories(state = initalState, action) {
//   switch (action.type) {
//     case CATS_REQUESTED: 
//       state = Object.assign({}, state, {status: "waiting"});
//       break;
//     case CATS_RECIEVED: 
//       state = Object.assign({}, state, {data: [...action.payload], status: 'recieved'});
//       break;
//     case CATS_FAILED: 
//       state = Object.assign({}, state, {status: "failed", error:action.payload});
//       break;
//   }
// }

// return state;

// let store = createStore(categories, initialState, applyMiddleware(thunk));

// store.dispatch(viewAllCategories());
// store.subscribe(() => {
//   const state = store.getState()
//   if(state.status == "waiting"){
//     return "loading"
//   }
//   if(state.status == "recieved"){
//     return state.data[0]
//   }
// })
