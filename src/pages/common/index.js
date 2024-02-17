import React from "react";
import { Navbar } from "../../components/Navbar";
import { FooterMaster } from "../../components/Footer";

const CommonPage = ({ Children }) => {
  return (
    <>
      <Navbar />
      {Children}
      <FooterMaster />
    </>
  );
};

export default CommonPage;
