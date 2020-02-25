import { appConstants } from "../../_constants/appConstants"

export function shields(state = [] , action) {

    switch(action.type) {

        case appConstants.VIEW_ALL_SHIELDS:
            return {
                ...state,
                items: action.payload
            }

        default: 
            return state;
    }
}