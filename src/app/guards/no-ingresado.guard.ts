import { CanActivateFn } from '@angular/router';
import { inject, Inject } from '@angular/core';
import { Router } from '@angular/router';

export const noIngresadoGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  
  
  if(localStorage.getItem('ingresado')){
    router.navigate(['/menu/inicio']);
    return false;
  }else{
  return true;
  }



};


