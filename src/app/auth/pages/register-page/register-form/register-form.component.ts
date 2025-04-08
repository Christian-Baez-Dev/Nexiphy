import { NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { register } from 'swiper/element/bundle';
import { RegisterRequest } from '../../../interfaces/auth.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  imports: [ReactiveFormsModule, NgClass]
})
export class RegisterFormComponent  implements OnInit {
  passIsVisible = signal<boolean>(false)
  protected authService = inject(AuthService)
  protected router = inject(Router)
  fb = inject(FormBuilder)

  datosForm = this.fb.group({
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    username:['', Validators.required],
    email:['', [Validators.required, Validators.email] ],
    password:['', Validators.required]
    })

  constructor() { }

  ngOnInit() {}

  register(){
    if(this.datosForm.valid){
      console.log(this.datosForm)
      const user: RegisterRequest = {
        firstName: this.datosForm.value.firstName!,
        lastName: this.datosForm.value.lastName!,
        username: this.datosForm.value.username!,
        password: this.datosForm.value.password!,
        email: this.datosForm.value.email!,
      }

      this.authService.register(user).subscribe(response =>{
        console.log(response)
        if(response.isSuccess){
          this.router.navigate(['/nexiphy/home'])
        }
      })

    }
  }

}
