import { Component } from '@angular/core';
import { ModalController, NavController, PopoverController  } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AppointmentPage } from '../appointment/appointment.page';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  public premium = [
    {id: 1, name: 'Premium Package 1', amount: '250', time: 'Sept 2, 2020'},
    {id: 1, name: 'Premium Package 32', amount: '150', time: 'June 6, 2020'},
    {id: 1, name: 'Premium Package 8', amount: '50', time: 'Mar 12, 2020'}
  ];

  public appointment = [
    {id: 1, name: 'Dr. Agort Doe', status: 'Completed', time: 'Aug 2, 2020'},
    {id: 1, name: 'Dr. Hannah Adase', status: 'Pending', time: 'May 23, 2020'},
    {id: 1, name: 'Dr. Fredrick Annan', status: 'Rescheduled', time: 'Feb 14, 2020'}
  ];

  public itemSet: Boolean = false;
  public appSet: Boolean = false;


  constructor(private storage: Storage, private navCtrl: NavController, private popoverCtrl: PopoverController,
              private modalCtrl: ModalController) {
    storage.get('token').then((val) => {
      if(!val){
        this.navCtrl.navigateRoot('/welcome');
      }
    });

    setTimeout(() => {
      this.itemSet = true;
      this.appSet = true;
    }, 1000);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: AppointmentPage,
      cssClass: 'my-custom-modal-css'
    });
    return await modal.present();
  }

}
