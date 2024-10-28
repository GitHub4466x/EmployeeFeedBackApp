import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent {
  id:any;
    registrationForm: FormGroup;
  
    constructor(private fb: FormBuilder , private employeeService : EmployeeService , private toastr : ToastrService , private  route : ActivatedRoute , private router :Router) {
      this.registrationForm = this.fb.group({
        name: ['', Validators.required],
        gender: ['', Validators.required],
        jobRole: ['', Validators.required], 
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });
    }
  
    ngOnInit(): void {

       const id = this.id = this.route.snapshot.paramMap.get('id');
     
    this.employeeService.getEmployeeById({id}).subscribe((res : any) =>{   
        this.registrationForm.patchValue({
          name :res.name,
          gender:res.gender,
          jobRole:res.jobRole,
          email:res.email,
          password:res.password
        })
      })
     }
  
  
  
    onSubmit(): void {
      this.registrationForm.markAllAsTouched();
      if (this.registrationForm.valid) {
        console.log(this.registrationForm.value);
        this.employeeService.updateEmployee(this.registrationForm.value,this.id).subscribe( (res) =>{
        if(res){
          this.toastr.success("Successfully Updated", "Updated");
          this.router.navigate(['/admin']);
          this.registrationForm.reset()
        } else{
          this.toastr.warning("Email already exists", "Duplicate");
        }
        })
      }
      else{
        this.toastr.error(" Enter all the details", "Fill data");
      }
      }
    }

