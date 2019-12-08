import { VIEW_ALL_APPS, VIEW_SINGLE_APP, VIEW_APP_NAMES, SELECT_TRENDING_APPS, GENERATE_SHIELDS_FOR_APPS, VIEW_APP_REVIEWS } from "../Actions/new-types";

const initialState = {
    allListedApps: [],
    singleApp: {},
    allAppNames: [],
    trendingApps: [],
    shieldsForApps: [],
    appReviews: []
};

export default function(state=initialState, action) {

    switch(action.type) {

        case VIEW_ALL_APPS:
            return {
                ...state,
                allListedApps: action.payload.data
            }

        case VIEW_APP_NAMES:
            return {
                ...state,
                allAppNames: action.payload.data
            }

        case SELECT_TRENDING_APPS:
            return {
                ...state,
                trendingApps: action.payload.data
            }

        case VIEW_SINGLE_APP:
            return {
                ...state,
                singleApp: action.payload.data[0]
            }

        case GENERATE_SHIELDS_FOR_APPS:
            return {
                ...state,
                shieldsForApps: action.payload.data
            }

        case VIEW_APP_REVIEWS:
            return {
                ...state,
                appReviews: action.payload.data
            }

        default: 
            return state;
    }
}