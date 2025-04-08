import { Component, OnInit, signal } from '@angular/core';
import { SelectComponent } from "../select/select.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-price-input',
  templateUrl: './price-input.component.html',
  styleUrls: ['./price-input.component.scss'],
  imports: [SelectComponent, NgClass],
})
export class PriceInputComponent  implements OnInit {
  isOpen = signal<boolean>(false)

  constructor() { }

  ngOnInit() {}

}
