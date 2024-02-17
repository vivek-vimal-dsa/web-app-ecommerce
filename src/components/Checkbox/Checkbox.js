import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.input`
  cursor: pointer;
  width: ${(props) => (props?.width ? props?.width : "1.5rem")};
  height: ${(props) => (props?.height ? props?.height : "1.5rem")};
  margin: ${(props) => (props?.m ? props?.m : 0)};
`;

const Checkbox = (props) => {
  const { id, name, value, onChange } = props;
  return (
    <StyledCheckbox
      type="checkbox"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Checkbox;
