import { CLEAR_USER, SET_USER } from "../actions/clientActions";

const initialState = {
  user: null,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CLEAR_USER:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
