import { userConstants } from '../../_constants/userConstants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { 
  isloggedIn: true,
    userInfo: {}, 
  } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state
  }
} 