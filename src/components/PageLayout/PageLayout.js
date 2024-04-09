import React from "react";
import styled from "styled-components";

const StyledPageLayout = styled.section`
  width: 100%;
  min-height: ${(props) => (props.height ? props.height : "100%")};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.start ? "flex-start" : "center")};
  flex-direction: column;
  padding: ${(props) => (props.padding ? props.padding : "0")};
  background-color: ${(props) => (!props?.img && props.bg ? props.bg : "")};
  background-image: url(${(props) => (props?.img ? props?.img : "")});
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100% auto;
  overflow-x: hidden;
  margin: ${(props) => (props?.m ? props?.m : "")};

  @media only screen and (max-width: 768px) {
    background-size: auto 100%;
  }
`;

const PageLayout = ({ children, bg, start, padding, img, height, m }) => {
  return (
    <StyledPageLayout
      bg={bg}
      padding={padding}
      start={start}
      img={img}
      height={height}
      m={m}
    >
      {children}
    </StyledPageLayout>
  );
};

export default PageLayout;
