import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Flex from "../Styling/Flex";
import { Input } from "../Input";

const SearchButton = styled(FaSearch)`
  cursor: pointer;
  margin: 0 0.75rem 0 0;
  position: absolute;
  right: 0;
`;

const Search = (props) => {
  const { onSearch = () => {}, onChange = () => {}, searchinput } = props;
  return (
    <Flex width="30rem" m10Width="20rem" position="relative">
      <Input
        placeholder="Search"
        width="100%"
        onChange={onChange}
        value={searchinput}
      />
      <SearchButton size="1.75rem" onClick={onSearch} />
    </Flex>
  );
};

export default Search;
