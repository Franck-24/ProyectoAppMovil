import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DoctorService } from './services/doctor.service';
import { HttpClientModule } from '@angular/common/http';
import { ImagenService } from './services/imagen.service';
import { UsuarioService } from './services/usuario.service';


@NgModule({
  imports: [ 
    HttpClientModule, 
    ReactiveFormsModule, 
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AppComponent
  ],
  providers: [
    DoctorService, 
    ImagenService, 
    UsuarioService,
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy },
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
