import { Component, input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommentComponent } from "./coment/coment.component";

@Component({
  selector: 'app-comments-modal',
  templateUrl: './coments-modal.component.html',
  styleUrls: ['./coments-modal.component.scss'],
  imports: [IonicModule, CommentComponent]
})
export class CommentsModalComponent  implements OnInit {
  trigger = input.required<string>()

  constructor() { }

  ngOnInit() {}

}
