import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { Dropdown } from "../../../../components/Dropdown";
import { Heading } from "../../../../components/Heading";
import { type } from "../../../../constants";
import { Line } from "../../../../components/Line";
import { AxiosPost } from "../../../../api/index";
import toast from "react-hot-toast";

const StyledCard = styled.form`
  width: 30rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 0.5rem;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    margin: 1rem 0 0 0;
    width: 100%;
  }
`;

const Container = styled.div`
  margin: 0 0 1rem 0;
`;

const AddCommonCard = (props) => {
  const {
    toggleButton,
    title,
    endPoint,
    timeToFetchGet,
    setTimeToFetchGet,
    formData,
    setFormData,
    categoryData,
  } = props;

  const [isLoading, setIsLoading] = useState(false);

  const pleaseEnter = "Please Enter ";

  const onFieldChange = (data) => {
    setFormData((prev) => ({ ...prev, [data.target.name]: data.target.value }));
  };

  const handleSubmit = (data) => {
    data.preventDefault();
    const formProps = {
      endPoint: endPoint,
      payload: formData,
    };

    let flag = false;
    if (
      Object.values(formData)?.map((item) => {
        if (!item) {
          flag = true;
        }
      })
    )
      if (flag) {
        toast.error("Please fill all the required field/s");
      } else {
        setIsLoading(true);
        AxiosPost({ ...formProps })?.then((res) => {
          if (res?.status === 201) {
            setFormData([]);
            setIsLoading(false);
            setTimeToFetchGet(() => !timeToFetchGet);
            toast.success(res?.data?.message);
          } else {
            toast.error(res?.data?.message);
            setIsLoading(false);
          }
        });
      }
  };

  return (
    <StyledCard onSubmit={handleSubmit}>
      <Heading Text={title} lh="3rem" />
      <Line m="0 0 1.5rem 0" width="100%" />
      {toggleButton !== type?.category?.key && (
        <Container>
          <Text Text="Image Url" m="0.5rem 0" ls="0.05rem" />
          <Input
            width="96%"
            placeholder={pleaseEnter + "Image Url"}
            onChange={onFieldChange}
            name="url"
            value={formData?.url}
          />
        </Container>
      )}

      {(toggleButton === type?.product?.key ||
        toggleButton === type?.category?.key) && (
        <Container>
          <Text Text="Title" m="0.5rem 0" ls="0.05rem" />
          <Input
            width="96%"
            placeholder={pleaseEnter + "Title"}
            onChange={onFieldChange}
            name="title"
            value={formData?.title}
          />
        </Container>
      )}

      {toggleButton === type?.product?.key && (
        <>
          <Container>
            <Text Text="Description" m="0.5rem 0" ls="0.05rem" />
            <Input
              width="96%"
              placeholder={pleaseEnter + "Description"}
              onChange={onFieldChange}
              name="description"
              value={formData?.description}
            />
          </Container>

          <Container>
            <Text Text="Price" m="0.5rem 0" ls="0.05rem" />
            <Input
              width="96%"
              placeholder={pleaseEnter + "Price"}
              onChange={onFieldChange}
              name="price"
              value={formData?.price}
            />
          </Container>

          <Container>
            <Text Text="Category" m="0.5rem 0" ls="0.05rem" />
            <Dropdown width="100%" onChange={onFieldChange} name="category">
              <option disabled selected={formData?.category ? false : true}>
                select category
              </option>
              {categoryData?.map((item) => (
                <option value={item?.title} key={"key" + item?._id}>
                  {item?.title}
                </option>
              ))}
            </Dropdown>
          </Container>
        </>
      )}

      <Button text="Add" m="0.5rem 0" width="100%" isLoading={isLoading} />
    </StyledCard>
  );
};

export default AddCommonCard;
