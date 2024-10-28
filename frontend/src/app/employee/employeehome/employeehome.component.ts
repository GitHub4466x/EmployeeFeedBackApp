import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FeedbackService } from '../../services/feedback.service';

interface Review {
  id: number;
  reviewerName: string;
  dueDate: string;
}

interface Goal {
  id: number;
  title: string;
  progress: number;
}

@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrl: './employeehome.component.css'
})
export class EmployeehomeComponent {
 
  pendingFeedbacks :any =[]
  name :string | null ='NaN';
  gender :string | null ='NaN';
  job :string | null ='NaN';
 employeeIds:any;
 constructor( private employeeService : EmployeeService, private feedbackService :FeedbackService){ }
 
  ngOnInit(){
    if (typeof localStorage !== 'undefined') {
      this.name = localStorage.getItem("userName");
      this.gender = localStorage.getItem("gender");
      this.job = localStorage.getItem("job");
      const employeeId=localStorage.getItem("userId");
      console.log("EMp Home id : ",{employeeId})
    this.feedbackService.getPendingFeedbacks({employeeId}).subscribe( res =>{
      this.pendingFeedbacks=res;
      console.log("EMp Home Res : ",this.pendingFeedbacks)
    })
    } else {
      console.error('localStorage is not available.');
    }
    
  }
  
 }
  










