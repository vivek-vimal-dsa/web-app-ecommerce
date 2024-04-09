import axios from "axios";
import { BASE_URL } from "../constants";

const token = sessionStorage.getItem("token");
const formatToken = `Bearer ${token}`;

console.log(`..`, formatToken);

export const commonAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: formatToken,
  },
});
