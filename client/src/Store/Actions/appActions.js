import API from "../../utils/API";
import { VIEW_ALL_APPS, VIEW_SINGLE_APPS, VIEW_APP_NAMES } from "./new-types";

export const viewAllListedApps = () => dispatch => {
    API.getListedApps()
        .then(allListedApps => dispatch({
            type: VIEW_ALL_APPS,
            payload: allListedApps
        }))
        .catch(err => console.log(err));
}

export const viewAppNames = () => dispatch => {
    API.getAppNames()
        .then(allAppNames => dispatch({
            type: VIEW_APP_NAMES,
            payload: allAppNames
        }))
        .catch(err => console.log(err));
}

export const viewSingleApp = (appId) => dispatch => {
    // TODO:
}