import axios from "axios"

//使用axios 函数创建一个可以发送请求的实例对象
const instance = axios.create({
  baseURL: "https://api.uomg.com/",
  timeout: 5000,
});

//设置请求拦截器
instance.interceptors.request.use(
  (config) => {
    console.log("请求前拦截器")

    // 请求之前，设置请求信息的方法
    config.headers.Accept = "application/json,text/plain,text/html,*/*"

    //设置完毕  必须返回config
    return config;
  },
  (error) => {
    console.log("请求前拦截异常方法")
    return Promise.reject(error);
  }
);

//设置响应��截器
instance.interceptors.response.use(
  (response) => {
    //响应状态码为200 要执行的方法
    //处理相应数据
    //最后返回respose
    console.log("respose success:")
    console.log(response)
    return response;
  },
  (error) => {
    console.log("response fail")
    console.log(error)

    //最后一定要响应一个promise
    return Promise.reject(error)
  }
);

//使用默认导出暴露instance
export default instance 