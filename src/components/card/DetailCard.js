import React from "react";
import { Heading } from "../Heading";
import Flex from "../Styling/Flex";
import styled from "styled-components";
import { Text } from "../Text";

const StyledCard = styled.div`
  width: 100%;
  position: relative;
`;

const Image = styled.div`
  width: 20rem;
  height: 15rem;

  @media only screen and (max-width: 400px) {
    width: 100%;
    height: auto;
  }
`;

const DetailCard = (props) => {
  const { currentItem } = props;

  return (
    <StyledCard>
      <Flex noCenter mColumn>
        <Image>
          <img
            src={currentItem?.url}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </Image>
        <Flex noCenter column jc="space-between" p="1rem 2rem" mp="1rem 0 0 0">
          <Heading Text={currentItem?.title} fs="1.75rem" lh="2.5rem" />
          <Text Text={currentItem?.category} fs="1rem" lh="1.5rem" />
          <Text
            Text={currentItem?.description}
            fs="1.25rem"
            lh="1.75rem"
            m="1rem 0 0 0"
          />
        </Flex>
      </Flex>
    </StyledCard>
  );
};

export default DetailCard;
