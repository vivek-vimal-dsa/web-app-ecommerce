import React, { useState } from "react";
import { PageLayout } from "../../components/PageLayout";
import { PageWidth } from "../../components/Width";
import SignUpIn from "./common";
import img from "../../assets/Background.jpg";

const SignUpInMaster = () => {
  const [isUpIn, setIsUpIn] = useState("signUp");

  const onSignUpIn = () => {};

  const signUpInProps = {
    isUpIn,
    setIsUpIn,
    onClick: onSignUpIn,
  };

  return (
    <PageLayout img={img} height="100vh">
      <PageWidth>
        <SignUpIn {...signUpInProps} />
      </PageWidth>
    </PageLayout>
  );
};

export default SignUpInMaster;
