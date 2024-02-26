import styled from "styled-components";

export const SearchBox = styled.section`
  padding: 1.25rem;
  display: block;
  
  h1 {
    margin-block: auto;
  }

  @media(min-width: 31.25rem) {
    padding-block: 2.75rem;
    padding-inline: 2rem;

    display: flex;
    justify-content: space-between;
  }

`;

export const SearchInputBox = styled.div`
  background-color: var(--neutral--white);
  
  padding: .75rem 1rem;
  margin-top: 1.75rem;
  
  border-radius: .5rem;
  border: 1px solid var(--neutral--gray-light);

  display: flex;
  justify-content: space-between;

  @media(min-width: 31.25rem){
    margin-top: 0;
  }

  input,
  button {
    border: none;
    background-color: transparent;
    outline: none;
    
    vertical-align: middle;
  }

  input {
    max-width: 60%;
    ::placeholder {
      color: var(--neutral--gray);
      font-size: var(--fs-16);
      font-weight: var(--fw-400);
      line-height: var(--lh-1);
    }
  }
`;

