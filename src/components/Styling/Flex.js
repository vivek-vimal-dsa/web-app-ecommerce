import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "100%")};
  align-items: ${(props) =>
    props.noCenter ? "flex-start" : props?.align ? props?.align : "center"};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => (props.jc ? props.jc : "flex-start")};
  margin: ${(props) => (props.m ? props.m : "")};
  flex-wrap: ${(props) => (props?.wrap ? "wrap" : "nowrap")};
  padding: ${(props) => (props?.p ? props?.p : "")};
  height: ${(props) => (props?.height ? props?.height : "")};
  position: ${(props) => (props?.position ? props?.position : "")};
  box-shadow: ${(props) => (props?.bs ? props?.bs : "")};
  overflow-y: ${(props) => (props?.overflowY ? "auto" : "visible")};

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0096FF;
    border-radius: 20px;
  }

  @media (max-width: 1400px) {
    width: ${(props) =>
      props?.m14Width ? props?.m14Width : props.width ? props.width : "100%"};
  }

  @media (max-width: 1200px) {
    flex-direction: ${(props) =>
      props.column || props.lColumn ? "column" : "row"};
    margin: ${(props) => (props.sM ? props.sM : props.m ? props.m : "")};
    width: ${(props) =>
      props?.mWidth
        ? props?.mWidth
        : props?.m14Width
        ? props?.m14Width
        : props.width
        ? props.width
        : "100%"};
    align-items: ${(props) =>
      props?.mCenter
        ? "center"
        : props.noCenter
        ? "flex-start"
        : props?.align
        ? props?.align
        : "center"};
  }

  @media (max-width: 768px) {
    display: ${(props) => (props?.hide ? "none" : "flex")};
    justify-content: ${(props) =>
      props.mjc ? props.mjc : props?.jc ? props?.jc : "flex-start"};
    flex-direction: ${(props) =>
      props.column || props.lColumn || props.mColumn ? "column" : "row"};
    width: ${(props) =>
      props?.m10Width
        ? props?.m10Width
        : props?.mWidth
        ? props?.mWidth
        : props?.m14Width
        ? props?.m14Width
        : props.width
        ? props.width
        : "100%"};
    padding: ${(props) => (props?.mp ? props?.mp : props?.p ? props?.p : "")};
    height: ${(props) =>
      props?.mHeight ? props?.mHeight : props?.height ? props?.height : ""};
  }

  @media only screen and (max-width: 390px) {
    width: ${(props) =>
      props?.xsw
        ? props?.xsw
        : props?.m10Width
        ? props?.m10Width
        : props?.mWidth
        ? props?.mWidth
        : props?.m14Width
        ? props?.m14Width
        : props.width
        ? props.width
        : "100%"};
    justify-content: ${(props) =>
      props?.xjc
        ? props?.xjc
        : props.mjc
        ? props.mjc
        : props?.jc
        ? props?.jc
        : "flex-start"};
  }
`;

const Flex = ({
  children,
  column,
  scolumn,
  jc,
  m,
  mColumn,
  lColumn,
  noCenter,
  width,
  sM,
  wrap,
  p,
  height,
  position,
  bs,
  overflowY,
  mWidth,
  m14Width,
  hide,
  mjc,
  m10Width,
  mp,
  mCenter,
  align,
  mHeight,
  xsw,
  xjc,
}) => {
  return (
    <StyledFlex
      column={column}
      scolumn={scolumn}
      jc={jc}
      m={m}
      mColumn={mColumn}
      lColumn={lColumn}
      noCenter={noCenter}
      width={width}
      sM={sM}
      wrap={wrap}
      p={p}
      height={height}
      position={position}
      bs={bs}
      overflowY={overflowY}
      mWidth={mWidth}
      m14Width={m14Width}
      hide={hide}
      mjc={mjc}
      m10Width={m10Width}
      mp={mp}
      mCenter={mCenter}
      align={align}
      mHeight={mHeight}
      xsw={xsw}
      xjc={xjc}
    >
      {children}
    </StyledFlex>
  );
};

export default Flex;
