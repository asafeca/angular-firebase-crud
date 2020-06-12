import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Employee } from './employee';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private _angularFireDatabase:AngularFireDatabase) { }


  insert(employee:Employee){
    this._angularFireDatabase.list('employees').push(employee)
    .then((result:any)=>{
      console.log(result.key);
    })

  }
  update(emploee:Employee,key:string){
    this._angularFireDatabase.list('employees').update(key,emploee)
  }
  getAll(){
    return this._angularFireDatabase.list('employees')
    .snapshotChanges()
    .pipe(map(changes=>{
      return changes.map(data=>({key:data.payload.key, ...data.payload.val()}))
    }))
  }
  delete(key:string){
    this._angularFireDatabase.object(`employees/${key}`).remove();
  }
}
