import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {

  const router = new Router;
  const toastr = inject(ToastrService)

  
  const role = localStorage.getItem('role'); 
  if (role === 'admin' || role === 'employee') {
    return true;
  } else {
   toastr.info(' Session Expired','Unauthorized')
    router.navigate(['/login']);
    return false;
  }

};







