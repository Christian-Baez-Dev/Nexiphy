import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, input, OnInit, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-custom-select-for-input',
  templateUrl: './custom-select-for-input.component.html',
  styleUrls: ['./custom-select-for-input.component.scss'],
  imports: [TitleCasePipe, NgClass]
})
export class CustomSelectForInputComponent  implements OnInit {
  values =  input.required<any[]>()
  namesInput =  input<any[]>()
  names = signal<any[]>([])
  selectedIndex = signal<number>(0)
  constructor() { }

  ngOnInit() {
    if(this.namesInput()){
      this.names.set(this.namesInput()!)
    }else{
      this.names.set(this.values())
    }

    console.log(this.names())
  }

}
