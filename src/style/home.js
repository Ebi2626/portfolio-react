import styled from "styled-components";

const HomeBox = styled.div`
  display: flex;
  position: relative;
  width: calc(100vmin - 150px);
  height: calc(100vmin - 150px);
  border-radius: 50%;
  flex-direction: row;
  border: solid 15px blue;
  box-shadow: 0px 0px 15px 4px blue;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 10;
`;

export default HomeBox;
