import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, effect, input, OnInit, output, signal } from '@angular/core';
import { SelectComponent } from "../select/select.component";

@Component({
  selector: 'app-radio-select',
  templateUrl: './radio-select.component.html',
  styleUrls: ['./radio-select.component.scss'],
  imports: [NgClass, SelectComponent, TitleCasePipe]
})
export class RadioSelectComponent  implements OnInit {
  isOpen = signal<boolean>(false)
  options = input<any[]>(['option 1','option 2', 'option 3', 'option 4', 'option 5', 'option 6','option 7','option 8','option 9'])
  values = input<any[]>([1,2,3,4,5,6,7,8,9])
  text = input<string>('Ordenar por')
  selectedValue = output<any>()

  constructor() { }

  ngOnInit() {}

}
