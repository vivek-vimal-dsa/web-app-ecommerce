import React from "react";
import { NavItem } from "./NavbarCss";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MenuContainer = (props) => {
  const { isMobile } = props;
  const path = window.location.pathname;
  const navigate = useNavigate();
  const router = (path) => {
    navigate(path);
  };

  const onLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    toast.success("Signout Successfully");
    navigate("/");
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
      {isMobile && (
        <NavItem onClick={onLogout} style={{ color: "#000" }}>
          SIGN OUT
        </NavItem>
      )}
    </>
  );
};

export default MenuContainer;
