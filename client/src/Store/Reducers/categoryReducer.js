<<<<<<< HEAD
import { VIEW_ALL_CATEGORIES, VIEW_SINGLE_CATEGORY } from "../Actions/new-types";
=======

import { VIEW_ALL_CATEGORIES, VIEW_SINGLE_CATEGORY } from "../actions/new-types";
>>>>>>> 3ca700dfb9422f7ad93eed69a7e3c5102c370ecf

const initialState = {
    allCategories: [],
    singleCategory: []
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

        default: 
            return state;
    }
}