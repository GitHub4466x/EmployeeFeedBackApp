import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSnackBarModule } from '@angular/material/snack-bar';




import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { AdminModule } from './admin/admin.module';
import { EmployeeModule } from './employee/employee.module';
import { provideHttpClient } from '@angular/common/http';
import {  CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastrModule } from 'ngx-toastr'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    AdminModule,
    EmployeeModule,
    ButtonModule,
    CardModule,
    ProgressBarModule,
    ToastrModule.forRoot(
      {
        positionClass: 'toast-top-right', // Position of the toast
        timeOut: 3000, // Duration before toast disappears
        preventDuplicates: false, // Prevent duplicate toasts
        progressBar:true,
        progressAnimation:"decreasing",
        closeButton:true
        
      }
    ) 
  ],
  providers: [
    provideAnimationsAsync('noop'),
    provideHttpClient(),
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
