import styled from "styled-components";

const AboutMeText = styled.p`
  text-align: justify;
  font-size: 1.4rem;
  font-family: Roboto;
  @media all and (max-width: 800px) and (max-height:800px){
    font-size: 1.2rem;
  }
   @media all and (max-width: 700px) and (max-height:700px){
     font-size: 1rem;
   }
`;

export default AboutMeText;