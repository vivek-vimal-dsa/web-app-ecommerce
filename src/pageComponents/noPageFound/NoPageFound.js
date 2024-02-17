import React from "react";
import { PageLayout } from "../../components/PageLayout";
import { PageWidth } from "../../components/Width";
import { Heading } from "../../components/Heading";

const NoPageFound = () => {
  const message = "No Page Found";
  return (
    <PageLayout>
      <PageWidth>
        <Heading Text={message} />
      </PageWidth>
    </PageLayout>
  );
};

export default NoPageFound;
