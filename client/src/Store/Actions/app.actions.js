import { appConstants } from '../_constants/appConstants';
import  appService  from '../_services/app.service';
// import  history  from '../_helpers/history';

export const appActions = {
    getCategories,
    getCategoryInfo,
    filterCategory, 

    getShields,

    selectTrendingApps, 
    
    getListedApps, 
  };

// ***********************************************************
// Category Info 
// ***********************************************************
  function getCategories() {
    return dispatch => {
        dispatch(request());

        appService.getCategories()
        .then(
          data => dispatch(success(data)),
          error => dispatch(failure(error.toString())),
        
        );
    };

    function request(data) { return { type: appConstants.VIEW_ALL_CATEGORIES, payload: data } }
    function success(data) { return { type: appConstants.VIEW_ALL_CATEGORIES, payload: data } }
    function failure(error) { return { type: appConstants.VIEW_ALL_CATEGORIES, error } }
  }

  function getCategoryInfo(catId) {
    return dispatch => {
        dispatch(request());

        appService.getCategoryInfo(catId)
        .then(
          data => dispatch(success(data)),
          //  history.push('/categoryPage'),
          error => dispatch(failure(error.toString())),
        
        );
    };

    function request(data) { return { type: appConstants.VIEW_SINGLE_CATEGORY_INFO, payload: data } }
    function success(data) { return { type: appConstants.VIEW_SINGLE_CATEGORY_INFO, payload: data } }
    function failure(error) { return { type: appConstants.VIEW_SINGLE_CATEGORY_INFO, error } }
  }

  function filterCategory(catId) {
    return dispatch => {
        dispatch(request());

        appService.filterCategory(catId)
        .then(
          data => dispatch(success(data)),
          error => dispatch(failure(error.toString())),
        
        );
    };

    function request(data) { return { type: appConstants.VIEW_SINGLE_CATEGORY, payload: data } }
    function success(data) { return { type: appConstants.VIEW_SINGLE_CATEGORY, payload: data } }
    function failure(error) { return { type: appConstants.VIEW_SINGLE_CATEGORY, error } }

  }

// ***********************************************************
// Shield Info 
// ***********************************************************
  function getShields() {
    return dispatch => {
        dispatch(request());

        appService.getShields()
        .then(
          data => dispatch(success(data)),
          error => dispatch(failure(error.toString())),
        
        );
    };

    function request(data) { return { type: appConstants.VIEW_ALL_SHIELDS, payload: data } }
    function success(data) { return { type: appConstants.VIEW_ALL_SHIELDS, payload: data } }
    function failure(error) { return { type: appConstants.VIEW_ALL_SHIELDS, error } }
  }
// ***********************************************************
// Trending Apps
// ***********************************************************
  function selectTrendingApps() {
    return dispatch => {
        dispatch(request());

        appService.selectTrendingApps()
        .then(
          data => dispatch(success(data)),
          error => dispatch(failure(error.toString())),
        
        );
    };

    function request(data) { return { type: appConstants.SELECT_TRENDING_APPS, payload: data } }
    function success(data) { return { type: appConstants.SELECT_TRENDING_APPS, payload: data } }
    function failure(error) { return { type: appConstants.SELECT_TRENDING_APPS, error } }
  }
// ***********************************************************
// Get All Listed Apps 
// ***********************************************************
function getListedApps() {
  return dispatch => {
      dispatch(request());

      appService.getListedApps()
      .then(
        data => dispatch(success(data)),
        error => dispatch(failure(error.toString())),
      
      );
  };

  function request(data) { return { type: appConstants.VIEW_ALL_APPS, payload: data } }
  function success(data) { return { type: appConstants.VIEW_ALL_APPS, payload: data } }
  function failure(error) { return { type: appConstants.VIEW_ALL_APPS, error } }
}

