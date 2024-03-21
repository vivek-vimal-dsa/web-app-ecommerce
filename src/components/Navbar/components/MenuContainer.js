import React from "react";
import { NavItem } from "./NavbarCss";
import { useNavigate } from "react-router-dom";

const MenuContainer = () => {
  const path = window.location.pathname;
  const navigate = useNavigate();
  const router = (path) => {
    navigate(path);
  };
  return (
    <>
      <NavItem
        onClick={() => router("/dashboard")}
        style={{ color: path === "/dashboard" ? "#0096FF" : "#000" }}
      >
        DASHBOARD
      </NavItem>

      <NavItem
        onClick={() => router("/product")}
        style={{ color: path === "/product" ? "#0096FF" : "#000" }}
      >
        CATEGORY
      </NavItem>

      <NavItem
        onClick={() => router("/account")}
        style={{ color: path === "/account" ? "#0096FF" : "#000" }}
      >
        ACCOUNT
      </NavItem>
    </>
  );
};

export default MenuContainer;
