import { FETCH_USER } from "./types";
import axios from "axios";

export const fetchUser = () => async dispatch => {
  const user = await axios.get("/api/current_user");
  let profile = user.data.auth0Profile && user.data.auth0Profile._json
  dispatch({ type: FETCH_USER, payload: profile });
};
