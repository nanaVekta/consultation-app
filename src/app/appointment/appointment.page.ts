import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  constructor(private modalCtrl: ModalController, private loadingCtrl: LoadingController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async submitAppointment(){
    const loading = await this.loadingCtrl.create({
      message: 'Scheduling...'
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.modalCtrl.dismiss();
      this.presentToast('Appointment scheduled successfully');
    }, 3000);
  }

  async presentToast(msg){
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }
}
