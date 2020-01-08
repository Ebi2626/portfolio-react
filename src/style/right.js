import styled from "styled-components";

const Right = styled.div`
  position: fixed;
  display: block;
  width: 0;
  height: 0%;
  right: 5vmin;
  top: calc(50% - 30px);
  transform: transtalety(-50%);
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-left: 15px solid #aaa;
  border-radius: 5px;
  opacity: 0.3;
  transition: opacity 0.3s linear;
`;

export default Right;
