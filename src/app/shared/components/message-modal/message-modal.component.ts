import { Component, input, OnInit, output } from '@angular/core';
import { modalType } from 'src/app/interfaces/modal.inteface';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss'],
})
export class MessageModalComponent  implements OnInit {
  close = output()
  message = input.required<string>()
  type = input.required<modalType>()

  
  constructor() { }

  ngOnInit() {}

}
