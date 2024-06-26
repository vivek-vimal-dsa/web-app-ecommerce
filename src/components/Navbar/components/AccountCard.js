import React from "react";
import styled from "styled-components";
import { Text } from "../../Text";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const StyledCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  padding: 1rem;
  position: absolute;
  top: 5rem;
  right: 2rem;
  z-index: 999;
  min-width: 8rem;
  background-color: #fff;
  border-radius: 1rem;

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const AccountCard = (props) => {
  const { onAccount, setIsAccountCard } = props;

  const navigate = useNavigate();

  const onLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    toast.success("Signout Successfully");
    setIsAccountCard(() => false);
    navigate("/");
  };

  return (
    <StyledCard>
      <Text
        Text="Signout"
        lh="2rem"
        cursor="pointer"
        onClick={onLogout}
        center
      />
      <Text
        Text="Details"
        lh="2rem"
        onClick={onAccount}
        cursor="pointer"
        center
      />
    </StyledCard>
  );
};

export default AccountCard;
