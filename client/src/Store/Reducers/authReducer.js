import { USER_INFO, UPDATE_NAME, UPDATE_EMAIL, UPDATE_PHONE, UPDATE_PASSWORD, REGISTER_ACCOUNT } from "../Actions/new-types"

const initialState = {
    userInfo: []
}

export default function(state=initialState, action) {
   
   switch(action.type) {
       
        case USER_INFO:
            return {
            ...state,
            userInfo: action.payload.data.userInfo
        } 

        case UPDATE_NAME:
            return {
                ...state,
                upName: action.payload.data
            }


        case UPDATE_EMAIL:
            return {
                ...state,
                upEmail: action.payload.data
            }
            

        case UPDATE_PHONE:
                return {
                    ...state,
                    upPhone: action.payload.data
                }
                

        case UPDATE_PASSWORD:
                return {
                    ...state,
                    upPass: action.payload.data
                }

        case REGISTER_ACCOUNT:
                return {
                    ...state,
                    register: action.payload.data
                }

        default: 
            return state;
    }
}