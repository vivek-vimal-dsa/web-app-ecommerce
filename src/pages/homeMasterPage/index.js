import React from "react";
import { HomeMaster } from "../../pageComponents/home";
import { BrandMaster } from "../../pageComponents/BrandPage";
import CommonProduct from "../../pageComponents/productNewArrival/common";
import CommonPage from "../common";

const HomeMasterPage = () => {
  return (
    <CommonPage
      Children={
        <>
          <HomeMaster />
          <BrandMaster />
          <CommonProduct />
        </>
      }
    />
  );
};

export default HomeMasterPage;
