import React from "react";
import { Button } from "../Button";
import Flex from "../Styling/Flex";
import { type } from "../../constants";

const ButtonGroupMaster = (props) => {
  const { toggleButton, onClick } = props;

  return (
    <Flex {...props} wrap mjc="center">
      <Button
        dis={toggleButton !== type?.product?.key}
        br="0"
        text={type?.product?.title}
        onClick={() => onClick(type?.product?.key)}
      />
      <Button
        dis={toggleButton !== type?.brand?.key}
        br="0"
        text={type?.brand?.title}
        onClick={() => onClick(type?.brand?.key)}
      />
      <Button
        dis={toggleButton !== type?.category?.key}
        br="0"
        text={type?.category?.title}
        onClick={() => onClick(type?.category?.key)}
      />
      <Button
        dis={toggleButton !== type?.slide?.key}
        br="0"
        text={type?.slide?.title}
        onClick={() => onClick(type?.slide?.key)}
      />
    </Flex>
  );
};

export default ButtonGroupMaster;
