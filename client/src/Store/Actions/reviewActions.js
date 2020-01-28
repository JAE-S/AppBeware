import API from "../../utils/API";
import { ADD_SHIELD_TO_APP, REVIEW_SUBMIT, RESET_ADDED_SHIELDS, ALERT_CALLS} from "./new-types";

export const addShieldToApp = (newShield) => {

    return {
        type: ADD_SHIELD_TO_APP,
        payload: newShield
    }
}

export const reviewSubmit = (completeReview) => {
    return {
        type: REVIEW_SUBMIT,
        payload: completeReview
    }
}

export const resetAddedShields = () => {
    return {
        type: RESET_ADDED_SHIELDS,
        payload: []
    }
}

export const AlertsCall = () => dispatch => {
    API.getAlerts()
    .then(alertCalls => dispatch ({
       type: ALERT_CALLS,
        payload: alertCalls
    }))
}
