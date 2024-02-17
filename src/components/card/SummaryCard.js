import React from "react";
import { Heading } from "../Heading";
import Flex from "../Styling/Flex";
import styled from "styled-components";
import { Text } from "../Text";
import { Line } from "../Line";
import { Button } from "../Button";

const StyledCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  width: 45rem;
  position: relative;
  padding: 3rem;
  margin: 2rem 0 0 0;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 450px) {
    padding: 2rem 1rem;
  }
`;

const SummaryCard = (props) => {
  const { cartItem } = props;

  let totalAmount = 0;
  cartItem?.map((amount) => {
    totalAmount = totalAmount + amount?.price;
  });

  return (
    <StyledCard>
      <Heading Text="Summary" lh="0px" />
      {cartItem?.map((item) => (
        <Flex jc="space-between" m="2rem 0 0 0">
          <Flex width="15rem">
            <Text Text={item?.title?.slice(0, 15) + "..."} fs="1rem" lh="0px" />
            <span style={{ margin: "0 1rem" }}>*</span>
            <Text Text={item?.currentCount} fs="1rem" lh="0px" />
          </Flex>

          <Text Text={item?.price.toFixed(2)} fs="1rem" lh="0px" />
        </Flex>
      ))}

      <Line m="1rem 0 0 0" />
      <Flex jc="space-between" p="1.5rem 0">
        <Heading Text="Total" fs="1rem" />
        <Heading Text={totalAmount.toFixed(2)} fs="1rem" />
      </Flex>
      <Button text="Checkout" width="100%" />
    </StyledCard>
  );
};

export default SummaryCard;
