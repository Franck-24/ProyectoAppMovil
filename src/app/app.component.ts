import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@Capacitor/splash-screen'
import { SqliteService } from './services/sqlite.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor(private database: SqliteService) {
  this.iniApp();
 }

  async iniApp(){
    await this.database.inicializarPlugin();
    SplashScreen.hide();
  }
}
