import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/classes/employee';
import { ManagementServicesService } from 'src/app/services/management-services.service';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {
  employeeList: Employee[]
  
  constructor(private employeeService : ManagementServicesService) {
  }

  ngOnInit(): void {
    console.log(this.getAllEmployees())
  }
getAllEmployees(){
  this.employeeService.getAllEmployees().subscribe(data => {
    console.log(data)
    this.employeeList = data
  })
}


}
