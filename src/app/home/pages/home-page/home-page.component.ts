import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { HomePageCardComponent } from "./home-page-card/home-page-card.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [ HomePageCardComponent],
})
export default class HomePageComponent  implements OnInit {
  items = ['1','2','3','4','5','6','7']
  constructor() { }

  ngOnInit() {}

}
