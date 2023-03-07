import { getToken } from "./token";
import axios from "./axios";

async function client(
  endpoint,
  { data, method, token, headers: customHeaders, ...customConfig } = {}
) {
  const config = {
    method,
    data: data || undefined,
    url: endpoint,
    headers: {
      Authorization: token ? `Bearer ${getToken("spiral_token")}` : undefined,
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
