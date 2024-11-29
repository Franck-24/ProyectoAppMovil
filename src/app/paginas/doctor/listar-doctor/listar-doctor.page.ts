import { Component} from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctores } from 'src/app/interfaces/doctores';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';




@Component({
  selector: 'app-listar-doctor',
  templateUrl: './listar-doctor.page.html',
  styleUrls: ['./listar-doctor.page.scss'],
})
export class ListarDoctorPage{

  doctores: Doctores[] = [];
  doctor: string='';

  constructor(private doctoresServ: DoctorService,
    private loadingCtrl: LoadingController
  ) {

   }

  ionViewWillEnter() {
    this.loadDoctores(); // Carga los datos al iniciar el componente
  }


  async loadDoctores(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: "cargando...",
      spinner: "bubbles"
    }
  );
  await loading.present();
    this.doctoresServ.listarDoctores().subscribe(
      (resp) => {
        loading.dismiss();
        let listString = JSON.stringify (resp)
        this.doctores = JSON.parse (listString)
        event?.target.complete();
      },
      (err) => {
        console.log(err.message)
        loading.dismiss();
      }
    )
  }


}
