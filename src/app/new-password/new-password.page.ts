import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResetSuccessPage } from '../components/reset-success/reset-success.page';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnInit {

  password = true;
  constructor(
    private location: Location,
    private modalCtrl: ModalController
    ) { }

    back(){
      this.location.back();
    }

    async open(){
      const modal = await this.modalCtrl.create({
        component: ResetSuccessPage,
        breakpoints: [0, 0.3, 0.5, 0.8],
        initialBreakpoint: 0.4
      });
      await modal.present();
    }

  ngOnInit() {
  }

}
