// Import Dependencies
// =========================================================
import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
// Import Reducers
// =========================================================

import categoryReducer from "./_appReducers/categoryReducer";
import appReducer from "./_appReducers/appReducer";
import shieldReducer from "./_appReducers/shieldReducer";
import authentication  from "./_userReducers/authentication.reducer";
import user from "./_userReducers/user.reducer"
import alertReducer from "./_appReducers/alertReducer";
import reviewReducer from './_appReducers/reviewReducer'; 

// Combine Reducers 
// =========================================================
const createRootReducer = (history) => combineReducers({

    router: connectRouter(history),
    categories: categoryReducer,
    apps: appReducer,
    shields: shieldReducer,
    users: user,
    reviews: reviewReducer,
    alerts: alertReducer,
    authentication: authentication

})

export default createRootReducer
