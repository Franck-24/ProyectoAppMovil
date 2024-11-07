import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';  // Importa Storage de Capacitor

export const noIngresadoGuard: CanActivateFn = async (route, state) => {
  
  const router = inject(Router);
  
  // Verificar si existe el valor 'ingresado' en el almacenamiento de Capacitor
  const { value } = await Storage.get({ key: 'ingresado' });

  // Si 'ingresado' tiene el valor 'true', redirige a la página de inicio
  if (value === 'true') {
    router.navigate(['/menu/inicio']);
    return false;
  } else {
    // Si el valor no es 'true', permite el acceso a la ruta
    return true;
  }
};

