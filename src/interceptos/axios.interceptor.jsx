import axios from "axios";

export const AxiosInterceptor = () => {
  axios.interceptors.request.use((request) => {
    console.log("Start Request", request);
    return request;
  });
};
