import { reviewConstants } from '../_constants/reviewConstants';
import  reviewService  from '../_services/reviewService';
import { appActions } from './appActions';
// import  history  from '../_helpers/history';

export const reviewActions = {
    // addShieldToApp,
    reviewSubmit
    // resetAddedShields,
}

// ADD_SHIELD_TO_APP_REQUEST: "ADD_SHIELD_TO_APP_REQUEST", 
// RESET_ADDED_SHIELDS_REQUEST: "RESET_ADDED_SHIELDS_REQUEST",


// function addShieldToApp (newShield) {

//     return {
//         type: reviewConstants.ADD_SHIELD_TO_APP_SUCCESS,
//         payload: newShield
//     }
// }

function reviewSubmit (completeReview) {

    return dispatch => {
        dispatch(request());

        reviewService.reviewSubmit(completeReview)
        .then(
            data => dispatch(success(data)),
            error => dispatch(failure(error.toString())),

        ).then( () => 
            { appActions.viewAppReviews( completeReview.ListedAppId )})
    }

        function request(data) { return { type: reviewConstants.REVIEW_SUBMIT_REQUEST, payload: data } }
        function success(data) { return { type: reviewConstants.REVIEW_SUBMIT_SUCCESS, payload: data } }
        function failure(error) { return { type: reviewConstants.REVIEW_SUBMIT_FAILURE, error } }

}

// function resetAddedShields () {
//     return {
//         type: reviewConstants.RESET_ADDED_SHIELDS_SUCCESS,
//         payload: []
//     }
// }
