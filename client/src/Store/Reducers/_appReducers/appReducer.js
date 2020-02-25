import { appConstants } from "../../_constants/appConstants"

const initialState = {
    allListedApps: [],
    singleApp: {},
    allAppNames: [],
    trendingApps: [],
    shieldsForApps: [],
    appReviews: [],
    // appTextSearchResults: [],
    // iosAppIndividualSearchResult: {}
};

export default function (state=initialState, action) {

    switch(action.type) {

        case appConstants.VIEW_ALL_APPS_SUCCESS:
            return {
                ...state,
                allListedApps: action.payload.data
            }

        case appConstants.VIEW_APP_NAMES_SUCCESS:
            return {
                ...state,
                allAppNames: action.payload.data
            }

        case appConstants.SELECT_TRENDING_APPS_SUCCESS:
            return {
                ...state,
                trendingApps: action.payload.data
            }

        case appConstants.VIEW_SINGLE_APP_SUCCESS:
            return {
                ...state,
                singleApp: action.payload.data[0]
            }

        case appConstants.GENERATE_SHIELDS_FOR_APPS_SUCCESS:
            return {
                ...state,
                shieldsForApps: action.payload.data
            }

        case appConstants.VIEW_APP_REVIEWS_SUCCESS:
            return {
                ...state,
                appReviews: action.payload.data
            }

        // case appConstants.SEARCH_42_TEXT_SUCCESS:
        //     return {
        //         ...state,
        //         appTextSearchResults: action.payload.data.results
        //     }

        // case appConstants.SEARCH_42_IOS_ID_SUCCESS:
        //     return {
        //         ...state,
        //         iosAppIndividualSearchResult: action.payload.data
        //     }

        default: 
            return state;
    }
}