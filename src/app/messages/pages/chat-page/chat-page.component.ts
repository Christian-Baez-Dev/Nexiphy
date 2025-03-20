import { Component, OnInit } from '@angular/core';
import { ChatHeaderComponent } from "./chat-header/chat-header.component";

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
  imports: [ChatHeaderComponent],
})
export default class ChatPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
