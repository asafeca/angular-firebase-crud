import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee:Employee;
  key:string='';

  constructor(private _employeeService:EmployeesService,
    private _employeeDataService: EmployeeDataService) { }

  ngOnInit(): void {

    this.employee= new Employee();
    this._employeeDataService.currentEmployee.subscribe(data=>{
      if(data.employee && data.key){
        this.employee = data.employee;
        this.key = data.key;
      }
    });
  }
  onSubmit(){
    if(this.key){
      this._employeeService.update(this.employee,this.key)

    }
    else{
      this._employeeService.insert(this.employee)

    }

    this.employee =new Employee();
    this.key ='';
  }

}
