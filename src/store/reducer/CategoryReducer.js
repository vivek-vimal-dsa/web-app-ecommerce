import { CATEGORY } from "../action/ActionType";
import { productData } from "../../pageComponents/productNewArrival/DummyData";

const uniqueCategory = [];
export const categoryReducer = (state = uniqueCategory, action) => {
  if (action?.type === CATEGORY) {
    if (productData?.length > 0) {
      productData.map((e) =>
        uniqueCategory?.find((i) => i === e?.category)
          ? null
          : uniqueCategory.push(e?.category)
      );
    }

    return [...state];
  } else {
    return state;
  }
};
