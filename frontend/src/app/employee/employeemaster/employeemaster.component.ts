import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeemaster',
  templateUrl: './employeemaster.component.html',
  styleUrl: './employeemaster.component.css'
})
export class EmployeemasterComponent {
  constructor( private router :Router){}
  logout(){
            localStorage.setItem("userId", '');
            localStorage.setItem("userName", '');
            localStorage.setItem("gender", '');
            localStorage.setItem("job", '');
            localStorage.setItem('role','');
this.router.navigate(['/']);
  }
}
