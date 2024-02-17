import React from "react";
import styled from "styled-components";

const StyledWidth = styled.section`
  width: ${(props) =>
    props.full ? "100%" : props.width ? props.width : "1500px"};
  height: ${(props) => (props.height ? props.height : "auto")};
  display: flex;
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) => (props.jc ? props.jc : "space-between")};
  flex-direction: ${(props) =>
    props?.direction ? props?.direction : "column"};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  background-color: ${(props) => (props?.bg ? props?.bg : "")};
  border-radius: 1.75rem;
  box-shadow: ${(props) =>
    props?.boxShadow
      ? "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
      : null};

  @media only screen and (max-width: 1600px) {
    width: ${(props) => (props.full ? "100%" : "95%")};
  }
  @meia only screen and (max-width: 1400px) {
    width: ${(props) => (props.full ? "100%" : "98%")};
  }
`;
const PageWidth = ({
  children,
  align,
  full,
  padding,
  margin,
  sp,
  width,
  bg,
  height,
  boxShadow,
  direction,
  jc,
  key,
}) => {
  return (
    <StyledWidth
      align={align}
      full={full}
      padding={padding}
      margin={margin}
      sp={sp}
      width={width}
      bg={bg}
      height={height}
      boxShadow={boxShadow}
      direction={direction}
      jc={jc}
      key={key}
    >
      {children}
    </StyledWidth>
  );
};

export default PageWidth;
