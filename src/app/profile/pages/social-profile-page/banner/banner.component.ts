import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent  implements OnInit {
  protected authService = inject(AuthService)
  protected router = inject(Router)
  onLogout() {
    this.authService.logout().subscribe((response) =>{
      console.log(response)
      if(response.success){
        this.router.navigate(['/auth'])
      }
    })

  }

  constructor() { }

  ngOnInit() {}

}
