import React from "react";
import { PageLayout } from "../../components/PageLayout";
import { PageWidth } from "../../components/Width";
import { AccountCard } from "../../components/card";

const AccountMaster = () => {
  return (
    <PageLayout height="calc(100vh - 12rem)">
      <PageWidth>
        <AccountCard />
      </PageWidth>
    </PageLayout>
  );
};

export default AccountMaster;
