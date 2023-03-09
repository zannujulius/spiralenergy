import { getToken } from "./token";
import axios from "./axios";

async function client(
  endpoint,
  { data, method, token, headers: customHeaders, ...customConfig } = {}
) {
  const config = {
    method,
    data:
      {
        ...data,
        callerid: getToken("spiral_username"),
        sessionid: getToken("spiral_token"),
      } || undefined,
    url: endpoint,
    headers: {
      "Content-Type": data ? "application/json" : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  return axios(config)
    .then((resp) => {
      return Promise.resolve(resp);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export { client };
