import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminmasterComponent } from './adminmaster/adminmaster.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';
import { EmployeesreviewsComponent } from './employeesreviews/employeesreviews.component';
import { EmployeesComponent } from './employees/employees.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackviewComponent } from './feedbackview/feedbackview.component';
import { provideHttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

import { RippleModule } from 'primeng/ripple';
import { ToastrModule } from 'ngx-toastr';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';




@NgModule({
  declarations: [
    AdminmasterComponent,
    AdminhomeComponent,
    EmployeeregistrationComponent,
    EmployeesreviewsComponent,
    EmployeesComponent,
    FeedbackviewComponent,
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    RippleModule,
    FormsModule,
    ToastrModule.forRoot(
      {
        positionClass: 'toast-top-right',
        timeOut: 3000, 
        preventDuplicates: false, 
        progressBar:true,
        progressAnimation:"decreasing",
        closeButton:true
        
      }
    ) 
  ],
  providers:[provideHttpClient(),MessageService]
})
export class AdminModule { }
