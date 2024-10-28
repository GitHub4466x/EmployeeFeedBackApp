import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private URL = 'http://localhost:4000/feedback';
  constructor( private http : HttpClient) { }
 addFeedback( data : any){
  return this.http.post(this.URL + '/addFeedback',data  )
 }
 getPendingFeedbacks( data : any){
  return this.http.post(this.URL + '/pendingFeedbacks',data)
 }

 getFeedbackById( data : any){
  return this.http.post(this.URL + "/feedbackById",data);
 }
 removeFeedback( data : any){
  return this.http.delete(this.URL + "/deleteFeedback/"+ data);
 }

}
