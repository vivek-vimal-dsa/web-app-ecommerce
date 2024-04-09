import axios from "axios";
import { BASE_URL } from "../constants";

export const commonAxios = axios.create({
  baseURL: BASE_URL,
});

commonAxios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    throw error;
  }
);
