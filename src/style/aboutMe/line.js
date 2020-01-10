import styled from "styled-components";

const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 15%;
  font-size: 16px;
  color: blue;
  text-shadow: 0px 0px 2px 2px blue;
  border-bottom: solid 1px blue;
  width: 100%;
  margin: 5px;
  font-family: Roboto;
  &:last-child {
    height: 40%;
  }
  > h2 {
    color: whitesmoke;
  }
  > ul li {
    color: white;
  }
  > ul {
    list-style-type: none;
  }
`;
export default Line;
