import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledHeading = styled(motion.h1)`
  font-size: ${(props) => (props.fs ? props.fs : "28px")};
  font-weight: ${(props) => (props.fw ? props.fw : "700")};
  line-height: ${(props) => (props.lh ? props.lh : 0)};
  color: ${(props) => (props.color ? props.color : "#000000")};
  background: ${(props) =>
    props.gradient ? "linear-gradient(#5E8CC9, #6166AE)" : null};
  -webkit-background-clip: ${(props) => (props.gradient ? "text" : null)};
  -webkit-text-fill-color: ${(props) =>
    props.gradient ? "transparent" : null};
  margin: ${(props) => (props.m ? props.m : "")};
  text-align: ${(props) => (props.center ? "center" : "left")} !important;
  letter-spacing: ${(props) => (props.ls ? props.ls : "")};
  text-decoration: ${(props) => (props.decoration ? props.decoration : "none")};
  text-transform: ${(props) => (props.capital ? "upper-case" : "lower-case")};
  width: ${(props) => (props.width ? props.width : "initial")};
  font-style: ${(props) => (props?.italic ? "italic" : "normal")};

  @media only screen and (max-width: 1200px) {
    font-size: ${(props) =>
      props.xm ? props.xm : props.fs ? props.fs : "25px"};
    line-height: ${(props) => (props.lhXm ? props.lhXm : "")};
    text-align: ${(props) =>
      props.center ? "center" : props.mcenter ? "center" : "left"} !important;
  }

  @media only screen and (max-width: 1200px) {
    font-size: ${(props) =>
      props?.xsm
        ? props?.xsm
        : props.xm
        ? props.xm
        : props.fs
        ? props.fs
        : "25px"};
    line-height: ${(props) =>
      props?.mlh ? props?.mlh : props.lh ? props.lh : 0};
  }

  @media only screen and (max-width: 768px) {
    font-size: ${(props) => (props.ms ? props.ms : "20px")};
    line-height: ${(props) => (props.lhMs ? props.lhMs : "")};
    width: ${(props) => (props.mWidth ? props.mWidth : "initial")};
    margin: ${(props) => (props.sm ? props.sm : props?.m ? props?.m : "")};
  }

  @media only screen and (max-width: 380px) {
    display: ${(props) => (props?.null ? "none" : "")};
  }
`;

const Heading = (props) => {
  const { Text, initialX, animateX, initialY, animateY, duration, delay } =
    props;
  return (
    <StyledHeading
      {...props}
      initial={{ x: initialX, y: initialY }}
      animate={{ x: animateX, y: animateY }}
      transition={{ duration: duration, delay: delay }}
    >
      {Text ? Text : ""}
    </StyledHeading>
  );
};

export default Heading;
