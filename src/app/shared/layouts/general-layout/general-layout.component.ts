import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { RouterOutlet } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-general-layout',
  templateUrl: './general-layout.component.html',
  styleUrls: ['./general-layout.component.scss'],
  imports: [NavBarComponent, RouterOutlet],
})
export default class GeneralLayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
