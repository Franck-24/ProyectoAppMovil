import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';  // Importa Storage de Capacitor

export const ingresadoGuard: CanActivateFn = async (route, state) => {
  
  const router = inject(Router);
  
  // Verificar si existe el valor en el almacenamiento de Capacitor
  const { value } = await Storage.get({ key: 'ingresado' });

  // Si 'ingresado' tiene un valor, permite el acceso
  if (value === 'true') {
    return true;
  } else {
    // Si no está presente, redirige a la página de login
    router.navigate(['/login']);
    return false;
  }
};
