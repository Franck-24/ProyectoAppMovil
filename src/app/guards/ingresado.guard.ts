import { CanActivateFn } from '@angular/router';
import { inject, Inject } from '@angular/core';
import { Router } from '@angular/router';

export const ingresadoGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  if(localStorage.getItem('ingresado')){
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }

};
