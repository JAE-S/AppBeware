import { VIEW_ALL_CATEGORIES, VIEW_SINGLE_CATEGORY } from "../Actions/new-types";

const initialState = {
    allCategories: [],
    singleCategory: []
};

export default function(state=initialState, action) {

    switch(action.type) {

        case VIEW_ALL_CATEGORIES:
            return {
                ...state,
                allCategories: action.payload
            }

        


        default: 
            return state;
    }
}