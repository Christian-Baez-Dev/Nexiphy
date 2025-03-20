import { Component, effect, input, linkedSignal, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent  implements OnInit {

  value = output<string>()
  initialValue = input<string>()

  effecTime = input(300)
  inputValue = linkedSignal<string>(() => this.initialValue() ?? '')

  debounceEffect = effect((onCleanup) =>{
    const value = this.inputValue()

    const timeout = setTimeout(() =>{
      this.value.emit(value)
    }, this.effecTime())

    onCleanup(() =>{
      clearTimeout(timeout)
    })
  })


  constructor() { }

  ngOnInit() {}

}
