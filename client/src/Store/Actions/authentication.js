// import API from "../../utils/API";
// import {USER_INFO, REGISTER_ACCOUNT, UPDATE_EMAIL, UPDATE_NAME, UPDATE_PHONE, UPDATE_PASSWORD} from "./new-types"

// export const userInfo = () => dispatch => {
//     API.userInfo()
//     .then(user => dispatch ({
//         type: USER_INFO,
//         payload: user
//     }))
//     .catch(err => console.log(err))
// }

// export const register = (registration) => dispatch => {
//     API.register(registration)
//     .then(user => dispatch ({
//         type: REGISTER_ACCOUNT,
//         payload: user
//     }))
//     .catch(err => console.log(err))
// }

// export const updateEmail = (update) => dispatch => {
//     API.updateEmail(update)
//     .then(user => dispatch ({
//         type: UPDATE_EMAIL,
//         payload: user
//     }))
//     .catch(err => console.log(err))
// }
// export const updateName = (update) => dispatch => {
//     API.updateName(update)
//     .then(user => dispatch ({
//         type: UPDATE_NAME,
//         payload: user
//     }))
//     .catch(err => console.log(err))
// }
// export const updatePhone = (event, update) => dispatch => {
//     event.preventDefault()
//     API.updatePhone(update)
//     .then(user => dispatch ({
//         type: UPDATE_PHONE,
//         payload: user
//     }))
//     .catch(err => console.log(err))
// }
// export const updatePassword = (update) => dispatch => {
//     API.updatePassword(update)
//     .then(user => dispatch ({
//         type: UPDATE_PASSWORD,
//         payload: user
//     }))
//     .catch(err => console.log(err))
// }
