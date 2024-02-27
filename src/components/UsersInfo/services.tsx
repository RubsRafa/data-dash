import React from "react";
import { getEmployees } from "../../services/employees";
import { EmployeesData } from "../../protocols";

const getEmployeesData = async (
  setEmployees: React.Dispatch<React.SetStateAction<EmployeesData[]>>,
) => {
  try {
    const data = await getEmployees();
    setEmployees(data as unknown as EmployeesData[])
  } catch (e) {
    console.log(e)
  }
}

export { getEmployeesData }