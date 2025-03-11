import { Component, OnInit } from '@angular/core';
import { RegisterFormComponent } from "./register-form/register-form.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  imports: [RegisterFormComponent, RouterLink],
})
export default class RegisterPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
