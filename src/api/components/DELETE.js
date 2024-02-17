import { commonAxios } from "../Common";

export const axiosDelete = async (props) => {
  const { endPoint, payload } = props;
  try {
    const res = await commonAxios({
      method: "DELETE",
      url: endPoint,
      data: payload,
    });
    return res;
  } catch (err) {
    return err;
  }
};
