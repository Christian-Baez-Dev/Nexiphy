import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  imports: [ReactiveFormsModule]
})
export class RegisterFormComponent  implements OnInit {
  fb = inject(FormBuilder)

  datosForm = this.fb.group({
    userName:['', Validators.required],
    email:['', [Validators.required, Validators.email] ],
    pass:['', Validators.required]
    })

  constructor() { }

  ngOnInit() {}

}
