import { IS_LOGIN, LOGIN_SUCCESS, USER_LIST } from "./types";
import axios from "axios";

export const signin = (params, navigate) => {
  return ((dispatch) => {
    console.log("Params :: ", params);

    axios.post('https://reqres.in/api/login', {
      email: params.email,
      password: params.password
    })
      .then(({ data }) => {
        console.log("Data :: ", data);
        dispatch({ type: LOGIN_SUCCESS, payload: data });
        navigate("dashboard")
      })
      .catch(e => {
        console.log("Get User Error :: ", e);
      });
  })
}
