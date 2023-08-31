import axios from "axios";

const httpClient = axios.create({
  // baseURL: "http://localhost:8080/",
  // 192.168.250.212
  baseURL: import.meta.env.VITE_APP_ENV === "develop" ? import.meta.env.VITE_DEV_URL : import.meta.env.VITE_PRO_URL,
});


httpClient.interceptors.request.use(async function (config) {
  const token = await localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default httpClient;