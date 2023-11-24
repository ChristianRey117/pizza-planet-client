import axios from "axios";

export const AxiosInterceptor = () => {
  axios.interceptors.request.use((request) => {
    const loader = document.getElementById("loader");
    loader.classList.add("loader-section");
    const spinner = document.getElementById("spinner");
    loader.style.display = "";
    return request;
  });

  axios.interceptors.response.use((response) => {
    const loader = document.getElementById("loader");
    loader.classList.remove("loader-section");
    const spinner = document.getElementById("spinner");
    loader.style.display = "none";

    return response;
  });
};
