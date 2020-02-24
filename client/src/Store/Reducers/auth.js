import {
    LOGIN_SUCCESS,
 
  } from '../Actions/auth';
  
  const initialState = {
    error: null,
    isloggedIn: true,
    userInfo: [], 
  };
  
  export const auth = (state = initialState, action) => {
    switch (action.type) {
    case LOGIN_SUCCESS:
  
      return {
        error: '',
        ...state,
            userInfo: action.payload.data.userInfo,
            isloggedIn: action.payload.data.isloggedin
      };
    // case LOGIN_FAIL:
  
    //   return {
    //     ...state,
    //     error: action.error,
    //   };
  
    // case LOGOUT_SUCCESS:
  
    //   return {
    //     error: '',
    //     user: {},
    //   };
  
    // case LOGOUT_FAIL:
  
    //   return {
    //     ...state,
    //     error: action.error,
    //   };
    // case REGISTER_SUCCESS:
  
    //   return {
    //     error: '',
    //     user: {
    //       email: action.data.email,
    //     },
    //   };
    // case REGISTER_FAIL:
  
    //   return {
    //     ...state,
    //     error: action.error,
    //   };
    default:
      return state;
    }
  };
  
  export default auth;
  