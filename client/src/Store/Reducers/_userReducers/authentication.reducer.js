import { userConstants } from '../../_constants/userConstants';

let user = JSON.parse(localStorage.getItem('users'));

  const initialState = user ? { loggedIn: true, user } : {};
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
        user: action.payload,
      };

    case userConstants.LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        loggedIn: true,
        user: action.payload.data,
      };

    case userConstants.LOGIN_FAILURE:
      return {};

    case userConstants.LOGOUT:
      return {};

    default:
      return state

  }
} 