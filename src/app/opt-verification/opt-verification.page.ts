import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opt-verification',
  templateUrl: './opt-verification.page.html',
  styleUrls: ['./opt-verification.page.scss'],
})
export class OptVerificationPage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  back(){
    this.location.back();
  }

  ngOnInit() {
  }

}
