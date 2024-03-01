import axios from "axios";
import { BASE_URL } from "../constants";

const token = window.localStorage.getItem("token");
console.log(`token`, token);
const formatToken = `Bearer ${token}`;
console.log(`formatToken`, formatToken);

export const commonAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: formatToken,
  },
});
