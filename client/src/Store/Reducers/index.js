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
import reviewReducer from './reviewReducer';

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


// // Import Dependencies
// // =========================================================
//     import { combineReducers } from "redux";
//     import { connectRouter } from 'connected-react-router'
// // Import Reducers
// // =========================================================
//     import { authentication } from './_userReducers/authentication.reducer';
//     import { users } from './_userReducers/user.reducer';
//     import { allCategories, singleCategory, singleCategoryInfo } from "./_appReducers/category.reducer";
//     import {allListedApps, allAppNames, trendingApps, singleApp, shieldsForApps, appReviews } from "./_appReducers/app.reducer"
//     import { shields } from "./_appReducers/shield.reducer";
//     import reviewReducer from './reviewReducer';
//     import userReducer from './userReducer';
//     import counter from './counter';
    
// // Combine Reducers 
// // =========================================================
//     const createRootReducer = (history) => combineReducers({
//         router: connectRouter(history),
    
//         reviews: reviewReducer,
//         notifications: userReducer, 

//         allCategories,
//         singleCategory,
//         singleCategoryInfo,

//         allListedApps, 
//         allAppNames, 
//         trendingApps, 
//         singleApp, 
//         shieldsForApps, 
//         appReviews, 
        
//         shields,

//         counter,
//         authentication,
//         users,
//     })

//     export default createRootReducer
 
