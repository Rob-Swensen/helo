const initialState = {
  username: "",
  profile_pic: "",
  user_id: 0
};

const GET_USER = "GET_USER";
const LOGOUT_USER = "LOGOUT_USER";

export function getUser(userInfo) {
  const { username, profile_pic, user_id } = userInfo;
  return {
    type: GET_USER,
    payload: { username, profile_pic, user_id }
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: {}
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return {
        ...state,
        username: payload.username,
        profile_pic: payload.profile_pic,
        user_id: payload.user_id
      };
      case LOGOUT_USER:
        return{
          ...initialState
        }
    default:
      return state;
  }
}
