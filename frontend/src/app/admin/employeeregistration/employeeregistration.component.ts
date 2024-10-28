import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

import {  ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrl: './employeeregistration.component.css'
})
export class EmployeeregistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder , private employeeService : EmployeeService , private toastr : ToastrService , private router : Router) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      gender: [''],
      jobRole: ['', Validators.required], 
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }



  onSubmit(): void {
    this.registrationForm.markAllAsTouched();
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      this.employeeService.addEmployee(this.registrationForm.value).subscribe( (res) =>{
      if(res){
        this.toastr.success("Employee added", "Success");
        console.log("res "+res)
        this.registrationForm.reset()
        this.router.navigate(['/admin'])
      } else{
        this.toastr.warning("Email already exists", "Success");
      }
      })
    }
    else{
      this.toastr.error(" Enter all the details", "Error");
    }
    }
  }


