import { UserInfoBox, Arrow, AccordionSummary, AccordionDetails, DesktopInfo } from "./style";
import { Title_Medium, Title_Regular } from '../../styles/Typography';

import { useContext, useState } from 'react';

import { EmployeesData } from '../../protocols';

import UpArrow from '../../assets/up_arrow_icon.svg'
import DownArrow from '../../assets/down_arrow_icon.svg'
import { EmployeeContext } from "../../context/EmployeesData";

const UsersInfo = () => {
  const [expandedAccordion, setExpandedAccordion] = useState<string>('')
  const { employees } = useContext(EmployeeContext)


  return (
    <>
      {employees.map((employee: EmployeesData) =>

        <UserInfoBox key={employee.id}>
          <AccordionSummary>
            <img src={employee.image} alt="User image" />
            <h3>{employee.name}</h3>
            <DesktopInfo>{employee.job}</DesktopInfo>
            <DesktopInfo>{employee.admission_date.slice(8, 10)}/{employee.admission_date.slice(5, 7)}/{employee.admission_date.slice(0, 4)}</DesktopInfo>
            <DesktopInfo>+{employee.phone.slice(0, 2)} ({employee.phone.slice(2, 4)}) {employee.phone.slice(4, 9)}-{employee.phone.slice(9)}</DesktopInfo>
            <button onClick={() => setExpandedAccordion(expandedAccordion == employee.id ? '' : employee.id)}>
              <Arrow src={expandedAccordion == employee.id ? UpArrow : DownArrow} alt="seta" />
            </button>
          </AccordionSummary>
          {expandedAccordion == employee.id &&
            <AccordionDetails>
              <div>
                <Title_Medium>Cargo</Title_Medium>
                <Title_Regular>{employee.job}</Title_Regular>
              </div>
              <div>
                <Title_Medium>Data de admissão</Title_Medium>
                <Title_Regular>{employee.admission_date.slice(8, 10)}/{employee.admission_date.slice(5, 7)}/{employee.admission_date.slice(0, 4)}</Title_Regular>
              </div>
              <div>
                <Title_Medium>Telefone</Title_Medium>
                <Title_Regular>+{employee.phone.slice(0, 2)} ({employee.phone.slice(2, 4)}) {employee.phone.slice(4, 9)}-{employee.phone.slice(9)}</Title_Regular>
              </div>
            </AccordionDetails>
          }
        </UserInfoBox>
      )}
    </>
  )
}

export default UsersInfo
