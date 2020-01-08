import styled from "styled-components";

const Up = styled.div`
  position: fixed;
  display: block;
  width: 0;
  height: 0%;
  bottom: 40px;
  left: calc(50% - 30px);
  transform: transtaletx(-50%);
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 15px solid #aaa;
  border-radius: 5px;
  opacity: 0.3;
  transition: opacity 0.3s linear;
`;

export default Up;
