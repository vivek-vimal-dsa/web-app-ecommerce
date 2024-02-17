import React from "react";
import styled from "styled-components";

const StyledDropdown = styled.select`
  font-size: 20px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.075em;
  border: 2px solid #0096FF;
  border-radius: ${(props) => (props.br ? props.br : "0.5rem")};
  background-color: #ffffff;
  margin: ${(props) => (props.m ? props.m : "")};
  height: ${(props) => (props.height ? props.height : "3rem")};
  width: ${(props) => (props.width ? props.width : "12rem")};
  padding: 0 1rem;

  &::placeholder {
    color: #666666;
    font-size: 16px;
  }

  &:focus {
    outline: none;
  }
`;

const Dropdown = (props) => {
  const { placeholder } = props;
  return <StyledDropdown {...props} placeholder={placeholder} />;
};

export default Dropdown;
