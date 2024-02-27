import styled from "styled-components";

export const UserInfoBox = styled.div`
  padding: 0.875rem 1rem;
  
  box-shadow: var(--shadow--lightest);
  @media(min-width: 31.25rem){
    padding: .875rem 2rem;
  }
`;

export const Arrow = styled.img`
  min-width: var(--spacing-medium--small);
  min-height: var(--spacing-medium--small);
`;

export const AccordionSummary = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;

  img, h3, button {
    margin-block: auto;
  }

  img {
    max-width: 2.125rem;
    max-height: 2.125rem;

    border-radius: 50%;
    
    object-fit: cover;
  }

  h3 {
    text-align: center;
  }

  button {
    width: fit-content;
    
    justify-self: end;
    
    background-color: transparent;
    border: none;
  }
  @media(min-width: 31.25rem){
    grid-template-columns: 12% 20% 20% 28% 20%;
    button {
      display: none;
    }
    h3 {
      text-align: initial;
    }
  }
`;

export const DesktopInfo = styled.h3`
  display: none;
  @media(min-width: 31.25rem){
    display: block;
  }
`;

export const AccordionDetails = styled.div`
  margin-block: 2rem 1.188rem;
  div {
    display: flex;
    flex-wrap: nowrap;
    
    justify-content: space-between;
    
    border-bottom: 1px dashed var(--neutral--gray-light);
    
    margin-top: var(--spacing-regular--small);
  }
  @media(min-width: 31.25rem){
    display: none;
  }
`;

