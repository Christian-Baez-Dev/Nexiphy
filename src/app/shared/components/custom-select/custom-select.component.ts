import { TitleCasePipe, NgClass } from '@angular/common';
import { Component, effect, input, OnInit, output, signal, ViewEncapsulation } from '@angular/core';
import { StatusPipe } from 'src/app/pipes/status.pipe';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  imports: [NgClass, StatusPipe],
  standalone: true,
  encapsulation: ViewEncapsulation.None,

})
export class CustomSelectComponent  implements OnInit {
  values =  input.required<any[]>()
  namesInput =  input.required<any[]>()
  selectedIndex = signal<number | null>(null)
  isOpen = signal<boolean>(false)
  value = output<any>()
  isMultiple = input<boolean>(false)
  placeholder = input<string>('Select a option')
  emptyMessage = input<string>('No data')


  constructor() { }

  ngOnInit() {

  }

  changeSelection(index : number){
    this.selectedIndex.set(index)
    this.isOpen.set(false)
    this.value.emit(this.values()[this.selectedIndex()!])
  }

  clear(){
    this.isOpen.set(false)
    this.selectedIndex.set(null)
  }
}
