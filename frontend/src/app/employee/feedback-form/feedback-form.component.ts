import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../../services/feedback.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.css'
})
export class FeedbackFormComponent {

  feedbackForm !: FormGroup;
  employee : any ={};
  employeeId: string | null = null;
  name: string | null = null;

  ratingOptions = [
    { value: '1', label: 'Poor' },
    { value: '2', label: 'Below Average' },
    { value: '3', label: 'Average' },
    { value: '4', label: 'Good' },
    { value: '5', label: 'Excellent' },
  ];

  constructor(private fb: FormBuilder , private toastr :ToastrService, private router:Router, private snackBar: MatSnackBar, private route: ActivatedRoute , private feedbackService : FeedbackService) {}

 

  

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('employeeId');
    this.name = this.route.snapshot.paramMap.get('name');

    this.feedbackForm = this.fb.group({
      employeeId:this.employeeId,
      reviewerId:localStorage.getItem('userId'),
      performance: [''],
      areasForImprovement: [''],
      additionalComments: [''],
    });
  }

  onSubmit(): void {
    this.feedbackForm.markAllAsTouched()
    if (this.feedbackForm.valid) {
      console.log('Submitted feedback:', this.feedbackForm.value);
       this.feedbackService.addFeedback(this.feedbackForm.value).subscribe(res =>{
       if(res){
        this.feedbackForm.reset();
        this.toastr.info("FeedBack Added", "Added");
        this.router.navigate(['./employee'])
       }
       })
      
    }
  }

}
