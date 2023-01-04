import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  password = true;
  constructor(private location: Location) { }

  back(){
    this.location.back();
  }
  ngOnInit() {
  }

}
