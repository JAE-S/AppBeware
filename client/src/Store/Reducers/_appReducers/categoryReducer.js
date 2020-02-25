import { categoryConstants } from '../../_constants/categoryConstants'

const initialState = {
    allCategories: [],
    singleCategory: [],
    singleCategoryInfo: {}
};

export default function(state=initialState, action) {

    switch(action.type) {

        case categoryConstants.VIEW_ALL_CATEGORIES_SUCCESS:
            return {
                ...state,
                allCategories: action.payload.data
            }

        case categoryConstants.VIEW_SINGLE_CATEGORY_SUCCESS:
            return {
                ...state,
                singleCategory: action.payload.data
            }

        case categoryConstants.VIEW_SINGLE_CATEGORY_INFO_SUCCESS:
            return {
                ...state,
                singleCategoryInfo: action.payload.data[0]
            }
    
        default: 
            return state;
    }
}
