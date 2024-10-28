import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminmasterComponent } from './adminmaster/adminmaster.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';
import { EmployeesreviewsComponent } from './employeesreviews/employeesreviews.component';
import { FeedbackviewComponent } from './feedbackview/feedbackview.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'adminmaster/adminhome',
    pathMatch:'full'
  },
  {
    path:'adminmaster',
    component:AdminmasterComponent,
    children:[
    {
      path:'adminhome',
      component:AdminhomeComponent
    },
    {
      path:'employeeregistration',
      component:EmployeeregistrationComponent
    },
    {
      path:'feedbackview/:id',
      component:FeedbackviewComponent
    },
    {
      path:'edit/:id',
      component:EmployeeEditComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
