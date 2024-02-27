export interface EmployeesData {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

export interface API<T> {
  response: {
    data: T
  }
}
