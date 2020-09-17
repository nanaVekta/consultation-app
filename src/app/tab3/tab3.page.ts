import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { EditProfilePage } from '../edit-profile/edit-profile.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public modalCtrl: ModalController, public toastCtrl: ToastController) {}


async presentModal(t, v) {
    const modal = await this.modalCtrl.create({
      component: EditProfilePage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        type: t,
        value: v,
      }
    });
    modal.onDidDismiss()
        .then((data) => {
          if (data.data) {
            const bkValue = data.data;
            if (bkValue.value && t == 'Full name') {
              this.presentToast('Full name updated successfully')
            }
            else if (bkValue.value && t == 'Username') {
              this.presentToast('Username updated successfully')
            }
            else if (bkValue.value && t == 'Phone') {
              this.presentToast('Phone number updated successfully')
            }
            else if (bkValue.value && t == 'Email') {
              this.presentToast('Email updated successfully')
            }
          }
      });

    return await modal.present();
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
