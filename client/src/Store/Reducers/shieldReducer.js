import { VIEW_ALL_SHIELDS } from "../Actions/new-types";

const initialState = {
    allShields: []
};

export default function(state=initialState, action) {

    switch(action.type) {

        case VIEW_ALL_SHIELDS:
            return {
                ...state,
                allShields: action.payload.data
            }

        default: 
            return state;
    }
}