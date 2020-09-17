import { LoadingController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private loadingCtrl: LoadingController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  async onClick(){
    const loading = await this.loadingCtrl.create({
      message: 'sending request...'
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.navigateRoot('/done');
    }, 3000);
  }
}
