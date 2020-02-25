import { userConstants } from '../../_constants/userConstants';

const initialState = {
  userInfo: {}
};

export default function(state=initialState, action) {

  console.log("insde user.reducer")

  switch (action.type) {

    case userConstants.GET_FULL_USER_INFO_REQUEST:
      return {
        loading: true
      };

    case userConstants.GET_FULL_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: action.payload.data.userInfo,
      };

    // case userConstants.GETALL_FAILURE:
    //   return { 
    //     error: action.error
    //   };
    // case userConstants.DELETE_REQUEST:
    //   // add 'deleting:true' property to user being deleted
    //   return {
    //     ...state,
    //     items: state.items.map(user =>
    //       user.id === action.id
    //         ? { ...user, deleting: true }
    //         : user
    //     )
    //   };
    // case userConstants.DELETE_SUCCESS:
    //   // remove deleted user from state
    //   return {
    //     items: state.items.filter(user => user.id !== action.id)
    //   };
    // case userConstants.DELETE_FAILURE:
    //   // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
    //   return {
    //     ...state,
    //     items: state.items.map(user => {
    //       if (user.id === action.id) {
    //         // make copy of user without 'deleting:true' property
    //         const { deleting, ...userCopy } = user;
    //         // return copy of user with 'deleteError:[error]' property
    //         return { ...userCopy, deleteError: action.error };
    //       }

    //       return user;
    //     })
    //   };
    default:
      return state
  }
}