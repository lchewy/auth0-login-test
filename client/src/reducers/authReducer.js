import { FETCH_USER } from "../actions/types";

const INITIAL_STATE = {
  profile: {}
}

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case FETCH_USER:
      return {...state, profile: actions.payload};
    default:
      return state;
  }
};
