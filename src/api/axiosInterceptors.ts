import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import GLOBAL from "../Global";

const axiosClient: AxiosInstance = axios.create({
  baseURL: GLOBAL.MAIN_BASE_URL,
  timeout: 2000,
});

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  return config;
};

const onRequestError = (err:AxiosError) => {
  if(err) {
    throw new Error(`Some error occured in request : ${err}`)
  }
  Promise.reject(err)
}

const onResponse = (res: AxiosResponse): AxiosResponse => {
  return res;
};

const onResponseError = (error: AxiosError): AxiosError => {
  if (axios.isAxiosError(error)) {
    switch(error.status) {
      case 401 : throw Error(`Bad Request Error : ${error.status} `)
      case 403 : throw Error(`Forbidden Request Error : ${error.status} `)
      case 404 : throw Error(`Not Found Error : ${error.status} `)
    }
  }
  return error;
};

axiosClient.interceptors.request.use(onRequest, onRequestError,{synchronous:true});
axiosClient.interceptors.response.use(onResponse, onResponseError,{synchronous:true});

export default axiosClient;
