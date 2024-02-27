import styled from "styled-components";

export const DataTableBox = styled.div`
  max-width: 89%;
  margin-inline: auto;
  
  background-color: var(--neutral--white);

  box-shadow: var(--shadow-lightest);
  border-radius: .5rem .5rem .313rem .313rem;  

  @media(min-width: 31.25rem){
    max-width: 93%;
  }
`;