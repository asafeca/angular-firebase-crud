import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { EmployeeDataService } from '../employee-data.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees:Observable<any>;

  constructor(private _employeeService:EmployeesService,
    private _employeeDataService:EmployeeDataService) { }

  ngOnInit(): void {
    this.employees=this._employeeService.getAll();
  }

  remove(key:string){
    this._employeeService.delete(key);
  }

  edit(employee:Employee,key:string){
    this._employeeDataService.getEmployee(employee,key);
  }

}
