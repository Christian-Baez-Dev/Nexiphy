import { NgClass } from '@angular/common';
import { Component, input, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  imports:[NgClass]
})
export class SelectComponent  implements OnInit {
  text = input<string>('Toggle')
  toggle = output()
  isOpen = signal(false)
  constructor() { }

  ngOnInit() {}


  onToggle(){
    this.isOpen.set(!this.isOpen())
    this.toggle.emit()
  }
}
