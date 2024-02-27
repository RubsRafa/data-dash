import DataTable from "./components/DataTable"
import Header from "./components/Header"
import Search from "./components/Search"
import { EmployeeProvider } from "./context/EmployeesData"

function App() {

  return (
    <>
      <EmployeeProvider>
        <Header />
        <Search />
        <DataTable />
      </EmployeeProvider>
    </>
  )
}

export default App
