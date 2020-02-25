import { userConstants } from '../../_constants/userConstants';

let userInfo = JSON.parse(localStorage.getItem('users'));

  const initialState = userInfo ? { loggedIn: true, userInfo } : {};
  export default function (state = initialState, action) {

  switch (action.type) {

    // ***********************************************************
    // Logging in - grabbing username and password - checking with database
    // ***********************************************************

    case userConstants.LOGIN_REQUEST:
      // console.log("Inside reducer");
      // console.log(action.payload);
      return {
        loggingIn: true,
        userInfo: action.payload,
      };

    case userConstants.LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        loggedIn: true,
        userInfo: action.payload.data,
      };

    case userConstants.LOGIN_FAILURE:
      return {};

    case userConstants.LOGOUT:
      return {};

    default:
      return state

  }
} 