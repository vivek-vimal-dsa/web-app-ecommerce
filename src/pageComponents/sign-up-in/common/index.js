import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Heading } from "../../../components/Heading";
import { Text } from "../../../components/Text";
import { TiStar } from "react-icons/ti";
import Flex from "../../../components/Styling/Flex";
import toast from "react-hot-toast";
import { AxiosPost } from "../../../api";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "../../../components/Checkbox";
import { tokenAction } from "../../../store/action";
import { useDispatch } from "react-redux";
import { Modal } from "react-responsive-modal";

const StyledSignUp = styled.form`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  position: relative;
  border-radius: 1.75rem;
  border: 1px solid #fff;

  @media only screen and (max-width: 548px) {
    padding: 3rem 1.5rem 2.5rem 1.5rem;
    width: 100%;
  }
`;

const SignIN = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  cursor: pointer;
`;

const WaitingGif = styled.div`
  min-height: 18rem;
  max-width: 35rem;
  background-image: url("https://i.pinimg.com/originals/d5/a2/b0/d5a2b01b8294bfb8678d67342b106795.gif");
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 548px) {
    min-height: auto;
    width: 100%;
  }
`;

const SignUpIn = (props) => {
  const { isUpIn, setIsUpIn } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formObj = {
    userName: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(formObj);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    if (isUpIn === "signIn") {
      const { userName, ...newObj } = formObj;
      setFormData(newObj);
    } else if (isUpIn === "signUp") {
      setFormData(formObj);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpIn]);

  const onChange = (change) => {
    setFormData((prev) => ({
      ...prev,
      [change.target.name]: change.target.value,
    }));
  };

  const onCheckboxChange = () => {
    setIsChecked(() => !isChecked);
  };

  const onContinue = () => {
    setFormData(() => ({
      email: "vivekvimal50@gmail.com",
      password: "Vivek123@",
    }));
  };

  const signInUpProps = {
    endPoint: isUpIn === "signIn" ? "auth/signIn" : "auth/signUp",
    payload: formData,
  };

  const handleSubmit = (sub) => {
    sub.preventDefault();

    const userName = isUpIn === "signUp" ? formData?.userName : true;
    if (!userName || !formData?.email || !formData?.password) {
      toast.error("Please fill all the required fields");
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsModelOpen(true);
      }, 4500);
      AxiosPost({ ...signInUpProps }).then(async (res) => {
        setIsLoading(false);
        setIsModelOpen(false);
        if (res?.status === 200) {
          dispatch({
            ...tokenAction,
            payload: { token: res?.data?.token, user: res.data.user.email },
          });
          sessionStorage.setItem("token", res?.data?.token);
          sessionStorage.setItem("user", res.data.user.email);
          toast.success(res?.data?.message);
          if (isUpIn === "signUp") {
            setIsUpIn("signIn");
          } else {
            navigate("/home");
          }
        } else {
          toast.error(res?.response?.data?.message);
        }
      });
    }
  };

  const margin = "0 0 0.5rem 0";
  const placeholderText = "please enter ";

  return (
    <StyledSignUp onSubmit={handleSubmit}>
      <SignIN
        onClick={() =>
          isUpIn === "signUp" ? setIsUpIn("signIn") : setIsUpIn("signUp")
        }
      >
        <Text Text={isUpIn === "signUp" ? "Sign In" : "Sign Up"} color="#FFF" />
      </SignIN>

      <Heading
        Text={isUpIn === "signIn" ? "Sign In" : "Sign Up"}
        center
        m="0 0 2rem 0"
        color="#FFF"
      />

      {isUpIn === "signUp" && (
        <>
          <div style={{ margin: margin }}>
            <Flex>
              <Text Text="User Name" lh="2.5rem" color="#FFF" />
              <TiStar color="#FFF" />
            </Flex>
            <Input
              name="userName"
              value={formData?.userName}
              placeholder={placeholderText + "user name"}
              width="23rem"
              mWidth="100%"
              onChange={onChange}
            />
          </div>
        </>
      )}

      <div style={{ margin: margin }}>
        <Flex>
          <Text Text="E-Mail" lh="2.5rem" color="#FFF" />
          <TiStar color="#FFF" />
        </Flex>
        <Input
          name="email"
          value={formData?.email}
          placeholder={placeholderText + "e-mail"}
          width="23rem"
          mWidth="100%"
          onChange={onChange}
        />
      </div>

      <div style={{ margin: margin }}>
        <Flex jc="space-between">
          <Flex>
            <Text Text="Password" lh="2.5rem" color="#FFF" />

            <TiStar color="#FFF" />
          </Flex>
          <Flex width="5rem">
            <Text transform="capitalize" Text={"Show"} color="#FFF" />
            <Checkbox
              id={1}
              name={"showHidePass"}
              value={isChecked}
              onChange={onCheckboxChange}
              width="1rem"
              height="1rem"
              m="0 0 0 1rem"
            />
          </Flex>
        </Flex>
        <Input
          name="password"
          value={formData?.password}
          placeholder={placeholderText + "password"}
          width="23rem"
          mWidth="100%"
          onChange={onChange}
          type={isChecked ? "text" : "password"}
        />
      </div>

      <Button
        text={isUpIn === "signIn" ? "Sign In" : "Sign Up"}
        m="1rem 0 0 0"
        width="100%"
        isLoading={isLoading}
      />

      {isUpIn === "signIn" && (
        <Button
          text={`Continue without sign ${isUpIn === "signIn" ? "In" : "Up"}`}
          m="1.75rem 0 0 0"
          width="100%"
          color="#FFF"
          onClick={onContinue}
          dis={isLoading}
        />
      )}

      <Modal open={isModelOpen} onClose={() => setIsModelOpen(false)} center>
        <WaitingGif style={{ backgroundColor: "red" }}>
          <Text Text="Please be patient" lh="2.5rem" fs="1.5rem" />
          <Text
            Text="Services are hosted on free server so it will take time only for first login"
            lh="2rem"
            fs="1.5rem"
          />
        </WaitingGif>
      </Modal>
    </StyledSignUp>
  );
};

export default SignUpIn;
