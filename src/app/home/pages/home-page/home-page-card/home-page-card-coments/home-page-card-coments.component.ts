import { Component, input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ComentsModalComponent } from "../../../../../shared/coments-modal/coments-modal.component";

@Component({
  selector: 'app-home-page-card-coments',
  templateUrl: './home-page-card-coments.component.html',
  styleUrls: ['./home-page-card-coments.component.scss'],
  imports: [IonicModule, ComentsModalComponent]
})
export class HomePageCardComentsComponent  implements OnInit {
  idPost = input.required<string>()
  constructor() { }

  ngOnInit() {}

}
