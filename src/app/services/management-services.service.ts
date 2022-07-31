import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Department } from '../classes/department';
import { Employee } from '../classes/employee';


@Injectable({
  providedIn: 'root'
})
export class ManagementServicesService {
  private baseUrl = "http://localhost:8080/api/employees";
  private DepartmentUrl = "http://localhost:8080/api/departments";


  constructor(private httpClient:HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
    
    return this.httpClient.get<GetResponseEmployee>(this.baseUrl)
    .pipe(map(response => response._embedded.employees));
  }
  getAllDepartments():Observable<Department[]>{

    return this.httpClient.get<GetResponseDepartment>(this.DepartmentUrl)
    .pipe(map(response => response._embedded.departments));
  }
}
interface GetResponseEmployee{
  _embedded:{
    employees:Employee[]

  }

  
}

interface GetResponseDepartment{
  _embedded:{
    departments:Department[]
    
  }
}