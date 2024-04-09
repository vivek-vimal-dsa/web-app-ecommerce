import React from "react";
import { Navbar } from "../../components/Navbar";
import { FooterMaster } from "../../components/Footer";
import PageLayout from "../../components/PageLayout/PageLayout";

const CommonPage = ({ Children }) => {
  return (
    <PageLayout img="https://wallpaperaccess.com/full/2825704.gif">
      <Navbar />
      {Children}
      <FooterMaster />
    </PageLayout>
  );
};

export default CommonPage;
