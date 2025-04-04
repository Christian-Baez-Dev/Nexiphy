import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent  implements OnInit {
  text = input<string>('Toggle')
  toggle = output()
  constructor() { }

  ngOnInit() {}

}
