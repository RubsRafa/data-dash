import TableBar from "../TableBar";
import UsersInfo from "../UsersInfo";
import { DataTableBox } from "./style";

const DataTable = () => {
  return (
    <DataTableBox>
      <TableBar />
      <UsersInfo />
    </DataTableBox>
  )
}

export default DataTable
