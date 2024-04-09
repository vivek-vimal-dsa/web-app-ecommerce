import { commonAxios } from "../Common";

export const AxiosGet = async ({ endPoint }) => {
  try {
    const res = await commonAxios({
      method: "GET",
      url: endPoint,
    });
    return res;
  } catch (err) {
    throw err;
  }
};
