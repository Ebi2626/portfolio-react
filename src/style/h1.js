import styled from "styled-components";

const H1 = styled.h1`
  color: ${window.innerWidth < 768 ? "red" : "blue"};
`;

export default H1;
