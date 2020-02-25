import API from "../../utils/API";
import { VIEW_ALL_USER_APP_NOTIFICATIONS, VIEW_ACTIVE_USER_APP_NOTIFICATIONS } from "./new-types";

export const userAlertActions = {
    viewAllUserAppNotifications,
    viewActiveUserAppNotifications
}

function viewAllUserAppNotifications() {
    function anon (dispatch) {
        console.log("Inside viewAllUserAppNotifications - userActions.js");
        // API.getAllUserAppNotifications(userId)
        API.getAlerts()
            .then(allUserAppNotifications => dispatch({
                type: VIEW_ALL_USER_APP_NOTIFICATIONS,
                payload: allUserAppNotifications
            }))
            .catch(err => console.log(err));
    }
}

function viewActiveUserAppNotifications () {
    function anon (dispatch) {
        console.log("ACTIVE ONLY --- Inside viewActiveUserAppNotifications - userActions.js");
        // API.getAllUserAppNotifications(userId)
        API.getAlertCount()
            .then(activeUserAppNotifications => dispatch({
                type: VIEW_ACTIVE_USER_APP_NOTIFICATIONS,
                payload: activeUserAppNotifications
            }))
            .catch(err => console.log(err));
    }
}