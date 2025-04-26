import { Component, inject, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BackComponent } from "../back/back.component";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  imports: [BackComponent],
})
export class BannerComponent  implements OnInit {
  protected authService = inject(AuthService)
  protected router = inject(Router)
  isProfile = input<boolean>(false)
  onLogout() {
    this.authService.logout().subscribe((response) =>{
      if(response.success){
        this.router.navigate(['/auth'])
      }
    })

  }

  constructor() { }

  ngOnInit() {}

}
