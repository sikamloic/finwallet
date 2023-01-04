import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CheckEmailPage } from '../components/check-email/check-email.page';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(
    private location: Location,
    private modalCtrl: ModalController
    ) { }

  back(){
    this.location.back();
  }
  async open(){
    const modal = await this.modalCtrl.create({
      component: CheckEmailPage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.4,
      cssClass: 'checkEmail'
    });
    await modal.present();
  }

  ngOnInit() {
  }

}
