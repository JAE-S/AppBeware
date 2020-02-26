import { alertConstants } from '../../_constants/alertConstants'

const initialState = {
    allUserAppNotifications: [],
    activeUserAppNotifications: []
};

export default function(state=initialState, action) {

    switch(action.type) {

        case alertConstants.VIEW_ALL_USER_APP_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                allUserAppNotifications: action.payload.data
            }

        case alertConstants.VIEW_ACTIVE_USER_APP_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                activeUserAppNotifications: action.payload.data
            }

        default: 
            return state;
    }
}
