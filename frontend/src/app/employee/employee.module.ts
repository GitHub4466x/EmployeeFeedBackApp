import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { EmployeemasterComponent } from './employeemaster/employeemaster.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';



@NgModule({
  declarations: [
    FeedbackFormComponent,
    EmployeehomeComponent,
    EmployeemasterComponent
  ],
  imports: [
    ProgressBarModule,
    CardModule,
    ButtonModule,
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    BadgeModule,
    AvatarModule
  ]
})
export class EmployeeModule { }
