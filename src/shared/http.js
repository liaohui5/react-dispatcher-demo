"use strict";

import axios from "axios";

const http = axios.create({
  timeout: 5000,
  baseURL: "http://localhost:8383",
});

http.interceptors.request.use((config) => {
  return config;
});

http.interceptors.response.use((res) => {
  if (res.status !== 200) {
    alert("服务端错误");
    return;
  }
  if (res.data.code !== 0) {
    alert(res.data.msg || "服务端错误");
  }
  return res.data;
});

export default http;
