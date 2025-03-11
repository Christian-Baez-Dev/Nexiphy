import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from "./login-form/login-form.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [LoginFormComponent, RouterLink],
})
export default class LoginPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
