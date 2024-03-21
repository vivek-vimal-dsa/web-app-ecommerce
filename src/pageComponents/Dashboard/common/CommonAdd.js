import React, { useEffect, useState } from "react";
import Flex from "../../../components/Styling/Flex";
import { Text } from "../../../components/Text";
import AddCommonCard from "./components/AddCommonCard";
import { type } from "../../../constants";
import { AxiosGet, axiosDelete } from "../../../api";
import Spinner from "../../../components/Spinner";
import { ImCross } from "react-icons/im";
import toast from "react-hot-toast";
import { Button } from "../../../components/Button";
import { motion } from "framer-motion";

const CommonAdd = (props) => {
  const { toggleButton } = props;

  const obj = {
    url: "",
    title: "",
    description: "",
    price: "",
    category: "",
  };

  const [formData, setFormData] = useState(obj);
  const [title, setTitle] = useState("");
  const [endPoint, setPointName] = useState("");
  const [timeToFetchGet, setTimeToFetchGet] = useState(false);

  const [displayData, setDisplayData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  const getFun = () => {
    setIsLoading(true);
    AxiosGet({ endPoint })?.then((res) => {
      setIsLoading(false);
      setDisplayData(res?.data);
    });
  };

  const deleteApiCall = (_id) => {
    axiosDelete({ endPoint, payload: { _id } })?.then((res) => {
      if (res?.status === 200) {
        //toast.success(res?.data);
        setTimeToFetchGet(() => !timeToFetchGet);
      } else {
        //toast.error(res?.data);
      }
    });
  };

  const onDelete = (_id) => {
    toast((t) => (
      <div>
        <Text Text="Are you sure to delete ?" fs="1.75rem" lh="3rem" />
        <Flex>
          <Button
            text="Yes"
            width="4rem"
            onClick={() => {
              deleteApiCall(_id);
              toast.dismiss(t.id);
            }}
          />
          <Button
            text="No"
            width="4rem"
            m="0 0 0 0.75rem"
            onClick={() => toast.dismiss(t.id)}
          />
        </Flex>
      </div>
    ));
  };

  useEffect(() => {
    switch (toggleButton) {
      case type?.product?.key:
        setTitle("Add Product");
        setPointName("product");
        AxiosGet({ endPoint: "category" })?.then((res) => {
          setCategoryData(res?.data);
        });
        setFormData(obj);
        break;
      case type?.brand?.key:
        setTitle("Add Brand Image");
        setPointName("brand");
        setFormData({ url: "" });
        break;
      case type?.category?.key:
        setTitle("Add Category");
        setPointName("category");
        setFormData({ title: "" });
        break;
      case type?.slide?.key:
        setTitle("Add Slide Image");
        setPointName("slideImg");
        setFormData({ url: "" });
        break;
      default:
        setTitle("Add");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleButton]);

  useEffect(() => {
    if (endPoint) {
      getFun();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeToFetchGet, endPoint]);

  const commonCardProps = {
    title,
    endPoint,
    timeToFetchGet,
    setTimeToFetchGet,
    formData,
    setFormData,
    categoryData,
    ...props,
  };

  return (
    <Flex
      height="550px"
      bs="rgba(0, 0, 0, 0.09) 0px 3px 12px;"
      overflowY
      p="2rem"
      noCenter
      jc="space-between"
      mColumn
      mp="2rem 0.5rem"
      mHeight="100%"
      color="#FFF"
      br="1.25rem"
    >
      <Flex width="50%" m10Width="100%" column noCenter={!isLoading}>
        {isLoading ? (
          <Spinner m="4rem 0 0 0" />
        ) : (
          <Flex
            wrap
            column={
              toggleButton === type?.brand?.key ||
              toggleButton === type?.slide?.key
                ? false
                : true
            }
            noCenter
          >
            {displayData?.map((item) =>
              toggleButton === type?.brand?.key ||
              toggleButton === type?.slide?.key ? (
                <div style={{ position: "relative" }}>
                  <img
                    src={item?.url}
                    alt=""
                    style={{ height: "6rem", width: "7rem", margin: "1rem" }}
                  />
                  <ImCross
                    color="red"
                    style={{
                      cursor: "pointer",
                      position: "absolute",
                      top: 0,
                      right: 0,
                    }}
                    onClick={() => onDelete(item?._id)}
                  />
                </div>
              ) : (
                <Flex>
                  <Text Text={item?.title} lh="2rem" sm="0 0 0 1rem" />
                  <ImCross
                    color="red"
                    style={{ margin: "0 0 0 2rem", cursor: "pointer" }}
                    onClick={() => onDelete(item?._id)}
                  />
                </Flex>
              )
            )}
          </Flex>
        )}
      </Flex>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, delay: 0.5 }}
      >
        <AddCommonCard {...commonCardProps} />
      </motion.div>
    </Flex>
  );
};

export default CommonAdd;
