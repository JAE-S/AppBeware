import API from "../../utils/API";
import { VIEW_ALL_CATEGORIES, VIEW_SINGLE_CATEGORY, VIEW_SINGLE_CATEGORY_INFO } from "./new-types";

export const viewAllCategories = () => dispatch => {

    API.getCategories()
        .then(allCategories => dispatch({
            type: VIEW_ALL_CATEGORIES,
            payload: allCategories
        }))
        .catch(err => console.log(err));
    
}

export const viewSingleCategory = (catId) => dispatch => {
    API.filterCategory(catId)
        .then(singleCategory => dispatch({
            type: VIEW_SINGLE_CATEGORY,
            payload: singleCategory
        }))
        .catch(err => console.log(err));

} 

export const viewSingleCategoryInfo = (catId) => dispatch => {
    API.getCategoryInfo(catId)
        .then(singleCategoryInfo => dispatch({
            type: VIEW_SINGLE_CATEGORY_INFO,
            payload: singleCategoryInfo
        }))
        .catch(err => console.log(err));
}
