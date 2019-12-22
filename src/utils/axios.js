import axios from "axios";

// 创建axios实例
const service = axios.create({
    baseURL: "/api/", // api 的 base_url
    timeout: 5000 // 请求超时时间
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
});

// request拦截器
service.interceptors.request.use(
    config => {
        // console.log(config)
        if (store.getters.token) {
          config.headers['vue-token'] = getToken()
        }
        return config;
    },
    error => {
        // Do something with request error
        console.log(error); // for debug
        Promise.reject(error);
    }
);

// response 拦截器
service.interceptors.response.use(
    response => {
        /* code为非200的抛错 */
        // console.log(JSON.stringify(response))
        const res = response.data;
        if (res.code !== 200) {
            console.log(res);
              // if (res.code === 444) {
              // } else {
              // }
              return Promise.reject("error");
        } else {
            return response.data;
        }
    },
    error => {
        console.log(error.response.status + ' ' + error.response.statusText);
        console.log("err：" + error); // for debug
        return Promise.reject(error);
    }
);

export default service;
