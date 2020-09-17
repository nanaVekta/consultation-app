import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  constructor(private navCtrl: NavController, private loadingCtrl: LoadingController, private storage: Storage) { }

  ngOnInit() {
  }

  async onClick(){
    const loading = await this.loadingCtrl.create({
      message: 'Verifying...'
    });

    await loading.present();

    setTimeout(() => {
      this.storage.set('token', {user: 'Test'});
      loading.dismiss();
      this.navCtrl.navigateRoot('/');
    }, 3000);
  }
}
