import { alertConstants } from '../_constants/alertConstants';
import  alertService  from '../_services/alertService';
// import  history  from '../_helpers/history';
// import { push } from 'connected-react-router'

export const alertActions = {
    viewAllUserAppNotifications,
    viewActiveUserAppNotifications
}

function viewAllUserAppNotifications() {

    return dispatch => {
        dispatch(request());

        alertService.viewAllUserAppNotifications()
        .then(
            data => dispatch(success(data)),
            error => dispatch(failure(error.toString())),

        );
    };

    function request(data) { return { type: alertConstants.VIEW_ALL_USER_APP_NOTIFICATIONS_REQUEST, payload: data } }
    function success(data) { return { type: alertConstants.VIEW_ALL_USER_APP_NOTIFICATIONS_SUCCESS, payload: data } }
    function failure(error) { return { type: alertConstants.VIEW_ALL_USER_APP_NOTIFICATIONS_FAILURE, error } }

}

function viewActiveUserAppNotifications () {

    return dispatch => {
        dispatch(request());

        alertService.viewActiveUserAppNotifications()
        .then(
            data => dispatch(success(data)),
            error => dispatch(failure(error.toString())),

        );
    };

    function request(data) { return { type: alertConstants.VIEW_ACTIVE_USER_APP_NOTIFICATIONS_REQUEST, payload: data } }
    function success(data) { return { type: alertConstants.VIEW_ACTIVE_USER_APP_NOTIFICATIONS_SUCCESS, payload: data } }
    function failure(error) { return { type: alertConstants.VIEW_ACTIVE_USER_APP_NOTIFICATIONS_FAILURE, error } }

}