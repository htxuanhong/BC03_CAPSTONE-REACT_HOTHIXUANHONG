import axios from "axios";
import { setHideSpinner, setShowSpinner } from "../redux/actions/action";
import { store } from "../redux/reducers/rootReducer";

export const BASE_URL = "https://movienew.cybersoft.edu.vn";

export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMyIsIkhldEhhblN0cmluZyI6IjEwLzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NTk4NzIwMDAwMCIsIm5iZiI6MTY0NTgwODQwMCwiZXhwIjoxNjc2MTM0ODAwfQ.eP1tQ1Ucwbf0A94jW8e7zfHEKZS8iYyG0EIiHa9udpw";

axios.interceptors.request.use(
  function (config) {
    console.log("yes request");

    store.dispatch(setShowSpinner());
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    store.dispatch(setHideSpinner());
    // then
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    store.dispatch(setHideSpinner());

    console.log("error: ", error);

    switch (error.response.status) {
      case 401:
      case 403:
        window.location.href = "/login";
        break;
      default:
        break;
    }
    // catch
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
