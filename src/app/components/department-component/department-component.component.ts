import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/classes/department';
import { ManagementServicesService } from 'src/app/services/management-services.service';

@Component({
  selector: 'app-department-component',
  templateUrl: './department-component.component.html',
  styleUrls: ['./department-component.component.css']
})
export class DepartmentComponentComponent implements OnInit {
departmentList: Department[]

  constructor(private service : ManagementServicesService) {

   }

  ngOnInit(): void {
    console.log(this.GetdepartmentDetails())
  }
GetdepartmentDetails(){
  this.service.getAllDepartments().subscribe(data => {
    console.log(data)
    this.departmentList = data
  })
}

}
