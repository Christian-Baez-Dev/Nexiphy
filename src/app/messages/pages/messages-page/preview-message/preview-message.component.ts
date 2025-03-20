import { Component, input, OnInit } from '@angular/core';
import { DynamicTruncatePipe } from 'src/app/pipes/dinamicTruncate.pipe';

@Component({
  selector: 'preview-message',
  templateUrl: './preview-message.component.html',
  styleUrls: ['./preview-message.component.scss'],
  imports: [DynamicTruncatePipe]
})
export class PreviewMessageComponent  implements OnInit {
  hasNewMessage = input<boolean>(false)
  constructor() { }

  ngOnInit() {}

}
