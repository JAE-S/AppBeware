import { VIEW_ALL_CATEGORIES, VIEW_SINGLE_CATEGORY, VIEW_SINGLE_CATEGORY_INFO } from "../Actions/new-types";

const initialState = {
    allCategories: [],
    singleCategory: [],
    singleCategoryInfo: {}
};

export default function(state=initialState, action) {

    switch(action.type) {

        case VIEW_ALL_CATEGORIES:
            return {
                ...state,
                allCategories: action.payload.data
            }

        case VIEW_SINGLE_CATEGORY:
            return {
                ...state,
                singleCategory: action.payload.data
            }

        case VIEW_SINGLE_CATEGORY_INFO:
            return {
                ...state,
                singleCategoryInfo: action.payload.data[0]
            }

        default: 
            return state;
    }
}