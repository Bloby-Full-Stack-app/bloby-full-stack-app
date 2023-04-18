import _axios from "axios";
import { requestInterceptor, responseInterceptor } from "./interceptors";

const axios = _axios.create({
    // Append endpoint url as the base API url for production.
    // In the development environment, this will be automatically handled by setupProxy.js
    baseURL: process.env.REACT_APP_API_ENDPOINT_URL,
})

axios.interceptors.request.use(requestInterceptor)
axios.interceptors.response.use(responseInterceptor)

export default axios