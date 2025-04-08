import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { LoginRequest } from 'src/app/auth/interfaces/auth.interface';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [ReactiveFormsModule,NgClass]
})
export class LoginFormComponent  implements OnInit {
  fb = inject(FormBuilder)
  passIsVisible = signal<boolean>(false)

  protected authService = inject(AuthService)
  protected router = inject(Router)
  datosForm = this.fb.group({
    credential:['', Validators.required],
    pass:['', Validators.required]
    })

  constructor() { }

  ngOnInit() {}

  login(){
    if(this.datosForm.valid){
      const user: LoginRequest = {
        email: this.datosForm.value.credential!,
        password: this.datosForm.value.pass!
      }
      this.authService.login(user).subscribe((response) =>{
        if(response.isSuccess){
          localStorage.setItem('user', JSON.stringify(response.data));
          this.router.navigate(['/home'])
        }

      })
    }

  }

}

