import React, { useState } from "react";
import Flex from "../Styling/Flex";
import { useSelector } from "react-redux";
import { Heading } from "../Heading";
import {
  StyledNav,
  NavItem,
  CartContainer,
  CartNumberDisplay,
  CartIcon,
  AccountIcon,
  BurgerIcon,
  HomeIcon,
  SideBar,
  CloseIcon,
} from "./components/NavbarCss";
import MenuContainer from "./components/MenuContainer";
import AccountCard from "./components/AccountCard";
import { useNavigate } from "react-router-dom";
import bgImg from "../../assets/Background.png";

const Navbar = () => {
  const number = useSelector((count) => count?.cartReducer?.itemCount);
  const itemDisplay = number > 0 ? number : null;

  const path = window.location.pathname;
  const navigate = useNavigate();

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isAccountCard, setIsAccountCard] = useState(false);

  const onSideBar = () => {
    setIsSideBarOpen(true);
  };

  const onClose = () => {
    setIsSideBarOpen(false);
  };

  const onAccountCard = () => {
    setIsAccountCard(() => !isAccountCard);
  };

  const onCart = () => {
    navigate("/cart");
    setIsAccountCard(() => false);
  };

  const onAccount = () => {
    navigate("/account");
    setIsAccountCard(() => false);
  };

  const onHome = () => {
    navigate("/home");
  };

  const accountCardProp = {
    onAccount,
    setIsAccountCard,
  };

  return (
    <>
      <StyledNav>
        <NavItem onClick={onHome}>
          <Flex width="20rem" mWidth="15rem" m10Width="10rem" xsw="100%">
            <HomeIcon color={path === "/home" ? "green" : "#000"} />
            <Heading
              Text="Let's Shop"
              lh="0"
              color={path === "/home" ? "green" : "#000"}
              null
            />
          </Flex>
        </NavItem>

        <Flex
          width="55rem"
          m14Width="45rem"
          mWidth="35rem"
          m10Width="30rem"
          jc="space-between"
          mjc="flex-end"
        >
          <Flex width="25rem" mWidth="20rem" jc="space-between" hide>
            <MenuContainer />
          </Flex>
          <Flex
            width="8rem"
            mWidth="6rem"
            jc="space-between"
            m="0 5rem 0 0"
            sM="0 3rem 0 0"
          >
            <CartContainer onClick={onCart}>
              <CartIcon color={path === "/cart" ? "green" : "#000"} />
              <CartNumberDisplay path={path}>{itemDisplay}</CartNumberDisplay>
            </CartContainer>

            <>
              <AccountIcon onClick={onAccountCard} />
              {isAccountCard && <AccountCard {...accountCardProp} />}
            </>

            <BurgerIcon onClick={onSideBar} />
          </Flex>
        </Flex>
      </StyledNav>

      {isSideBarOpen && (
        <SideBar img={bgImg}>
          <div style={{ height: "3rem" }} />
          <MenuContainer />
          <CloseIcon onClick={onClose} />
        </SideBar>
      )}
    </>
  );
};

export default Navbar;
