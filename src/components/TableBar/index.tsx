import { Title_Medium } from "../../styles/Typography";
import { TableBarBox, Dot } from "./style";

const TableBar = () => {
  return (
    <TableBarBox>
      <Title_Medium>FOTO</Title_Medium>
      <p><Title_Medium>NOME</Title_Medium></p>
      <span><Title_Medium>CARGO</Title_Medium></span>
      <span><Title_Medium>DATA DE ADMISSÃO</Title_Medium></span>
      <span><Title_Medium>TELEFONE</Title_Medium></span>
      <Dot></Dot>
    </TableBarBox>
  )
}

export default TableBar
