import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Swiper, Virtual } from 'swiper';
import { Router } from '@angular/router';

SwiperCore.use([Virtual]);

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.page.html',
  styleUrls: ['./onboard.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OnboardPage implements OnInit {
  @ViewChild('swiper', { static: false }) swiper: any;
  title = "next";
  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    console.dir(this.swiper);
  }

  onSlideChange(e: any){
    if(e[0].snapIndex === 2){
      this.title = "get started";
    }
    else{
      this.title = "next";
    }
  }

  next() {
    let i = this.swiper.swiperRef.snapIndex
    if(i == 2){
      this.router.navigateByUrl('connexion')
    }
    else{
      this.swiper.swiperRef.slideNext(100);
    }
  }

  ngOnInit(): void {
      
  }

}
