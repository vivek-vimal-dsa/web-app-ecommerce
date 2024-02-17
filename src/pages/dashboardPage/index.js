import React from "react";
import CommonPage from "../common";
import { DashboardMaster } from "../../pageComponents/Dashboard";

const DashboardPage = () => {
  return <CommonPage Children={<DashboardMaster />} />;
};

export default DashboardPage;
