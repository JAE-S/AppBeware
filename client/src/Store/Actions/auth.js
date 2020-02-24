
import { userConstants } from '../_constants/userConstants';
import  userService  from '../_services/userService';
import  history  from '../_helpers/history';

export const userActions = {
  login,
  getAll,

  // TODO://////////////////
  // logout,
  // register,
  // delete: _delete
};

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

function getAll() {
  return dispatch => {
      dispatch(request());

      userService.getAll()
          .then(
              users => dispatch(success(users)),
              error => dispatch(failure(error.toString()))
          );
  };

  function request(users) { return { type: userConstants.GETALL_REQUEST, payload: users } }
  function success(users) { return { type: userConstants.GETALL_SUCCESS, users, payload: users } }
  function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

