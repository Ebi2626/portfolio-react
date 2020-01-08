import styled from "styled-components";

const Left = styled.div`
  position: fixed;
  display: block;
  width: 0;
  height: 0%;
  left: 5vmin;
  top: calc(50% - 30px);
  transform: transtalety(-50%);
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-right: 15px solid #aaa;
  border-radius: 5px;
  opacity: 0.3;
  transition: opacity 0.3s linear;
`;

export default Left;
