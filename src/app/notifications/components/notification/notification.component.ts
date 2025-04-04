import { Component, input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent  implements OnInit {
  isLike = input<boolean>(false)
  isFollow = input<boolean>(false)


  constructor() { }

  ngOnInit() {}

}
