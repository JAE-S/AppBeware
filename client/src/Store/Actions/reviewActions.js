import API from "../../utils/API";
import { ADD_SHIELD_TO_APP, REVIEW_SUBMIT, RESET_ADDED_SHIELDS, ALERT_CALLS} from "./new-types";

export const reviewActions = {
    addShieldToApp,
    reviewSubmit,
    resetAddedShields,
    AlertsCall
}


function addShieldToApp (newShield) {

    return {
        type: ADD_SHIELD_TO_APP,
        payload: newShield
    }
}

function reviewSubmit (completeReview) {
    return {
        type: REVIEW_SUBMIT,
        payload: completeReview
    }
}

function resetAddedShields () {
    return {
        type: RESET_ADDED_SHIELDS,
        payload: []
    }
}

function AlertsCall () {
    function anon (dispatch) {
        API.getAlerts()
        .then(alertCalls => dispatch ({
        type: ALERT_CALLS,
            payload: alertCalls
        }))
    }
}
