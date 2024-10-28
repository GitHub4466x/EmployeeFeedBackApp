import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private URL = 'http://localhost:4000/employee';
  constructor( private http : HttpClient , private router : Router) { }

  addEmployee(data : any)  {
   return this.http.post<any>( this.URL + '/addEmployee',data);
  }
  getEmployee(){
    return this.http.get(this.URL + '/getEmployees')
  }

  removeEmployee( data :any ){
    console.log("id ",data);
    return this.http.delete(this.URL+"/"+data);
  }
  getEmployeeById( data : any ){
    return this.http.post(this.URL+'/getEmployeeById',data)
  }
  
  updateEmployee( updates : any , id : any){
    return this.http.put(this.URL+ '/'+ id,updates)
  }

  
}
