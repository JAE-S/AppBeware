import { VIEW_ALL_APPS, VIEW_SINGLE_APP, VIEW_APP_NAMES } from "../actions/new-types";

const initialState = {
    allListedApps: [],
    singleApp: {},
    allAppNames: [],
};

export default function(state=initialState, action) {

    switch(action.type) {

        case VIEW_ALL_APPS:
            return {
                ...state,
                allListedApps: action.payload.data
            }

        case VIEW_APP_NAMES:
            return {
                ...state,
                allAppNames: action.payload.data
            }

        case VIEW_SINGLE_APP:
            return {
                ...state,
                singleApp: action.payload.data
            }

        default: 
            return state;
    }
}