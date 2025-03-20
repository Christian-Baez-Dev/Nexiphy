import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-no-nav-bar-layout',
  templateUrl: './no-nav-bar-layout.component.html',
  styleUrls: ['./no-nav-bar-layout.component.scss'],
  imports: [RouterOutlet]
})
export default class NoNavBarLayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
