import axios from "axios";
import { saveData } from "../../utils/localStorage";

import {
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_PAGE,
} from "./actiontype";

export const loginregister = (payload) => {
  return {
    type: LOGIN_REQ,
    payload,
  };
};

export const sucessLoginreq = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const failureLoginreq = (payload) => {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
};

export const logoutpage = () => {
  return {
    type: LOGOUT_PAGE,
  };
};

export const loginruser = (payload) => (dispatch) => {
  dispatch(loginregister());
  const config = {
    url: "https://json-server-nil.herokuapp.com/tripvillas",
    method: "get",
    params: {
      email: payload.email,
      password: payload.password,
    },
  };
  axios(config)
    .then((res) => {
      if (res.data.length === 0) {
        alert("Email or Password Wrong");
        dispatch(failureLoginreq());
      } else if (res.data.length > 0) {
        let data = res.data[0];
        dispatch(sucessLoginreq(data));
        if (payload.stay === true) {
          let localdata = {
            email: payload.email,
            password: payload.password,
            loginAuth: true,
            id: data.id,
            username: data.username,
          };
          saveData("account", localdata);
        }
        alert("You Have Succesfully logged in");
      }
    })
    .catch((err) => {
      dispatch(failureLoginreq());
    });
};
