
import { userConstants } from '../_constants/userConstants';
import  userService  from '../_services/userService';
import  history  from '../_helpers/history';

export const userActions = {
  login,
  getFullUserInfo,

  // TODO://////////////////
  // logout,
  // register,
  // delete: _delete
};

// ***********************************************************
// Login 
// ***********************************************************
  function login(userInfo) {
    console.log("Congrats. Inside auth actions")
    console.log(userInfo);
    return dispatch => {
        dispatch(request({ userInfo }));

        userService.login(userInfo)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/homepage');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user, payload: userInfo } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user, payload: userInfo } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
  }

// ***********************************************************
// Get User Details 
// ***********************************************************
  function getFullUserInfo() {
    return dispatch => {
      dispatch(request());

      userService.getFullUserInfo()
        .then(
          user => dispatch(success(user)),
          error => dispatch(failure(error.toString()))
        );
    };

    function request(user) { return { type: userConstants.GET_FULL_USER_INFO_REQUEST, payload: user } }
    function success(user) { return { type: userConstants.GET_FULL_USER_INFO_SUCCESS, payload: user } }
    function failure(error) { return { type: userConstants.GET_FULL_USER_INFO_FAILURE, error } }
  }