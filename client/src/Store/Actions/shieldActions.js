import API from "../../utils/API";
import { VIEW_ALL_SHIELDS } from "./new-types";

export const viewAllShields = () => dispatch => {
    API.getShields()
        .then(allShields => dispatch({
            type: VIEW_ALL_SHIELDS,
            payload: allShields
        }))
        .catch(err => console.log(err));
}
