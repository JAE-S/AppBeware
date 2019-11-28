// Import Dependencies
// =========================================================
    import { combineReducers } from "redux";
    import { connectRouter } from 'connected-react-router'
// Import Reducers
// =========================================================
    import categoryReducer from "./categoryReducer"
    import appReducer from "./appReducer"
    import shieldReducer from "./shieldReducer"

// Combine Reducers 
// =========================================================
    const createRootReducer = (history) => combineReducers({
        categories: categoryReducer,
        apps: appReducer,
        shields: shieldReducer,
        router: connectRouter(history),
    })

    export default createRootReducer

