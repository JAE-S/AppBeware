// Import Dependencies
// =========================================================
    import { combineReducers } from "redux";
    import { connectRouter } from 'connected-react-router'
// Import Reducers
// =========================================================
    import { authentication } from './_userReducers/authentication.reducer';
    import { users } from './_userReducers/user.reducer';
    import { allCategories, singleCategory, singleCategoryInfo } from "./_appReducers/category.reducer";
    import {allListedApps, allAppNames, trendingApps, singleApp, shieldsForApps, appReviews } from "./_appReducers/app.reducer"
    import { shields } from "./_appReducers/shield.reducer";
    import reviewReducer from './reviewReducer';
    import userReducer from './userReducer';
    import counter from './counter';
    
// Combine Reducers 
// =========================================================
    const createRootReducer = (history) => combineReducers({
        router: connectRouter(history),
    
        reviews: reviewReducer,
        notifications: userReducer, 

        allCategories,
        singleCategory,
        singleCategoryInfo,

        allListedApps, 
        allAppNames, 
        trendingApps, 
        singleApp, 
        shieldsForApps, 
        appReviews, 
        
        shields,

        counter,
        authentication,
        users,
    })

    export default createRootReducer
 
