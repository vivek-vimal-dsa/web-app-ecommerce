import { commonAxios } from "../Common";

export const AxiosPost = async (props) => {
  const { endPoint, payload } = props;

  try {
    const res = await commonAxios({
      url: endPoint,
      method: "POST",
      data: payload,
    });
    return res;
  } catch (err) {
    return err;
  }
};
