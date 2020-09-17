import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loadingCtrl: LoadingController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  async submitLogin(){
    const loading = await this.loadingCtrl.create({
      message: 'logging in...'
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.navigateRoot('/');
    }, 3000);
  }
}
