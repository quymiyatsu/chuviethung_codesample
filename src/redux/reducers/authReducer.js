import {
  CURRENT_USER_LOGOUT,
  CURRENT_USER_REGISTER_FINISH,
  CURRENT_USER_LOGIN_FINISH,
  CURRENT_USER_GET_PROFILE_FINISH,
  CURRENT_USER_UPDATE_PROFILE_FINISH
} from '../../config/strings';

const INITIAL = {
  first: false, // true no sync await
  loggedIn: false,
  userdata: null
};

export default (authReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case CURRENT_USER_LOGIN_FINISH:
      return {
        ...state,
        loggedIn: true,
        userdata: action.response.response
      };
    case CURRENT_USER_GET_PROFILE_FINISH:
      return {
        ...state,
        loggedIn: true,
        userdata: action.response.response
      };
    case CURRENT_USER_LOGOUT:
      return {
        state: INITIAL
      };
    case CURRENT_USER_REGISTER_FINISH:
      return {
        ...state,
        loggedIn: true,
        userdata: action.response.response
      };
    case CURRENT_USER_UPDATE_PROFILE_FINISH:
      return {
        ...state,
        userdata: action.response.response
      };
    default:
      return state;
  }
});
