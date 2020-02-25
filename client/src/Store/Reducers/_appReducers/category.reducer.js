import { appConstants } from '../../_constants/appConstants'


export const allCategories = (state = [], action) => {

    switch(action.type) {

        case appConstants.VIEW_ALL_CATEGORIES:
            return {
                ...state,
                items: action.payload
            }

        default: 
            return state;
    }
}

export const singleCategory = (state = [], action) => {

    switch(action.type) {


        case appConstants.VIEW_SINGLE_CATEGORY:
            return {
                ...state,
                items: action.payload
            }

        default: 
            return state;
    }
}

export const singleCategoryInfo = (state = {}, action) => {

    switch(action.type) {

            case appConstants.VIEW_SINGLE_CATEGORY_INFO:
                return {
                    ...state,
                    items: action.payload
                }
    
        default: 
            return state;
    }
}