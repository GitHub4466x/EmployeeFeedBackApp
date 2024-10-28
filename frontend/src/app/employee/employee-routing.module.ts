import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { EmployeemasterComponent } from './employeemaster/employeemaster.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'employeemaster/employeehome',
    pathMatch:'full'
  },
  {
    path:'employeemaster',
    component:EmployeemasterComponent,
    children:[
      {
        path:'employeehome',
        component:EmployeehomeComponent
      },
      {
        path:'feedback/:employeeId/:name',
        component:FeedbackFormComponent
      }

    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
