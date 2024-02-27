import React, { MutableRefObject } from "react"
import { getEmployees } from "../../services/employees"
import { EmployeesData } from "../../protocols"

const searchData = async (
  event: React.FormEvent,
  text: MutableRefObject<HTMLInputElement | null>,
  setEmployees: React.Dispatch<React.SetStateAction<EmployeesData[]>>,
) => {
  event.preventDefault()
  try {
    if (text.current?.value) {

      const employees = await getEmployees()

      const findEmployee = employees.filter((employee: EmployeesData) => {
        const searchValue = text.current!.value.trim().toLowerCase();
        if (
          employee.job.toLowerCase().includes(searchValue) ||
          employee.name.toLowerCase().includes(searchValue) ||
          employee.phone.toLowerCase().includes(searchValue)
        ) {
          return employee
        }
      })

      setEmployees(findEmployee as unknown as EmployeesData[])
      return
    }
  } catch (e) {
    console.log(e)
  }

}

export { searchData }