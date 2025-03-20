import { Component, input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ComentComponent } from "./coment/coment.component";

@Component({
  selector: 'app-coments-modal',
  templateUrl: './coments-modal.component.html',
  styleUrls: ['./coments-modal.component.scss'],
  imports: [IonicModule, ComentComponent]
})
export class ComentsModalComponent  implements OnInit {
  trigger = input.required<string>()

  constructor() { }

  ngOnInit() {}

}
