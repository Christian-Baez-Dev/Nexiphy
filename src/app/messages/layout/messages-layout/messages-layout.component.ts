import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonRouterOutlet } from "@ionic/angular/standalone";

@Component({
  selector: 'app-messages-layout',
  templateUrl: './messages-layout.component.html',
  styleUrls: ['./messages-layout.component.scss'],
  imports: [ RouterOutlet]
})
export default class MessagesLayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
