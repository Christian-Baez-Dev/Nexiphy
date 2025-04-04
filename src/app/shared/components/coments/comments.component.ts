import { Component, input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommentsModalComponent } from '../../coments-modal/coments-modal.component';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  imports: [IonicModule, CommentsModalComponent]
})
export class CommentsComponent  implements OnInit {
  idPost = input.required<string>()
  constructor() { }

  ngOnInit() {}

}
