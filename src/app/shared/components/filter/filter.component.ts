import { Component, effect, OnInit, output, signal } from '@angular/core';
import { PriceInputComponent } from "../price-input/price-input.component";
import { RadioSelectComponent } from "../radio-select/radio-select.component";
import { single } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  imports: [PriceInputComponent, RadioSelectComponent],
})
export class FilterComponent  implements OnInit {
  close = output()
  value = signal<any>('')

  constructor() { }

  ngOnInit() {}

}
