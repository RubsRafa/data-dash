import styled from "styled-components";

export const HeaderBox = styled.header`
  max-height: 3.75rem;
  min-width: 100%;
  
  background-color: var(--neutral--white);
  box-shadow: var(--shadow-normal);
  
  padding-block: 0.625rem;
`;

export const LogoImage = styled.img`
  max-width: 2.75rem;
  max-height: 2.188rem;

  margin-left: 1.25rem;

  @media(min-width: 31.25rem){
    margin-left: 2rem;
  }
`;
