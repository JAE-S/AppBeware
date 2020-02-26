import { categoryConstants } from '../_constants/categoryConstants';
import  categoryService  from '../_services/categoryService';
import  history  from '../_helpers/history';

export const categoryActions = {
    viewAllCategories,
    viewSingleCategory,
    viewSingleCategoryInfo
}

function viewAllCategories () {
    
    return dispatch => {
        dispatch(request());

        categoryService.viewAllCategories()
        .then(
            data => dispatch(success(data)),
            error => dispatch(failure(error.toString()))
        );
    };
    
    function request(data) { return { type: categoryConstants.VIEW_ALL_CATEGORIES_REQUEST, payload: data } }
    function success(data) { return { type: categoryConstants.VIEW_ALL_CATEGORIES_SUCCESS, payload: data } }
    function failure(error) { return { type: categoryConstants.VIEW_ALL_CATEGORIES_FAILURE, error } }
    
}

function viewSingleCategory (catId) {

    return dispatch => {
        dispatch(request());

        categoryService.viewSingleCategory(catId)
        .then(
            data => dispatch(success(data)),
            error => dispatch(failure(error.toString()))
        );
    };
    
    function request(data) { return { type: categoryConstants.VIEW_SINGLE_CATEGORY_REQUEST, payload: data } }
    function success(data) { return { type: categoryConstants.VIEW_SINGLE_CATEGORY_SUCCESS, payload: data } }
    function failure(error) { return { type: categoryConstants.VIEW_SINGLE_CATEGORY_FAILURE, error } }
    
}

function viewSingleCategoryInfo (catId) {

    return dispatch => {
        dispatch(request());

        categoryService.viewSingleCategoryInfo(catId)
        .then(
            data => dispatch(success(data)),
            history.push('/categoryPage'),
            error => dispatch(failure(error.toString()))
        );
    };
    
    function request(data) { return { type: categoryConstants.VIEW_SINGLE_CATEGORY_INFO_REQUEST, payload: data } }
    function success(data) { return { type: categoryConstants.VIEW_SINGLE_CATEGORY_INFO_SUCCESS, payload: data } }
    function failure(error) { return { type: categoryConstants.VIEW_SINGLE_CATEGORY_INFO_FAILURE, error } }
    
}
