import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-check-email',
  templateUrl: './check-email.page.html',
  styleUrls: ['./check-email.page.scss'],
})
export class CheckEmailPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private route: Router
  ) { }

  close(){
    this.modalCtrl.dismiss();
    this.route.navigateByUrl('opt-verification');
  }

  ngOnInit() {
  }

}
