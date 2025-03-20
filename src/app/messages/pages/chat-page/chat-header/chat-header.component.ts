import { Component, OnInit } from '@angular/core';
import { BackComponent } from "../../../../shared/components/back/back.component";

@Component({
  selector: 'chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss'],
  imports: [BackComponent],
})
export class ChatHeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
