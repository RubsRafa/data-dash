import styled from "styled-components";

export const SearchBox = styled.section`
  display: block;
  
  padding: var(--spacing-regular--normal);
  h1 {
    margin-block: auto;
  }

  @media(min-width: 31.25rem) {
    padding-block: 2.75rem;
    padding-inline: var(--spacing-medium--small);

    display: flex;
    justify-content: space-between;
  }

`;

export const SearchInputBox = styled.div`
  padding: .75rem 1rem;
  margin-top: var(--spacing-regular--large);
  
  background-color: var(--neutral--white);
  
  border-radius: var(--spacing-little--normal);
  border: 1px solid var(--neutral--gray-light);

  form {
    display: flex;
    justify-content: space-between;
  }

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

