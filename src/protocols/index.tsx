export interface API<T> {
  filter(arg0: (employee: EmployeesData) => EmployeesData | undefined): unknown;
  response: {
    data: T
  }
}

export interface EmployeesData {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}
