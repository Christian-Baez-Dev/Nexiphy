import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  imports: [RouterOutlet]
})
export default class AuthLayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
