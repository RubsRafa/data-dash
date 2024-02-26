import SearchIcon from '../../assets/search_icon.svg'

import { Title_Big } from "../../styles/Typography";
import { SearchBox, SearchInputBox } from "./style";

const Search = () => {
  return (
    <SearchBox>
      <Title_Big>Funcionários</Title_Big>
      <SearchInputBox>
        <input placeholder='Pesquisar'></input>
        <button>
          <img src={SearchIcon} alt="Lupa para pesquisa" />
        </button>
      </SearchInputBox>
    </SearchBox>
  )
}

export default Search
