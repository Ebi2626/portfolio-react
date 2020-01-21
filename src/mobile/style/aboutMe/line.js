import styled from "styled-components";

const Line = styled.p`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 40px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  border-bottom: solid blue 1px;
  margin-bottom: 10px;
  & > span:first-child {
    color: blue;
    margin-right: 5px;
  }
`;

export default Line;
