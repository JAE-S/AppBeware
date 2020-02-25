import { shieldConstants } from '../../_constants/shieldConstants'

const initialState = {
    allShields: []
};

export default function(state=initialState, action) {

    switch(action.type) {

        case shieldConstants.VIEW_ALL_SHIELDS_SUCCESS:
            return {
                ...state,
                allShields: action.payload.data
            }
    
        default: 
            return state;
    }
}
