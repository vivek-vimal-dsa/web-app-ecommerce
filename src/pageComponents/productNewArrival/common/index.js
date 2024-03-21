import React, { useEffect, useState } from "react";
import { PageLayout } from "../../../components/PageLayout";
import { PageWidth } from "../../../components/Width";
import { Heading } from "../../../components/Heading";
import { Card } from "../../../components/card";
import Flex from "../../../components/Styling/Flex";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { addItem } from "../../../store/action";
import { DetailCard } from "../../../components/card";
import { FilterAndSearchMaster } from "../../../components/FilterAndSearch";
import { AxiosGet } from "../../../api/components/GET";
import { useDispatch } from "react-redux";
import Spinner from "../../../components/Spinner";
import { Pagination } from "../../../components/Pagination";
import { motion } from "framer-motion";

const CommonProduct = () => {
  const dispatch = useDispatch();
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const [searchinput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displayProductData, setDisplayProductData] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState({
    searchButton: false,
    checkboxButton: false,
  });

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [typeData, setTypeData] = useState([]);
  const [change, setChange] = useState(false);

  const path = window.location.pathname;

  const modalFun = (item) => {
    setIsModelOpen(true);
    setCurrentItem(item);
  };

  const addToCart = (item) => {
    dispatch({ ...addItem, payload: item });
  };

  const onChange = (input) => {
    setSearchInput(input.target.value?.toLowerCase());
  };

  const onSearch = () => {
    if (searchinput) {
      setIsSearchClicked((prev) => ({ ...prev, searchButton: true }));
      const filterData = [];

      displayProductData?.map(
        (item) =>
          item?.title?.toLowerCase()?.includes(searchinput) &&
          filterData?.push(item)
      );

      setTypeData([...filterData]);
      totalPageCount(filterData?.length);
    }
  };

  const onCheckboxChange = (props) => {
    setIsSearchClicked((prev) => ({ ...prev, checkboxButton: true }));

    const index = selectedCategory?.findIndex(
      (e) => e?.name === props?.target.name
    );

    if (index > -1) {
      setSelectedCategory((prev) => {
        const updatedArr = [...prev];
        updatedArr[index].isChecked = props?.target.checked;
        return [...updatedArr];
      });
    } else {
      setSelectedCategory((prev) => [
        ...prev,
        {
          //value: props.target.value,
          name: props.target.name,
          isChecked: props.target.checked,
        },
      ]);
    }
  };

  const totalPageCount = (len) => {
    setChange(() => !change);
    setTotalPages(len > 4 ? Math.floor(len / 4) + 1 : 1);
  };

  const displayProd = (data) => {
    if (data?.length > 0) {
      if (currentPage) {
        let count = 4 * (currentPage - 1);
        setDisplayProductData(data?.slice(count, count + 4));
      }
    }
  };

  useEffect(() => {
    setIsLoading(true);
    AxiosGet({ endPoint: "product" })?.then((res) => {
      setIsLoading(false);
      setProductData(res?.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (productData?.length > 0) {
      if (path === "/product") {
        setTypeData([...productData]);
        totalPageCount(productData?.length);
      } else {
        setDisplayProductData(productData?.slice(0, 3));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, productData]);

  useEffect(() => {
    if (!searchinput) {
      if (selectedCategory?.find((e) => e?.isChecked)) {
        setTypeData([...filteredData]);
        totalPageCount(filteredData?.length);
      } else {
        if (isSearchClicked?.searchButton) {
          setTypeData([...productData]);
          totalPageCount(productData?.length);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchinput, isSearchClicked]);

  useEffect(() => {
    const index = selectedCategory?.findIndex((e) => e?.isChecked === true);
    const updatedArr = [];
    setSearchInput("");

    if (index > -1) {
      productData?.map((item) =>
        selectedCategory?.find(
          (e) => e?.isChecked && e?.name === item?.category
        )
          ? updatedArr?.push(item)
          : null
      );
      setFilteredData([...updatedArr]);
      setTypeData([...updatedArr]);
      totalPageCount(updatedArr?.length);
    } else if (isSearchClicked?.checkboxButton) {
      setTypeData([...productData]);
      totalPageCount(productData?.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  useEffect(() => {
    displayProd(typeData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, change]);

  const searchFilterProps = {
    onSearch,
    onChange,
    onCheckboxChange,
    searchinput,
  };

  const paginationProps = {
    currentPage,
    setCurrentPage,
    totalPages,
  };

  return (
    <PageLayout start={path === "/product" ? true : false} padding="2rem 0 0 0">
      <PageWidth>
        <Flex>
          <Heading
            Text={path === "/product" ? "Products" : "New Arrivals"}
            fs="3rem"
            lh="3rem"
            color="#FFF"
          />
        </Flex>
        {path === "/product" && (
          <motion.div
            style={{ width: "100%" }}
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2.5, delay: 0.5 }}
          >
            <FilterAndSearchMaster {...searchFilterProps} />
          </motion.div>
        )}
        <Flex
          wrap
          jc={isLoading ? "center" : ""}
          align="stretch"
          m="1rem 0 2rem 0"
        >
          {isLoading ? (
            <Spinner m="5rem 0 0 0" />
          ) : displayProductData?.length > 0 ? (
            displayProductData?.map((item) => (
              <Card
                modalFun={() => modalFun(item)}
                title={item?.title}
                desc={item?.description}
                price={item?.price}
                img={item?.url}
                addToCart={() => addToCart(item)}
                key={item?._id}
              />
            ))
          ) : (
            <Flex jc="center">
              <Heading
                Text={
                  path === "/product"
                    ? "No Match found"
                    : "No Product available"
                }
                center
                m="2rem 0 0 0"
                lh="4rem"
              />
            </Flex>
          )}

          <Modal
            open={isModelOpen}
            onClose={() => setIsModelOpen(false)}
            center
          >
            <DetailCard currentItem={currentItem} />
          </Modal>
        </Flex>
        {path === "/product" && <Pagination {...paginationProps} />}
      </PageWidth>
    </PageLayout>
  );
};

export default CommonProduct;
