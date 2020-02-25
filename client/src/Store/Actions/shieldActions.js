import { shieldConstants } from '../_constants/shieldConstants';
import  shieldService  from '../_services/shieldService';
// import  history  from '../_helpers/history';

export const shieldActions = {
    viewAllShields
}

function viewAllShields () {

    return dispatch => {
        dispatch(request());

        shieldService.viewAllShields()
        .then(
            data => dispatch(success(data)),
            error => dispatch(failure(error.toString()))
        );
    };
    
    function request(data) { return { type: shieldConstants.VIEW_ALL_SHIELDS_REQUEST, payload: data } }
    function success(data) { return { type: shieldConstants.VIEW_ALL_SHIELDS_SUCCESS, payload: data } }
    function failure(error) { return { type: shieldConstants.VIEW_ALL_SHIELDS_FAILURE, error } }
    
}
