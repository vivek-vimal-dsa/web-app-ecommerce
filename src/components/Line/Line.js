import React from "react";
import styled from "styled-components";

const StyledLine = styled.div`
  height: ${(props) => (props.height ? props.height : "1px")};
  width: ${(props) => (props.width ? props.width : "100%")};
  background: ${(props) => (props.bg ? props.bg : "rgba(0,0,0,0.2)")};
  margin: ${(props) => (props.m ? props.m : "0")};

  @media only screen and (max-width: 1600px) {
    width: ${(props) => (props.w16 ? props.w16 : "")};
    margin: ${(props) => (props.m16 ? props.m16 : "")};
  }

  @media only screen and (max-width: 1200px) {
    width: ${(props) => (props.w12 ? props.w12 : "")};
  }

  @media only screen and (max-width: 1000px) {
    width: ${(props) => (props.w10 ? props.w10 : "")};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.w768 ? props.w768 : "")};
  }
`;

const Line = (props) => {
  return <StyledLine {...props} />;
};

export default Line;
