import styled from "styled-components";

const Text = styled.p`
  position: relative;
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  color: lightblue;
  max-width: 400px;
  &:before {
    content: "Click on picture to display";
    position: absolute;
    display: block;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    text-align: center;
    font-size: 10px;
    font-style: italic;
    color: #999;
  }
`;

export default Text;
