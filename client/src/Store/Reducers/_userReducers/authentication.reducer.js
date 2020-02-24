import { userConstants } from '../../_constants/userConstants';

let userInfo = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? 
//   { 
//     isloggedIn: true,
//     userInfo: {}, 
//   } : 
//   {};
  const initialState = userInfo ? { loggedIn: true, userInfo } : {};
export function authentication(state = initialState, action) {

  switch (action.type) {

    // ***********************************************************
    // Logging in - grabbing username and password - checking with database
    // ***********************************************************

    case userConstants.LOGIN_REQUEST:
      console.log("Inside reducer");
      console.log(action.payload);
      return {
        ...state,
        userInfo: action.payload,
        isloggedIn: true
      };

    case userConstants.LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        userInfo: action.payload,
        isloggedIn: true
      };

    case userConstants.LOGIN_FAILURE:
      return {};

    case userConstants.LOGOUT:
      return {};

  // // ***********************************************************
  // // Getting all of the user data back from the database
  // // ***********************************************************

  //   case userConstants.GET_FULL_USER_INFO_REQUEST:
  //     console.log("Inside reducer REQUEST - get full user info");
  //     console.log(action.payload);
  //     return {
  //       ...state,
  //       userInfo: action.payload,
  //       isloggedIn: true
  //     };

  //   case userConstants.GET_FULL_USER_INFO_SUCCESS:
  //     console.log("Inside reducer SUCCESS - get full user info");
  //     console.log(action.payload.data.userInfo);
  //     return {
  //       userInfo: action.payload.data.userInfo,
  //       isloggedIn: true
  //     };

  //   case userConstants.GET_FULL_USER_INFO_FAILURE:
  //     return {};

  //   // ***********************************************************

  //   // ***********************************************************


    default:
      return state

  }
} 