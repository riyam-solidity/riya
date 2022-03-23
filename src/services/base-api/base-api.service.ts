import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getUserToken } from "./token.util";

const instance = axios.create();

instance.interceptors.request.use((config: AxiosRequestConfig<any>) => {
  if (!config?.headers) {
    throw new Error(
      `Expected 'config' and 'config.headers' not to be undefined`
    );
  }
  const accessToken = getUserToken();
  const country = localStorage.getItem("country");
  const vehicleType = localStorage.getItem("vehicleType");

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  if (country) {
    config.headers["X_COUNTRY"] = country;
  }

  if (vehicleType) {
    config.headers["X_VEHICLE_TYPE"] = vehicleType;
  }

  return config;
});

instance.interceptors.response.use((response: AxiosResponse<any>) => {
  if (response.data) {
    return response.data;
  }
});

const apiService = {
  get: ({ url, data, headers }: AxiosRequestConfig<any>) => {
    const config = { params: {}, headers: {} };
    if (!url) {
      throw Error("endPoint is required params");
    } else {
      if (data) {
        config.params = data;
      }
      if (headers) {
        config.headers = headers;
      }
      return instance.get(url, config);
    }
  },
  post: ({ url, data, headers }: AxiosRequestConfig<any>) => {
    if (!url || !data) {
      throw Error("endPoint and data are required params");
    }
    return instance.post(url, data, { headers });
  },
  put: ({ url, data, headers }: AxiosRequestConfig<any>) => {
    if (!url || !data) {
      throw Error("endpoint and data are required params");
    }
    return instance.put(url, data, { headers });
  },
};

export { apiService };
