import styled from "styled-components";
const Description = styled.p`
  font-size: 1.2rem;
  font-family: Roboto, sans-serif;
  color: lightblue;
  text-align: center;
  @media all and (max-width: 800px) and (max-height:800px){
    & {
      font-size: 1rem;
    }
  }
`;

export default Description;
