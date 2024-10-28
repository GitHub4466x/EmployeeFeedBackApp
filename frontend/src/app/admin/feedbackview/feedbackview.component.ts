import { Component } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'app-feedbackview',
  templateUrl: './feedbackview.component.html',
  styleUrl: './feedbackview.component.css'
})
export class  FeedbackviewComponent {
 feedbacks : any =[]
 employee:any;
   constructor( private feedbackService : FeedbackService , private employeeService : EmployeeService, private route : ActivatedRoute , private toastr: ToastrService) {}
   ngOnInit(){
    const employeeId = this.route.snapshot.paramMap.get('id');
    console.log('emp',employeeId)
   this.employeeService.getEmployeeById({ id :employeeId}).subscribe( res => {
    this.employee=res; 
   })

   this.feedbackService.getFeedbackById({employeeId}).subscribe( res => {
      this.feedbacks=res;
      console.log("feedback",this.feedbacks);
   });
  //  console.log('emp ',employeeId)
   
  }
    
   remove( id : any){
       this.feedbackService.removeFeedback(id).subscribe( res => {
        if(res){
          console.log("res :",res);
          this.toastr.success("Removed Succssefull", "Deleted");
  
          this.ngOnInit();
        }
       })
   }
   
}