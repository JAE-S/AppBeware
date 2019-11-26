import axios from "axios";
import API from "../../utils/API";
import { VIEW_ALL_CATEGORIES, VIEW_SINGLE_CATEGORY } from "./new-types";

export const viewAllCategories = () => dispatch => {

    API.getCategories()
        .then(allCategories => dispatch({
            type: VIEW_ALL_CATEGORIES,
            payload: allCategories
        }))
        .catch(err => console.log(err));
    
}