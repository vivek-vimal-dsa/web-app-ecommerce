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
        style={{ color: path === "/dashboard" ? "green" : "#000" }}
      >
        DASHBOARD
      </NavItem>

      <NavItem
        onClick={() => router("/product")}
        style={{ color: path === "/product" ? "green" : "#000" }}
      >
        CATEGORY
      </NavItem>

      <NavItem
        onClick={() => router("/account")}
        style={{ color: path === "/account" ? "green" : "#000" }}
      >
        ACCOUNT
      </NavItem>
    </>
  );
};

export default MenuContainer;
