import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  imports: [RouterOutlet, NavBarComponent]
})
export default class HomeLayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
