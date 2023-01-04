import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reset-success',
  templateUrl: './reset-success.page.html',
  styleUrls: ['./reset-success.page.scss'],
})
export class ResetSuccessPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  close(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
