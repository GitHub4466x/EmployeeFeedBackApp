import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  employees : any= []

  constructor( private employeeSevice : EmployeeService , private toastr : ToastrService){  }


  ngOnInit(){
    this.employeeSevice.getEmployee().subscribe( res =>{
      this.employees=res;
      
    })
  }

  remove(id : any){
  this.employeeSevice.removeEmployee(id).subscribe( res =>{
    if(res){
      this.toastr.success("Employee removed", "Sucess");
      this.ngOnInit();
    }
  })
  }


}
