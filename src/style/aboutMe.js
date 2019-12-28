import styled from "styled-components";

const AboutMeBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  float: left;
  text-align: justify;
  font-size: 1.2rem;
  &::before {
    position: absolute;
    content: "Edwin Harmata";
    font-size: 1.4rem;
    left: 0px;
    top: -60px;
    width: 100%;
    text-align: center;
  }
`;

export default AboutMeBox;
