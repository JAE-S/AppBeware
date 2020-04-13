import { reviewConstants } from '../../_constants/reviewConstants';

const initialState = {
    // addedShields: [],
    completeReview: {}
    // alert: {}
};

export default function(state=initialState, action) {

    switch(action.type) {

        // case reviewConstants.ADD_SHIELD_TO_APP_SUCCESS:
        //     // return {
        //     //     ...state,
        //     //     addedShields: action.payload.data
        //     // }

        //     return { 
        //         ...state,
        //         addedShields: action.payload
        //         // addedShields: state.addedShields.concat(action.payload)
        //     }

        case reviewConstants.REVIEW_SUBMIT_SUCCESS:
            return {
                ...state,
                completeReview: action.payload.data
            }

        // case reviewConstants.RESET_ADDED_SHIELDS_SUCCESS:
        //     // return {
        //     //     ...state,
        //     //     addedShields: initialState.addedShields
        //     // }
        //     return initialState
    
        default: 
            return state;
    }
}