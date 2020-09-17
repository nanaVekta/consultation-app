import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private loadingCtrl: LoadingController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  async submitSignUp(){
    const loading = await this.loadingCtrl.create({
      message: 'Signing up...'
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.navigateRoot('/verification');
    }, 3000);
  }
}
