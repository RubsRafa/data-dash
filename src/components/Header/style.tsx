import styled from "styled-components";

export const HeaderBox = styled.header`
  max-height: var(--spacing-medium--large);
  min-width: 100%;
  
  padding-block: 0.625rem;
  
  background-color: var(--neutral--white);
  box-shadow: var(--shadow--normal);
`;

export const LogoImage = styled.img`
  max-width: 2.75rem;
  max-height: 2.188rem;

  margin-left: var(--spacing-regular--normal);

  @media(min-width: 31.25rem){
    margin-left: var(--spacing-medium--small);
  }
`;
