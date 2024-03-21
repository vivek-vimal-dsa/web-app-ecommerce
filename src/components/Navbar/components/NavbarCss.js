import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineAliwangwang } from "react-icons/ai";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { ImCross } from "react-icons/im";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  position: sticky;
  top: 0;
  z-index: 99;
  border-radius: 0 0 1rem 1rem;
  background-color: rgba(255, 255, 255);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const NavItem = styled.div`
  text-decoration: none;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    margin: 1rem 2rem;
  }
`;

export const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CartNumberDisplay = styled.span`
  position: absolute;
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.5rem;
  background: ${(props) => (props?.path === "/cart" ? "#0096FF" : "#0096FF")};
  padding: 0 0.5rem;
  color: ${(props) => (props?.path === "/cart" ? "#FFF" : "#000")};
`;

const commonCss = `
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;

  @media only screen and (max-width: 1200px) {
    width: 2rem;
    height: 2rem;
  }
  `;

export const CartIcon = styled(FiShoppingCart)`
  ${commonCss}
`;

export const AccountIcon = styled(RiAccountPinCircleFill)`
  ${commonCss}
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const commonCss2 = `
${commonCss}
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const BurgerIcon = styled(CiMenuBurger)`
  ${commonCss2}
`;

export const CloseIcon = styled(ImCross)`
  ${commonCss2}
  position: absolute;
  z-index: 9999;
  right: 3rem;
  top: 2rem;
`;

export const HomeIcon = styled(AiOutlineAliwangwang)`
  width: 3rem;
  height: 3rem;
  margin: 0 0 0 5rem;

  @media only screen and (max-width: 1200px) {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 0 0 3rem;
  }

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const SideBar = styled.div`
  position: fixed;
  z-index: 999;
  min-height: 100vh;
  width: 100%;
  display: none;
  flex-direction: column;
  background-color: #fff;
  top: 0;
  overflow-y: visible;
  background-image: url(${(props) => (props?.img ? props?.img : "")});
  background-position: 0 10vh;
  background-attachment: fixed;
  background-repeat: no-repeat;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;
