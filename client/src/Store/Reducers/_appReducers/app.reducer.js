
import { appConstants } from '../../_constants/appConstants';

// const initialState = {
//     appTextSearchResults: [],
//     iosAppIndividualSearchResult: {}
// };

export const allListedApps = (state = [], action) => {

    switch(action.type) {

        case appConstants.VIEW_ALL_APPS:
            return {
                ...state,
                items: action.payload
            }
        default: 
            return state;
    }
}

export const allAppNames = (state = [], action) => {

    switch(action.type) {

        case appConstants.VIEW_APP_NAMES:
            return {
                ...state,
                items: action.payload
            }
        default: 
            return state;
    }
}

export const trendingApps = (state = [], action) => {

    switch(action.type) {

            case appConstants.SELECT_TRENDING_APPS:
                return {
                    ...state,
                    items: action.payload
                }
        default: 
            return state;
    }
}

export const singleApp = (state = {}, action) => {

    switch(action.type) {

            case appConstants.VIEW_SINGLE_APP:
            return {
                ...state,
                items: action.payload
            }
        default: 
            return state;
    }
}

export const shieldsForApps = (state = [], action) => {

    switch(action.type) {

            case appConstants.GENERATE_SHIELDS_FOR_APPS:
            return {
                ...state,
                items: action.payload
            }
        default: 
            return state;
    }
}

export const appReviews = (state = [], action) => {

    switch(action.type) {

            case appConstants.VIEW_APP_REVIEWS:
            return {
                ...state,
                items: action.payload
            }
        default: 
            return state;
    }
}