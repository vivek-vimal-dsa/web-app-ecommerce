import styled from "styled-components";
import { motion } from "framer-motion";

export const LeftHeroSec = styled(motion.div)`
  width: auto;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const RightHeroSec = styled(motion.div)`
  display: grid;
  place-items: center;
  width: 600px;
  margin: 0;

  @media only screen and (max-width: 1200px) {
    width: 400px;
    margin: 0;
  }
  @media only screen and (max-width: 900px) {
    width: 350px;
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 2rem 0 0 0;
  }
`;

export const ResponsiveConatiner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 0 1rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeadingConatiner = styled.div`
  margin: 0;

  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 0 1rem 0;
  }
`;
