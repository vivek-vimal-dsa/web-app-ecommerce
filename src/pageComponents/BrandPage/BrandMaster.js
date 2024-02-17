import React, { useEffect, useState } from "react";
import { PageLayout } from "../../components/PageLayout";
import { PageWidth } from "../../components/Width";
import Flex from "../../components/Styling/Flex";
import { AxiosGet } from "../../api/components/GET";
import Spinner from "../../components/Spinner";
import { motion } from "framer-motion";

const BrandMaster = () => {
  const [brandImg, setBrandImg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    AxiosGet({ endPoint: "brand" })?.then((res) => {
      setIsLoading(false);
      setBrandImg(res?.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageLayout height="100%" bg="#0096FF">
      <PageWidth>
        <Flex wrap jc={isLoading ? "center" : ""} xjc="center">
          {isLoading ? (
            <Spinner m="3rem 0" />
          ) : (
            brandImg?.map((img) => (
              <motion.img
                src={img?.url}
                alt=""
                style={{
                  width: "7.5rem",
                  height: "5rem",
                  margin: "2rem",
                  borderRadius: "0.25rem",
                  cursor: "pointer",
                }}
                initial={{ x: 0, y: 5 }}
                animate={{ x: 0, y: -5 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))
          )}
        </Flex>
      </PageWidth>
    </PageLayout>
  );
};

export default BrandMaster;
