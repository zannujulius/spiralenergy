import axios from "axios";
import toast from "react-hot-toast";
import { getToken } from "./token";
const controller = new AbortController();

const instance = axios.create({
  baseURL: "https://api.app.voltz.africa",
});

instance.interceptors.request.use(async (config) => {
  try {
    let token = await getToken("spiral_token");
    let username = await getToken("spiral_username");
    if (config.data) {
      config.data.sessionid = token;
      config.data.callerid = username;
    }
    config.signal = controller.signal;
    return config;
  } catch (err) {
    toast.error(err);
  }
});

instance.interceptors.response.use(
  (response) => {
    // console.log(response, "line 27");
    return response;
  },
  (err) => {
    if (err.response && err.response.status == 403) {
      // redirect to login page
      // console.log("Got here");
      return (window.location.href = "/");
    }
    if (err.response && err.response.status >= 500) {
      // interval server error
      console.log(err.response, "line controller");
      // window.location.href = "/servererror";
    }
    // console.log(err.message, "line 36");
    return Promise.reject(err);
  }
);

export default instance;
