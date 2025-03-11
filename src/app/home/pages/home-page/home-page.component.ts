import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from "../../../shared/components/carousel/carousel.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [CarouselComponent],
})
export default class HomePageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
