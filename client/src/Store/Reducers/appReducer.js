import { VIEW_ALL_APPS, VIEW_SINGLE_APP, VIEW_APP_NAMES, SELECT_TRENDING_APPS, GENERATE_SHIELDS_FOR_APPS, VIEW_APP_REVIEWS, SEARCH_42_TEXT, SEARCH_42_IOS_ID } from "../Actions/new-types";

const initialState = {
    allListedApps: [],
    singleApp: {},
    allAppNames: [],
    trendingApps: [],
    shieldsForApps: [],
    appReviews: [],
    appTextSearchResults: [],
    iosAppIndividualSearchResult: {}
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

        case SEARCH_42_TEXT:
            return {
                ...state,
                appTextSearchResults: action.payload.data.results
            }

        case SEARCH_42_IOS_ID:
            return {
                ...state,
                iosAppIndividualSearchResult: action.payload.data
            }

        default: 
            return state;
    }
}