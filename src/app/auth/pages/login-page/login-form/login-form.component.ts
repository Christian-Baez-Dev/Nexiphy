import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { LoginRequest } from 'src/app/auth/interfaces/auth.interface';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [ReactiveFormsModule]
})
export class LoginFormComponent  implements OnInit {
  fb = inject(FormBuilder)
  protected authService = inject(AuthService)

  datosForm = this.fb.group({
    credential:['', Validators.required],
    pass:['', Validators.required]
    })

  constructor() { }

  ngOnInit() {}

  pruebaLogin(){

    if(this.datosForm.valid){
      const user: LoginRequest = {
        email: this.datosForm.value.credential!,
        password: this.datosForm.value.pass!
      }
      this.authService.login(user).subscribe((response) =>{
        console.log(response)

      })
    }

  }

}

