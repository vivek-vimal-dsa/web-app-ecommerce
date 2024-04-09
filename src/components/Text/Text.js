import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  font-size: ${(props) => (props.fs ? props.fs : "18px")};
  color: ${(props) => (props.color ? props.color : "#000000")};
  text-align: ${(props) =>
    props.center ? "center" : props?.align ? props?.align : "left"};
  letter-spacing: ${(props) => (props.ls ? props.ls : "0em")};
  line-height: ${(props) => (props.lh ? props.lh : "16px")};
  font-weight: ${(props) => (props.fw ? props.fw : "400")};
  cursor: ${(props) => (props?.cursor ? props?.cursor : "")};
  margin: ${(props) => (props.m ? props.m : "")};
  text-transform: ${(props) => (props?.transform ? props?.transform : "")};

  background: ${(props) =>
    props.gradient
      ? "linear-gradient(93.01deg, #672CD5 2.23%, #E21185 97.5%)"
      : null};
  -webkit-background-clip: ${(props) => (props.gradient ? "text" : null)};
  background-clip: text;
  -webkit-text-fill-color: ${(props) =>
    props.gradient ? "transparent" : null};

  &:hover {
    color: ${(props) => (props.hoverColor ? props.hoverColor : null)};
  }

  @media only screen and (max-width: 1200px) {
    font-size: ${(props) => (props.xmsize ? props.xmsize : "20px")};
  }

  @media only screen and (max-width: 1200px) {
    text-align: ${(props) =>
      props.center
        ? "center"
        : props.mcenter
        ? "center"
        : props?.align
        ? props?.align
        : "left"};
  }

  @media only screen and (max-width: 768px) {
    font-size: ${(props) => (props.msize ? props.msize : "17px")};
    margin: ${(props) => (props.sm ? props.sm : props?.m ? props?.m : "")};
  }
`;

const Text = (props) => {
  const { onClick } = props;
  return (
    <StyledText onClick={onClick} {...props}>
      {props.Text ? props.Text : ""}
    </StyledText>
  );
};

export default Text;
