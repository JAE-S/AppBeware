import API from "../../utils/API";
import { VIEW_ALL_APPS, VIEW_SINGLE_APP, VIEW_APP_NAMES, SELECT_TRENDING_APPS, GENERATE_SHIELDS_FOR_APPS, VIEW_APP_REVIEWS, SEARCH_42_TEXT, SEARCH_42_IOS_ID, ADD_TEMP_LISTING, VIEW_TEMP_SINGLE_APP } from "./new-types";
import { push } from 'connected-react-router'

export const viewAllListedApps = () => dispatch => {
    API.getListedApps()
        .then(allListedApps => dispatch({
            type: VIEW_ALL_APPS,
            payload: allListedApps
        }))
        .catch(err => console.log(err));
}

export const viewAppNames = () => dispatch => {
    API.getAppNames()
        .then(allAppNames => dispatch({
            type: VIEW_APP_NAMES,
            payload: allAppNames
        }))
        .catch(err => console.log(err));
}

export const viewSingleApp = (appId) => dispatch => {
    console.log("Inside viewSingleApp - appActions.js");
    API.getSingleApp(appId)
        .then(singleApp => dispatch({
            type: VIEW_SINGLE_APP,
            payload: singleApp
        }))
        .catch(err => console.log(err));
}

export const selectTrendingApps = () => dispatch => {
    API.selectTrendingApps()
        .then(trendingApps => dispatch({
            type: SELECT_TRENDING_APPS,
            payload: trendingApps
        }))
}

export const generateShieldsForApps = () => dispatch => {
    API.generateShieldsForApps()
        .then (shieldsForApps => dispatch({
            type: GENERATE_SHIELDS_FOR_APPS,
            payload: shieldsForApps
        }))
}

export const viewAppReviews = (appId) => dispatch => {
    console.log("Inside Store / appActions.js - about to do API call");
    API.getAppReviews(appId)
        .then(appReviews => dispatch({
            type: VIEW_APP_REVIEWS,
            payload: appReviews
        }))
}

export const search42Text = (queryText, platform) => dispatch => {
    console.log("Inside Store / appActions - about to search 42 Text");
    API.search42text(queryText, platform)
        .then(appTextSearchResults => dispatch({
            type: SEARCH_42_TEXT,
            payload: appTextSearchResults
        }))
}

export const search42IosId = (iosId) => dispatch => {
    console.log("Inside Store / appActions - about to search by 42 ios ID");
    API.search42IosId(iosId)
        .then(iosAppIndividualSearchResult => dispatch({
            type: SEARCH_42_IOS_ID,
            payload: iosAppIndividualSearchResult
        }))
}

export const addTempAppListing = (tempAppListing) => {
    return {
        type: ADD_TEMP_LISTING,
        payload: tempAppListing
    }
}

// export const viewTempSingleApp = VIEW_TEMP_SINGLE_APP
