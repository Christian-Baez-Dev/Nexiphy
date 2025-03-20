import { Component, OnInit } from '@angular/core';
import { PreviewMessageComponent } from './preview-message/preview-message.component';
import { BackComponent } from "../../../shared/components/back/back.component";
import { SearchBarComponent } from "../../../shared/components/search-bar/search-bar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss'],
  imports: [PreviewMessageComponent, BackComponent, SearchBarComponent, RouterLink]
})
export default class MessagesPageComponent  implements OnInit {
clickMetod() {
  console.log('click')
}

  constructor() { }

  ngOnInit() {}

}
