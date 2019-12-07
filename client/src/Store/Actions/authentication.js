import API from "../../utils/API";
import {USER_INFO} from "./new-types"

export const userInfo = () => dispatch => {
    API.userInfo()
    .then(user => dispatch ({
        type: USER_INFO,
        payload: user
    }))
    .catch(err => console.log(err))
}