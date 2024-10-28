import { Component } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-employeesreviews',
  templateUrl: './employeesreviews.component.html',
  styleUrl: './employeesreviews.component.css'
})
export class EmployeesreviewsComponent {
 feedbacks : any  =[]

 constructor( private feedbackService : FeedbackService){}

 ngOnInit(){
  // this.feedbackService.getFeedbacks().subscribe( res => {
  //  this.feedbacks=res;
  //   console.log("Result : ",res);
    
  // })
 }
}
