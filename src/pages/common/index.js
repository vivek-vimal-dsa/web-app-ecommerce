import React from "react";
import { Navbar } from "../../components/Navbar";
import { FooterMaster } from "../../components/Footer";

const CommonPage = ({ Children }) => {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <Navbar />
      {Children}
      <FooterMaster />
    </div>
  );
};

export default CommonPage;
