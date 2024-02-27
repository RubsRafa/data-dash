import styled from "styled-components";

export const TableBarBox = styled.nav`
  background: var(--gradient--primary);
  color: var(--neutral--white);
  box-shadow: var(--shadow-lightest);
  
  border-radius: .5rem .5rem 0 0;

  padding: 0.875rem 1rem;

  display: grid;
  grid-template-columns: 20% 60% 15%;

  span {
    display: none;
  }

  p {
    text-align: center;
  }

  @media(min-width: 31.25rem) {
    grid-template-columns: 12% 20% 20% 28% 20%;

    padding: .875rem 2rem;
    span {
      display: block;
    }
    p {
      text-align: initial;
    }
  }

`;

export const Dot = styled.div`
  width: .5rem;
  height: .5rem;

  margin-block: auto;
  
  background-color: var(--neutral--white);
  border-radius: 50%;

  justify-self: end;
  @media(min-width: 31.25rem){
    display: none;
  }
`;
