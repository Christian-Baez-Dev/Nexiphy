import { Component, OnInit, output } from '@angular/core';
import { CustomSelectForInputComponent } from "../../../shared/components/custom-select-for-input/custom-select-for-input.component";

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss'],
  imports: [CustomSelectForInputComponent],
})
export class CreateAnnouncementComponent  implements OnInit {
  close = output()
  constructor() { }

  ngOnInit() {}

}
