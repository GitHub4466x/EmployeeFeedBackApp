import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';


interface Employee {
  id: number;
  name: string;
  email: string;
}

interface Review {
  id: number;
  employeeName: string;
  reviewPeriod: string;
}


@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css',
 
})
export class AdminhomeComponent  {

  selectedTab: string = 'employees';  

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  employees : any = [];
  
    constructor( private employeeSevice : EmployeeService){  }
  
  
    // ngOnInit(){
    //   alert('hi')
    //   this.employeeSevice.getEmployee().subscribe( res =>{
    //     this.employees=res;
    //     console.log("emplyees ", this.employees);
    //   })
    // }

  

  }
  













