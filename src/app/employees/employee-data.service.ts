import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor() { }

  private employeeSource=new BehaviorSubject({employee:null,key:''});
  currentEmployee= this.employeeSource.asObservable();

  getEmployee(employee:Employee, key:string){
    this.employeeSource.next({employee:employee,key:key});
  }
}
