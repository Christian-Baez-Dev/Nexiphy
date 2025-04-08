import { Component, OnInit, ViewChild, input, effect } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true

})
export class CarouselComponent  implements OnInit {
  imgUrls = input.required<string[]>()

  constructor() { }

  ngOnInit() {}

}
