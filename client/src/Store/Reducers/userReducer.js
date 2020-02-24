import { VIEW_ALL_USER_APP_NOTIFICATIONS, VIEW_ACTIVE_USER_APP_NOTIFICATIONS } from "../Actions/new-types";

const initialState = {
    allUserAppNotifications: [],
    activeUserAppNotifications: {},
    // singleApp: {},
    // allAppNames: [],
    // trendingApps: [],
    // shieldsForApps: [],
    // appReviews: [],
    // appTextSearchResults: [],
    // iosAppIndividualSearchResult: {}
};

export default function(state=initialState, action) {

    switch(action.type) {

        case VIEW_ALL_USER_APP_NOTIFICATIONS:
            return {
                ...state,
                allUserAppNotifications: action.payload.data
            }

        case VIEW_ACTIVE_USER_APP_NOTIFICATIONS:
            return {
                ...state,
                activeUserAppNotifications: action.payload.data
            }

        default: 
            return state;
    }
}