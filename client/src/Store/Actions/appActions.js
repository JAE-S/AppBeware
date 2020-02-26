import { appConstants } from '../_constants/appConstants';
import  appService  from '../_services/appService';
import  history  from '../_helpers/history';
// import { push } from 'connected-react-router'

export const appActions = {
    viewAllListedApps,
    viewAppNames,
    viewSingleApp,
    selectTrendingApps,
    generateShieldsForApps,
    viewAppReviews,
    search42Text,
    search42IosId,
    addTempAppListing
  };


function viewAllListedApps () {

    return dispatch => {
        dispatch(request());

        appService.viewAllListedApps()
        .then(
            data => dispatch(success(data)),
            error => dispatch(failure(error.toString())),

        );
    };

    function request(data) { return { type: appConstants.VIEW_ALL_APPS_REQUEST, payload: data } }
    function success(data) { return { type: appConstants.VIEW_ALL_APPS_SUCCESS, payload: data } }
    function failure(error) { return { type: appConstants.VIEW_ALL_APPS_FAILURE, error } }

}


function viewAppNames () {

    return dispatch => {
        dispatch(request());

        appService.viewAppNames()
        .then(
            data => dispatch(success(data)),
            error => dispatch(failure(error.toString())),

        );
    };

    function request(data) { return { type: appConstants.VIEW_APP_NAMES_REQUEST, payload: data } }
    function success(data) { return { type: appConstants.VIEW_APP_NAMES_SUCCESS, payload: data } }
    function failure(error) { return { type: appConstants.VIEW_APP_NAMES_FAILURE, error } }

}

function viewSingleApp (appId) {

    return dispatch => {
        dispatch(request());

        appService.viewSingleApp(appId)
        .then(
            data => dispatch(success(data)),
            history.push('/appPage'),
            error => dispatch(failure(error.toString())),

        );
    };

    function request(data) { return { type: appConstants.VIEW_SINGLE_APP_REQUEST, payload: data } }
    function success(data) { return { type: appConstants.VIEW_SINGLE_APP_SUCCESS, payload: data } }
    function failure(error) { return { type: appConstants.VIEW_SINGLE_APP_FAILURE, error } }

}

function selectTrendingApps () {

    return dispatch => {
        dispatch(request());

        appService.selectTrendingApps()
        .then(
            data => dispatch(success(data)),
            error => dispatch(failure(error.toString())),

        );
    };

    function request(data) { return { type: appConstants.SELECT_TRENDING_APPS_REQUEST, payload: data } }
    function success(data) { return { type: appConstants.SELECT_TRENDING_APPS_SUCCESS, payload: data } }
    function failure(error) { return { type: appConstants.SELECT_TRENDING_APPS_FAILURE, error } }

}

function generateShieldsForApps () {

    return dispatch => {
        dispatch(request());

        appService.generateShieldsForApps()
        .then(
            data => dispatch(success(data)),
            error => dispatch(failure(error.toString())),

        );
    };

    function request(data) { return { type: appConstants.GENERATE_SHIELDS_FOR_APPS_REQUEST, payload: data } }
    function success(data) { return { type: appConstants.GENERATE_SHIELDS_FOR_APPS_SUCCESS, payload: data } }
    function failure(error) { return { type: appConstants.GENERATE_SHIELDS_FOR_APPS_FAILURE, error } }

}

function viewAppReviews (appId) {

    return dispatch => {
        dispatch(request());

        appService.viewAppReviews(appId)
        .then(
            data => dispatch(success(data)),
            error => dispatch(failure(error.toString())),

        );
    };

    function request(data) { return { type: appConstants.VIEW_APP_REVIEWS_REQUEST, payload: data } }
    function success(data) { return { type: appConstants.VIEW_APP_REVIEWS_SUCCESS, payload: data } }
    function failure(error) { return { type: appConstants.VIEW_APP_REVIEWS_FAILURE, error } }

}

function search42Text (queryText, platform) {

    return dispatch => {
        dispatch(request());

        appService.search42Text(queryText, platform)
        .then(
            data => dispatch(success(data)),
            error => dispatch(failure(error.toString())),

        );
    };

    function request(data) { return { type: appConstants.SEARCH_42_TEXT_REQUEST, payload: data } }
    function success(data) { return { type: appConstants.SEARCH_42_TEXT_SUCCESS, payload: data } }
    function failure(error) { return { type: appConstants.SEARCH_42_TEXT_FAILURE, error } }

}

function search42IosId (iosId) {

    return dispatch => {
        dispatch(request());

        appService.search42IosId(iosId)
        .then(
            data => dispatch(success(data)),
            error => dispatch(failure(error.toString())),

        );
    };

    function request(data) { return { type: appConstants.SEARCH_42_IOS_ID_REQUEST, payload: data } }
    function success(data) { return { type: appConstants.SEARCH_42_IOS_ID_SUCCESS, payload: data } }
    function failure(error) { return { type: appConstants.SEARCH_42_IOS_ID_FAILURE, error } }

}

function addTempAppListing (tempAppData) {

    return dispatch => {
        dispatch(request());

        appService.addTempAppListing(tempAppData)
        .then(
            data => dispatch(success(data)),
            error => dispatch(failure(error.toString())),

        );
    };

    function request(data) { return { type: appConstants.ADD_TEMP_LISTING_REQUEST, payload: data } }
    function success(data) { return { type: appConstants.ADD_TEMP_LISTING_SUCCESS, payload: data } }
    function failure(error) { return { type: appConstants.ADD_TEMP_LISTING_FAILURE, error } }

}
