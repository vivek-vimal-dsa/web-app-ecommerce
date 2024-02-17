import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREMENT,
  DECREMENT,
  CLEAR_ALL,
} from "../action/ActionType";

const initialState = {
  itemCount: 0,
  cart: [],
};

let defaultPrice = [];

export const cartReducer = (state = initialState, action) => {
  // console.log(`action`, action);
  // console.log(`state`, state);

  const index = state.cart?.findIndex((e) => e?._id === action?.payload?._id);
  let updatedCart = [];
  if (index <= -1) {
    defaultPrice.push({
      _id: action?.payload?._id,
      price: action?.payload?.price,
    });
  }
  switch (action?.type) {
    case ADD_ITEM:
      let flag = true;
      if (state.cart.length > 0 && index > -1) {
        const addIdx = defaultPrice?.findIndex(
          (e) => e?._id === action?.payload?._id
        );
        state.cart[index].currentCount++;
        state.cart[index].price =
          state.cart[index].price + defaultPrice[addIdx]?.price;
        flag = false;
      } else {
        state.cart.push({ ...action.payload, currentCount: 1 });
      }
      return {
        ...state,
        itemCount: flag ? state?.itemCount + 1 : state.itemCount,
      };

    case REMOVE_ITEM:
      state.cart.splice(index, 1); // ---> not re-rendering issue (not updating) so i have to add below line
      updatedCart = [...state.cart];
      return {
        ...state,
        cart: updatedCart,
        itemCount: state?.itemCount - 1,
      };

    case INCREMENT:
      state.cart[index].currentCount++; // ---> not re-rendering issue (not updating) so i have to add below line
      const incIdx = defaultPrice?.findIndex(
        (e) => e?._id === action?.payload?._id
      );
      state.cart[index].price =
        state.cart[index].price + defaultPrice[incIdx]?.price;
      updatedCart = [...state.cart];
      return {
        ...state,
        cart: updatedCart,
      };

    case DECREMENT:
      state.cart[index].currentCount--; // ---> not re-rendering issue (not updating) so i have to add below line
      const decIdx = defaultPrice?.findIndex(
        (e) => e?._id === action?.payload?._id
      );
      state.cart[index].price =
        state.cart[index].price - defaultPrice[decIdx]?.price;
      updatedCart = [...state.cart];
      return {
        ...state,
        cart: updatedCart,
      };

    case CLEAR_ALL:
      return initialState;
    default:
      return state;
  }
};
