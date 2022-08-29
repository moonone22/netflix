import axios from "axios";

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers:{"Content-type":"application/json"},
})

api.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log("request :",config)
    //모든 api가 호출 될떄 마타 consle.log 해주세요
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("get response :",response)
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default api