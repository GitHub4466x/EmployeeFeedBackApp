import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmaster',
  templateUrl: './adminmaster.component.html',
  styleUrl: './adminmaster.component.css'
})
export class AdminmasterComponent {
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
