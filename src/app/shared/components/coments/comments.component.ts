import { Component, input, OnInit, effect } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommentsModalComponent } from '../../coments-modal/coments-modal.component';
import { previewComent } from 'src/app/interfaces/publish.interface';
import { TruncateNumberPipe } from 'src/app/pipes/truncate-number.pipe';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  imports: [IonicModule, CommentsModalComponent, TruncateNumberPipe]
})
export class CommentsComponent  implements OnInit {
  previewComment = input.required<previewComent>()

  constructor() { }

  ngOnInit() {}

}
