import { useContext, useRef } from 'react';
import SearchIcon from '../../assets/search_icon.svg'

import { Title_Big } from "../../styles/Typography";
import { SearchBox, SearchInputBox } from "./style";

import { searchData } from './services';
import { EmployeeContext } from '../../context/EmployeesData';

const Search = () => {
  const text = useRef<HTMLInputElement | null>(null)
  const { setEmployees } = useContext(EmployeeContext)
  return (
    <SearchBox>
      <Title_Big>Funcionários</Title_Big>
      <SearchInputBox>
        <form onSubmit={(e) => searchData(e, text, setEmployees)}>
          <input ref={text} type='text' name='text' placeholder='Pesquisar' required></input>
          <button type='submit'>
            <img src={SearchIcon} alt="Lupa para pesquisa" />
          </button>
        </form>
      </SearchInputBox>
    </SearchBox>
  )
}

export default Search
