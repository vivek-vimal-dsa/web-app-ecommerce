import React from "react";
import { NoPageFound } from "../../pageComponents/noPageFound";
import CommonPage from "../common";

const NoPageFoundMasterPage = () => {
  return <CommonPage Children={<NoPageFound />} />;
};

export default NoPageFoundMasterPage;
