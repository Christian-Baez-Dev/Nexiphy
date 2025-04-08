import { AfterViewInit, Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { ChatHeaderComponent } from "./chat-header/chat-header.component";


@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
  imports: [ChatHeaderComponent],
})
export default class ChatPageComponent  implements OnInit,AfterViewInit {


  chat = viewChild<ElementRef>('chat')
  constructor() { }

  ngAfterViewInit() {
    this.chat()!.nativeElement.scrollTop = this.chat()!.nativeElement.scrollHeight
  }

  ngOnInit() {

  }

}
