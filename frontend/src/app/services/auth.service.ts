import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   id :any;
  private URL = 'http://localhost:4000';
  constructor( private http : HttpClient , private router : Router, private toastr : ToastrService) { }

  authenticate(data: any) {
    if (data.email == 'admin' && data.password == '123') {
      localStorage.setItem('role','admin');
      this.router.navigate(['/admin']);
    } else {
      this.http.post(this.URL + '/employee/login', data).subscribe({
        next: (res: any) => {
          if (res) {
            localStorage.setItem("userId", res._id);
            localStorage.setItem("userName", res.name);
            localStorage.setItem("gender", res.gender);
            localStorage.setItem("job", res.jobRole);
            localStorage.setItem('role','employee');
            this.router.navigate(['/employee']);
            console.log(res);
          } else {
            this.toastr.success("Wrong Credentials", "Error");
            this.router.navigate(['']);
          }
        },
        error: (error) => {
          if (error.status === 401) {
            this.toastr.error("Invalid Credentials", "Error");
            this.router.navigate(['']);
          } else {
            this.toastr.error("Invalid Credentials", "Error");
            console.error("An error occurred:", error);
          }
        }
      });
    }
  }
  
}
