import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [ReactiveFormsModule]
})
export class LoginFormComponent  implements OnInit {
  fb = inject(FormBuilder)

  datosForm = this.fb.group({
    credential:['', Validators.required],
    email:['', [Validators.required, Validators.email] ],
    pass:['', Validators.required]
    })

  constructor() { }

  ngOnInit() {}

}
