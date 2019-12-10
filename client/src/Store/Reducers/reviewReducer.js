import { ADD_SHIELD_TO_APP, REVIEW_SUBMIT, RESET_ADDED_SHIELDS } from "../Actions/new-types";

const initialState = {
    addedShields: [],
    completeReview: {}
};

export default function(state=initialState, action) {

    switch(action.type) {

        case ADD_SHIELD_TO_APP:
            // return {
            //     ...state,
            //     addedShields: action.payload.data
            // }

            return { 
                ...state,
                addedShields: action.payload
                // addedShields: state.addedShields.concat(action.payload)
            }

        case REVIEW_SUBMIT:
            return {
                ...state,
                completeReview: action.payload
            }

        case RESET_ADDED_SHIELDS:
            // return {
            //     ...state,
            //     addedShields: initialState.addedShields
            // }
            return initialState
    
        default: 
            return state;
    }
}