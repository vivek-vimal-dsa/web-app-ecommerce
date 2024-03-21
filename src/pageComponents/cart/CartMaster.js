import React from "react";
import { PageLayout } from "../../components/PageLayout";
import { PageWidth } from "../../components/Width";
import { CartCard, SummaryCard } from "../../components/card";
import Flex from "../../components/Styling/Flex";
import { useSelector, useDispatch } from "react-redux";
import { Heading } from "../../components/Heading";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { removeItem, incItem, decItem } from "../../store/action";

const CartMaster = () => {
  const cartItem = useSelector((item) => item?.cartReducer?.cart);
  const cartLength = cartItem?.length > 0 ? true : false;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeCartCard = (_id) => {
    dispatch({ ...removeItem, payload: { _id } });
  };

  const onIncDecItem = (props) => {
    dispatch({
      type:
        props?.type === "inc"
          ? incItem?.type
          : props?.type === "dec"
          ? decItem?.type
          : null,
      payload: { _id: props?._id },
    });
  };

  const onClick = () => {
    navigate("/product");
  };

  const cardProp = {
    closeCartCard,
    onIncDecItem,
  };

  const summaryCardProp = {
    cartItem,
  };

  return (
    <PageLayout start={cartLength ? true : false} height="calc(100vh - 12rem)">
      {cartLength && (
        <PageWidth height="6rem">
          <Flex>
            <Heading
              Text="Checkout"
              fs="3rem"
              lh="5rem"
              color="#FFF"
              m="1rem 0 0 0"
            />
          </Flex>
        </PageWidth>
      )}

      <PageWidth
        direction={cartLength ? "row" : "column"}
        align={cartLength ? "start" : "center"}
        key={cartLength}
        width="1400px"
      >
        {cartLength ? (
          <Flex lColumn jc="space-between" noCenter mCenter>
            <Flex column noCenter>
              {cartItem?.map((item) => (
                <CartCard
                  img={item?.url}
                  price={item?.price}
                  title={item?.title}
                  category={item?.category}
                  currentItemCount={item?.currentCount}
                  _id={item?._id}
                  {...cardProp}
                />
              ))}
            </Flex>
            <SummaryCard {...summaryCardProp} />
          </Flex>
        ) : (
          <>
            <Heading Text="No Product in the cart" center lh="4rem" color="#FFF"/>
            <Button text="Continue Shopping" onClick={onClick} />
          </>
        )}
      </PageWidth>
    </PageLayout>
  );
};

export default CartMaster;
