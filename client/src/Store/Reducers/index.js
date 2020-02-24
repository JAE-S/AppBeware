// Import Dependencies
// =========================================================
    import { combineReducers } from "redux";
    import { connectRouter } from 'connected-react-router'
// Import Reducers
// =========================================================
    import { authentication } from './_userReducers/authentication.reducer';
    import { users } from './_userReducers/user.reducer';
    import categoryReducer from "./categoryReducer";
    import appReducer from "./appReducer";
    import shieldReducer from "./shieldReducer";
    import reviewReducer from './reviewReducer';
    import userReducer from './userReducer';
    import counter from './counter';
    
// Combine Reducers 
// =========================================================
    const createRootReducer = (history) => combineReducers({
        router: connectRouter(history),
        categories: categoryReducer,
        apps: appReducer,
        shields: shieldReducer,
        reviews: reviewReducer,
        notifications: userReducer, 

        counter,
        authentication,
        users,
    })

    export default createRootReducer
 
