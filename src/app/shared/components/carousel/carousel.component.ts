import { Component, OnInit, ViewChild } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true

})
export class CarouselComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
