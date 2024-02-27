import { AxiosResponse } from "axios";
import { API, EmployeesData } from "../protocols";
import api from "./api";

export async function getEmployees() {
  const response: AxiosResponse<API<EmployeesData[]>> = await api.get('/employees')

  return response.data;
}
