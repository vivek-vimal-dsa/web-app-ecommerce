import axios from "axios";
import { BASE_URL } from "../constants";

const token = window.localStorage.getItem("token");
const formatToken = `Bearer ${token}`;

export const commonAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: formatToken,
  },
});
