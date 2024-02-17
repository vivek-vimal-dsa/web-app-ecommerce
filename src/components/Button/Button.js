import React from "react";
import styled from "styled-components";
import Spinner from "../Spinner";
import { motion } from "framer-motion";

const StyledButton = styled(motion.button)`
  color: ${(props) => (props.color ? props.color : "#242323")};
  font-size: ${(props) =>
    props.nav ? "18px" : props.fontSize ? props.fontSize : "20px"};
  font-weight: ${(props) => (props.fw ? props.fw : "700")};
  line-height: ${(props) => (props.noLineHeight ? "1" : "24.3px")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "0em")};
  padding: ${(props) =>
    props.nav ? "2px" : props.padding ? props.padding : "0.85rem 2rem"};
  border-radius: ${(props) => (props.br ? props.br : "4px")};
  border: ${(props) => (props.lightBorder ? "1.2px solid #FFFFFF" : "none")};
  cursor: pointer !important;
  pointer-events: ${(props) => (props?.isLoading ? "none" : "all")};
  min-width: ${(props) => (props.width ? props.width : "15rem")};
  background: ${(props) => (props.bg ? props.bg : "#0096FF")};
  margin: ${(props) => (props.m ? props.m : "")};
  height: ${(props) => (props.height ? props.height : "")};
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = (props) => {
  const { onClick = () => {}, isLoading } = props;

  return (
    <StyledButton
      onClick={onClick}
      {...props}
      type="submit"
      style={{
        opacity: isLoading || props?.dis ? 0.3 : 1,
      }}
      whileHover={{
        scale: 1.1,
      }}
    >
      {isLoading && <Spinner />} {props?.text ? props.text : "button"}
    </StyledButton>
  );
};

export default Button;
