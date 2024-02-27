import React, { createContext, useEffect, useState } from "react";
import { EmployeesData } from "../protocols";
import { getEmployees } from "../services/employees";

interface EmployeeContextProps {
  employees: EmployeesData[],
  setEmployees: React.Dispatch<React.SetStateAction<EmployeesData[]>>,
}

const initialValue: EmployeeContextProps = {
  employees: [],
  setEmployees: () => { },
}

export const EmployeeContext = createContext<EmployeeContextProps>(
  initialValue,
);

export const EmployeeProvider = ({ children }: { children: React.ReactNode }) => {
  const [employees, setEmployees] = useState<EmployeesData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialEmployees = await getEmployees();
        setEmployees(initialEmployees as unknown as EmployeesData[])
      } catch (e) {
        console.log('Error fetching initial data:', e)
      }
    }

    fetchData()
  },[])

  return (
    <EmployeeContext.Provider value={{
      employees,
      setEmployees,
    }}>{children}</EmployeeContext.Provider>
  )
}
