import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer"
import appReducer from "./appReducer"
import shieldReducer from "./shieldReducer"



export default combineReducers({
    categories: categoryReducer,
    apps: appReducer,
    shields: shieldReducer
});