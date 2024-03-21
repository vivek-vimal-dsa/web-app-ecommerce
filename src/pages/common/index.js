import React from "react";
import { Navbar } from "../../components/Navbar";
import { FooterMaster } from "../../components/Footer";
import PageLayout from "../../components/PageLayout/PageLayout";

const CommonPage = ({ Children }) => {
  return (
    <PageLayout img="https://cdnb.artstation.com/p/assets/images/images/061/440/105/original/sati-manukian-11.gif?1680792852">
      <Navbar />
      {Children}
      <FooterMaster />
    </PageLayout>
  );
};

export default CommonPage;
