import { TitleCasePipe } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-categories-modal',
  templateUrl: './categories-modal.component.html',
  styleUrls: ['./categories-modal.component.scss'],
  imports: [TitleCasePipe]
})
export class CategoriesModalComponent  implements OnInit {
  close = output()
  options = input<any[]>(['option 1','option 2', 'option 3', 'option 4', 'option 5', 'option 6','option 7','option 8','option 9'])
  values = input<any[]>([1,2,3,4,5,6,7,8,9])

  valueSelected = output<any>()
  constructor() { }

  ngOnInit() {}

}
