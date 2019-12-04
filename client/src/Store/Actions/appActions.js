import API from "../../utils/API";
import { VIEW_ALL_APPS, VIEW_SINGLE_APP, VIEW_APP_NAMES, SELECT_TRENDING_APPS } from "./new-types";
import { push } from 'connected-react-router'

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
    API.getSingleApp(appId)
        .then(singleApp => dispatch({
            type: VIEW_SINGLE_APP,
            payload: singleApp
        }))
        .catch(err => console.log(err));
}

export const selectTrendingApps = () => dispatch => {
    API.selectTrendingApps()
        .then(trendingApps => dispatch({
            type: SELECT_TRENDING_APPS,
            payload: trendingApps
        }))
}