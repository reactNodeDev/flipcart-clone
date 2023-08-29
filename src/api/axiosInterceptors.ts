import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import GLOBAL from "../Global";

const axiosClient : AxiosInstance = axios.create({
    baseURL : GLOBAL.MAIN_BASE_URL,
    timeout: 2000
})  

const onRequest = (config : InternalAxiosRequestConfig) : InternalAxiosRequestConfig => {
    return config
}

const onResponse = (res : AxiosResponse) : AxiosResponse => {
    return res
}

const onResponseError = (error : AxiosError) : AxiosError => {
    return error
}

axiosClient.interceptors.request.use(onRequest)
axiosClient.interceptors.response.use(onResponse, onResponseError)

export default axiosClient